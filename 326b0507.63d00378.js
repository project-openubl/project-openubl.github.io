(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{123:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(r),p=n,m=d["".concat(c,".").concat(p)]||d[p]||b[p]||i;return r?a.a.createElement(m,o(o({ref:t},l),{},{components:r})):a.a.createElement(m,o({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var l=2;l<i;l++)c[l]=r[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},72:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return o})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(2),a=r(7),i=(r(0),r(123)),c={title:"XBuilder",description:"Crea XMLs (comprobantes electr\xf3nicos) basados en UBL seg\xfan lo requerido por la SUNAT",keywords:["crear xml","ubl","ubl 2.1","factura sunat","facturaci\xf3n electr\xf3nica"],image:"img/xbuilder.svg",hide_title:!0,slug:"/xbuilder"},o={unversionedId:"xbuilder/index",id:"xbuilder/index",isDocsHomePage:!1,title:"XBuilder",description:"Crea XMLs (comprobantes electr\xf3nicos) basados en UBL seg\xfan lo requerido por la SUNAT",source:"@site/docs/xbuilder/index.md",slug:"/xbuilder",permalink:"/docs/xbuilder",editUrl:"https://github.com/project-openubl/website/edit/master/docs/xbuilder/index.md",version:"current",sidebar:"xbuilder",next:{title:"Instalaci\xf3n",permalink:"/docs/xbuilder/installation"}},s=[{value:"Introducci\xf3n",id:"introducci\xf3n",children:[]},{value:"Principios de dise\xf1o",id:"principios-de-dise\xf1o",children:[]},{value:"Documentos soportados",id:"documentos-soportados",children:[]}],l={rightToc:s};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"introducci\xf3n"},"Introducci\xf3n"),Object(i.b)("p",null,"XBuilder es una libreria Java que puede crear y firmar XMLs basados en UBL (Universtal Bussiness Language) de acuerdo a los est\xe1ndares establecidos por la SUNAT."),Object(i.b)("h2",{id:"principios-de-dise\xf1o"},"Principios de dise\xf1o"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"No requieres conocimientos del estandar UBL")," -\nXBuilder expone un conjunto de POJOs que, internamente, son transformados en archivos XMLs siguiendo los est\xe1ndares y especificaciones de UBL."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"C\xe1lculos matem\xe1ticos son hechos autom\xe1ticamente")," -\nXBuilder ejecuta todas las operaciones requeridas para generar determinados valores dentro de los archivos XML, por ejemplo: impuestos, totales, descuentos, etc."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Aplicar valores por defecto siempre que se posible")," - XBuilder rellena informaci\xf3n no espeficicada por el usuario usando valores por defecto. XBuilder requiere siempre informaci\xf3n m\xednima.")),Object(i.b)("h2",{id:"documentos-soportados"},"Documentos soportados"),Object(i.b)("ul",{className:"contains-task-list"},Object(i.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","Boleta (InvoiceType)"),Object(i.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","Factura (InvoiceType)"),Object(i.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","Nota de cr\xe9dito (CreditNoteType)"),Object(i.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","Nota de d\xe9bito (DebitNoteType)"),Object(i.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","Baja (VoidedDocumentType)"),Object(i.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","Resumen diario (SummaryDocumentType)"),Object(i.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Percepci\xf3n (PerceptionType)"),Object(i.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Retenci\xf3n (RetentionType)"),Object(i.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Gu\xeda de remisi\xf3n (DespatchDocumentType)")))}u.isMDXComponent=!0}}]);