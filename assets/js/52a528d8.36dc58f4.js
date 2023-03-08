"use strict";(self.webpackChunkproject_openubl=self.webpackChunkproject_openubl||[]).push([[9629],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>b});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=u(r),m=i,b=p["".concat(l,".").concat(m)]||p[m]||s[m]||o;return r?n.createElement(b,a(a({ref:t},d),{},{components:r})):n.createElement(b,a({ref:t},d))}));function b(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:i,a[1]=c;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},784:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>s,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var n=r(87462),i=(r(67294),r(3905));const o={title:"Invoice (Boleta/Factura)",description:"Crear boleta o factura"},a=void 0,c={unversionedId:"xbuilder/examples/invoice",id:"xbuilder/examples/invoice",title:"Invoice (Boleta/Factura)",description:"Crear boleta o factura",source:"@site/docs/04-xbuilder/06-examples/01-invoice.md",sourceDirName:"04-xbuilder/06-examples",slug:"/xbuilder/examples/invoice",permalink:"/docs/xbuilder/examples/invoice",draft:!1,editUrl:"https://github.com/project-openubl/website/tree/master/docs/04-xbuilder/06-examples/01-invoice.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Invoice (Boleta/Factura)",description:"Crear boleta o factura"},sidebar:"tutorialSidebar",previous:{title:"Preguntas frecuentes",permalink:"/docs/xbuilder/qa"},next:{title:"CreditNote (Nota de cr\xe9dito)",permalink:"/docs/xbuilder/examples/credit-note"}},l={},u=[{value:"Crear <em>Invoice</em>",id:"crear-invoice",level:2}],d={toc:u},p="wrapper";function s(e){let{components:t,...r}=e;return(0,i.kt)(p,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"crear-invoice"},"Crear ",(0,i.kt)("em",{parentName:"h2"},"Invoice")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'Defaults defaults;\nDateProvider dateProvider;\n\nInvoice input = Invoice.builder()\n        .serie("F001")\n        .numero(1)\n        .proveedor(Proveedor.builder()\n                .ruc("12345678912")\n                .razonSocial("Softgreen S.A.C.")\n                .build()\n        )\n        .cliente(Cliente.builder()\n                .nombre("Carlos Feria")\n                .numeroDocumentoIdentidad("12121212121")\n                .tipoDocumentoIdentidad(Catalog6.RUC.toString())\n                .build()\n        )\n        .detalle(DocumentoVentaDetalle.builder()\n                .descripcion("Item1")\n                .cantidad(new BigDecimal("10"))\n                .precio(new BigDecimal("100"))\n                .unidadMedida("KGM")\n                .build()\n        )\n        .detalle(DocumentoVentaDetalle.builder()\n                .descripcion("Item2")\n                .cantidad(new BigDecimal("10"))\n                .precio(new BigDecimal("100"))\n                .unidadMedida("KGM")\n                .build()\n        )\n        .build();\n\nContentEnricher enricher = new ContentEnricher(defaults, dateProvider);\nenricher.enrich(input);\n\nTemplate template = TemplateProducer.getInstance().getInvoice();\nString xml = template.data(input).render();\n')))}s.isMDXComponent=!0}}]);