"use strict";(self.webpackChunkproject_openubl=self.webpackChunkproject_openubl||[]).push([[9059],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(r),m=i,b=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(b,o(o({ref:t},u),{},{components:r})):n.createElement(b,o({ref:t},u))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9607:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var n=r(83117),i=r(80102),a=(r(67294),r(3905)),o=["components"],c={title:"Introducci\xf3n",description:"Crea XMLs (comprobantes electr\xf3nicos) basados en UBL seg\xfan lo requerido por la SUNAT",keywords:["crear xml","ubl","ubl 2.1","factura sunat","facturaci\xf3n electr\xf3nica"],image:"img/xbuilder.svg",slug:"/xbuilder"},s=void 0,l={unversionedId:"xbuilder/introduction",id:"xbuilder/introduction",isDocsHomePage:!1,title:"Introducci\xf3n",description:"Crea XMLs (comprobantes electr\xf3nicos) basados en UBL seg\xfan lo requerido por la SUNAT",source:"@site/docs/04-xbuilder/01-introduction.md",sourceDirName:"04-xbuilder",slug:"/xbuilder",permalink:"/docs/xbuilder",editUrl:"https://github.com/project-openubl/website/edit/master/docs/04-xbuilder/01-introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Introducci\xf3n",description:"Crea XMLs (comprobantes electr\xf3nicos) basados en UBL seg\xfan lo requerido por la SUNAT",keywords:["crear xml","ubl","ubl 2.1","factura sunat","facturaci\xf3n electr\xf3nica"],image:"img/xbuilder.svg",slug:"/xbuilder"},sidebar:"tutorialSidebar",previous:{title:"Contribuir",permalink:"/docs/contributing"},next:{title:"Instalaci\xf3n",permalink:"/docs/xbuilder/installation"}},u=[{value:"Principios de dise\xf1o",id:"principios-de-dise\xf1o",children:[],level:2},{value:"Documentos soportados",id:"documentos-soportados",children:[],level:2}],p={toc:u};function d(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"XBuilder es una libreria Java que puede crear y firmar XMLs basados en UBL (Universal Bussiness Language) de acuerdo a los est\xe1ndares establecidos por la SUNAT."),(0,a.kt)("h2",{id:"principios-de-dise\xf1o"},"Principios de dise\xf1o"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"No requieres conocimientos del estandar UBL")," -\nXBuilder expone un conjunto de POJOs que, internamente, son transformados en archivos XMLs siguiendo los est\xe1ndares y especificaciones de UBL."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"C\xe1lculos matem\xe1ticos son hechos autom\xe1ticamente")," -\nXBuilder ejecuta todas las operaciones requeridas para generar determinados valores dentro de los archivos XML, por ejemplo: impuestos, totales, descuentos, etc."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Aplicar valores por defecto siempre que se posible")," - XBuilder rellena informaci\xf3n no espeficicada por el usuario usando valores por defecto. XBuilder requiere siempre informaci\xf3n m\xednima.")),(0,a.kt)("h2",{id:"documentos-soportados"},"Documentos soportados"),(0,a.kt)("ul",{className:"contains-task-list"},(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Boleta (InvoiceType)"),(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Factura (InvoiceType)"),(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Nota de cr\xe9dito (CreditNoteType)"),(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Nota de d\xe9bito (DebitNoteType)"),(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Baja (VoidedDocumentType)"),(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Resumen diario (SummaryDocumentType)"),(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Percepci\xf3n (PerceptionType)"),(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Retenci\xf3n (RetentionType)"),(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Gu\xeda de remisi\xf3n (DespatchDocumentType)")))}d.isMDXComponent=!0}}]);