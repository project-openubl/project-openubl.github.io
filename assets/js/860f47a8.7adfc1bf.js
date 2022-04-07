"use strict";(self.webpackChunkproject_openubl=self.webpackChunkproject_openubl||[]).push([[339],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=l(n),m=o,f=s["".concat(u,".").concat(m)]||s[m]||d[m]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=s;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},5758:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return d}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],c={title:"Invoice (Boleta/Factura)",description:"Crear boleta o factura"},u=void 0,l={unversionedId:"xbuilder/examples/invoice",id:"xbuilder/examples/invoice",title:"Invoice (Boleta/Factura)",description:"Crear boleta o factura",source:"@site/docs/04-xbuilder/07-examples/01-invoice.md",sourceDirName:"04-xbuilder/07-examples",slug:"/xbuilder/examples/invoice",permalink:"/docs/xbuilder/examples/invoice",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04-xbuilder/07-examples/01-invoice.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Invoice (Boleta/Factura)",description:"Crear boleta o factura"},sidebar:"tutorialSidebar",previous:{title:"Preguntas frecuentes",permalink:"/docs/xbuilder/qa"},next:{title:"CreditNote (Nota de cr\xe9dito)",permalink:"/docs/xbuilder/examples/credit-note"}},p={},d=[{value:"Crear <em>InvoiceType</em>",id:"crear-invoicetype",level:2}],s={toc:d};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"crear-invoicetype"},"Crear ",(0,i.kt)("em",{parentName:"h2"},"InvoiceType")),(0,i.kt)("p",null,"Para crear una boleta/factura debes de crear una instancia de ",(0,i.kt)("inlineCode",{parentName:"p"},"InvoiceInputModel")," y usarlo para crear el XML:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"{37}","{37}":!0},'Config config;\nSystemClock clock;\n\n// Create the POJO\nInvoiceInputModel input = InvoiceInputModel.Builder.anInvoiceInputModel()\n    .withSerie("F001")\n    .withNumero(1)\n    .withProveedor(ProveedorInputModel.Builder.aProveedorInputModel()\n            .withRuc("12345678912")\n            .withRazonSocial("Softgreen S.A.C.")\n            .build()\n    )\n    .withCliente(ClienteInputModel.Builder.aClienteInputModel()\n            .withNombre("Carlos Feria")\n            .withNumeroDocumentoIdentidad("12121212121")\n            .withTipoDocumentoIdentidad(Catalog6.RUC.toString())\n            .build()\n    )\n    .withDetalle(Arrays.asList(\n            DocumentLineInputModel.Builder.aDocumentLineInputModel()\n                    .withDescripcion("Item1")\n                    .withCantidad(new BigDecimal(10))\n                    .withPrecioUnitario(new BigDecimal(100))\n                    .build(),\n            DocumentLineInputModel.Builder.aDocumentLineInputModel()\n                    .withDescripcion("Item2")\n                    .withCantidad(new BigDecimal(10))\n                    .withPrecioUnitario(new BigDecimal(100))\n                    .build())\n    )\n    .build();\n\n// Create Invoice\nDocumentWrapper<InvoiceOutputModel> result = DocumentManager.createXML(input, config, systemClock);\n\nInvoiceOutputModel output = result.getOutput(); // XML Var values\nString xml = result.getXml(); // XML content\n')))}m.isMDXComponent=!0}}]);