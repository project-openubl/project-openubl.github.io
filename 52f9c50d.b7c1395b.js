(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{123:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=p(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,b=d["".concat(a,".").concat(m)]||d[m]||s[m]||o;return n?i.a.createElement(b,c(c({ref:t},l),{},{components:n})):i.a.createElement(b,c({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},77:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(2),i=n(7),o=(n(0),n(123)),a={title:"Invoice (Boleta/Factura)",description:"Crear invoice (boleta, factura)",keywords:["crear boleta","crear factura"]},c={unversionedId:"xbuilder/ejemplos/invoice",id:"xbuilder/ejemplos/invoice",isDocsHomePage:!1,title:"Invoice (Boleta/Factura)",description:"Crear invoice (boleta, factura)",source:"@site/docs/xbuilder/ejemplos/invoice.md",slug:"/xbuilder/ejemplos/invoice",permalink:"/docs/xbuilder/ejemplos/invoice",editUrl:"https://github.com/project-openubl/website/edit/master/docs/xbuilder/ejemplos/invoice.md",version:"current",sidebar:"xbuilder",previous:{title:"Firmar XML",permalink:"/docs/xbuilder/signXml"},next:{title:"CreditNote (Nota de cr\xe9dito)",permalink:"/docs/xbuilder/ejemplos/creditNote"}},u=[{value:"Create <em>InvoiceType</em>",id:"create-invoicetype",children:[]}],l={rightToc:u};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"create-invoicetype"},"Create ",Object(o.b)("em",{parentName:"h2"},"InvoiceType")),Object(o.b)("p",null,"Para crear una boleta/factura debes de crear una instancia de ",Object(o.b)("inlineCode",{parentName:"p"},"InvoiceInputModel")," y usarlo para crear el XML:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java",metastring:"{37}","{37}":!0}),'Config config;\nSystemClock clock;\n\n// Create the POJO\nInvoiceInputModel input = InvoiceInputModel.Builder.anInvoiceInputModel()\n    .withSerie("F001")\n    .withNumero(1)\n    .withProveedor(ProveedorInputModel.Builder.aProveedorInputModel()\n            .withRuc("12345678912")\n            .withRazonSocial("Softgreen S.A.C.")\n            .build()\n    )\n    .withCliente(ClienteInputModel.Builder.aClienteInputModel()\n            .withNombre("Carlos Feria")\n            .withNumeroDocumentoIdentidad("12121212121")\n            .withTipoDocumentoIdentidad(Catalog6.RUC.toString())\n            .build()\n    )\n    .withDetalle(Arrays.asList(\n            DocumentLineInputModel.Builder.aDocumentLineInputModel()\n                    .withDescripcion("Item1")\n                    .withCantidad(new BigDecimal(10))\n                    .withPrecioUnitario(new BigDecimal(100))\n                    .build(),\n            DocumentLineInputModel.Builder.aDocumentLineInputModel()\n                    .withDescripcion("Item2")\n                    .withCantidad(new BigDecimal(10))\n                    .withPrecioUnitario(new BigDecimal(100))\n                    .build())\n    )\n    .build();\n\n// Create Invoice\nDocumentWrapper<InvoiceOutputModel> result = DocumentManager.createXML(input, config, systemClock);\n\nInvoiceOutputModel output = result.getOutput(); // XML Var values\nString xml = result.getXml(); // XML content\n')))}p.isMDXComponent=!0}}]);