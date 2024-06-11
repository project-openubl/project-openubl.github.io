"use strict";(self.webpackChunkproject_openubl=self.webpackChunkproject_openubl||[]).push([[1794],{15680:(e,r,n)=>{n.d(r,{xA:()=>d,yg:()=>b});var t=n(96540);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=t.createContext({}),u=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},d=function(e){var r=u(e.components);return t.createElement(l.Provider,{value:r},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=u(n),m=i,b=p["".concat(l,".").concat(m)]||p[m]||s[m]||o;return n?t.createElement(b,a(a({ref:r},d),{},{components:n})):t.createElement(b,a({ref:r},d))}));function b(e,r){var n=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c[p]="string"==typeof e?e:i,a[1]=c;for(var u=2;u<o;u++)a[u]=n[u];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},47759:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>s,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var t=n(58168),i=(n(96540),n(15680));const o={title:"Invoice (Boleta/Factura)",description:"Crear boleta o factura"},a=void 0,c={unversionedId:"xbuilder/examples/invoice",id:"xbuilder/examples/invoice",title:"Invoice (Boleta/Factura)",description:"Crear boleta o factura",source:"@site/docs/04-xbuilder/06-examples/01-invoice.md",sourceDirName:"04-xbuilder/06-examples",slug:"/xbuilder/examples/invoice",permalink:"/docs/xbuilder/examples/invoice",draft:!1,editUrl:"https://github.com/project-openubl/website/tree/master/docs/04-xbuilder/06-examples/01-invoice.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Invoice (Boleta/Factura)",description:"Crear boleta o factura"},sidebar:"tutorialSidebar",previous:{title:"Preguntas frecuentes",permalink:"/docs/xbuilder/qa"},next:{title:"CreditNote (Nota de cr\xe9dito)",permalink:"/docs/xbuilder/examples/credit-note"}},l={},u=[{value:"Crear <em>Invoice</em>",id:"crear-invoice",level:2}],d={toc:u},p="wrapper";function s(e){let{components:r,...n}=e;return(0,i.yg)(p,(0,t.A)({},d,n,{components:r,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"crear-invoice"},"Crear ",(0,i.yg)("em",{parentName:"h2"},"Invoice")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-java"},'Defaults defaults;\nDateProvider dateProvider;\n\nInvoice input = Invoice.builder()\n        .serie("F001")\n        .numero(1)\n        .proveedor(Proveedor.builder()\n                .ruc("12345678912")\n                .razonSocial("Softgreen S.A.C.")\n                .build()\n        )\n        .cliente(Cliente.builder()\n                .nombre("Carlos Feria")\n                .numeroDocumentoIdentidad("12121212121")\n                .tipoDocumentoIdentidad(Catalog6.RUC.toString())\n                .build()\n        )\n        .detalle(DocumentoVentaDetalle.builder()\n                .descripcion("Item1")\n                .cantidad(new BigDecimal("10"))\n                .precio(new BigDecimal("100"))\n                .unidadMedida("KGM")\n                .build()\n        )\n        .detalle(DocumentoVentaDetalle.builder()\n                .descripcion("Item2")\n                .cantidad(new BigDecimal("10"))\n                .precio(new BigDecimal("100"))\n                .unidadMedida("KGM")\n                .build()\n        )\n        .build();\n\nContentEnricher enricher = new ContentEnricher(defaults, dateProvider);\nenricher.enrich(input);\n\nTemplate template = TemplateProducer.getInstance().getInvoice();\nString xml = template.data(input).render();\n')))}s.isMDXComponent=!0}}]);