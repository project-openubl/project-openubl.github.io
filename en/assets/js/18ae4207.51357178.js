(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{162:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),d=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=d(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=d(n),m=r,b=p["".concat(a,".").concat(m)]||p[m]||s[m]||i;return n?o.a.createElement(b,c(c({ref:t},l),{},{components:n})):o.a.createElement(b,c({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},87:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return d}));var r=n(3),o=n(8),i=(n(0),n(162)),a={title:"CreditNote (Nota de cr\xe9dito)",description:"Crear nota de credito"},c={unversionedId:"xbuilder/ejemplos/creditNote",id:"xbuilder/ejemplos/creditNote",isDocsHomePage:!1,title:"CreditNote (Nota de cr\xe9dito)",description:"Crear nota de credito",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/xbuilder/ejemplos/creditNote.md",slug:"/xbuilder/ejemplos/creditNote",permalink:"/en/docs/xbuilder/ejemplos/creditNote",editUrl:"https://github.com/project-openubl/website/edit/master/docs/xbuilder/ejemplos/creditNote.md",version:"current",sidebar:"xbuilder",previous:{title:"Invoice (Boleta/Factura)",permalink:"/en/docs/xbuilder/ejemplos/invoice"},next:{title:"DebitNote (Nota de d\xe9bito)",permalink:"/en/docs/xbuilder/ejemplos/debitNote"}},u=[{value:"Create <em>CreditNoteType</em>",id:"create-creditnotetype",children:[]}],l={toc:u};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"create-creditnotetype"},"Create ",Object(i.b)("em",{parentName:"h2"},"CreditNoteType")),Object(i.b)("p",null,"Para crear una nota de cr\xe9dito debes de crear una instancia de ",Object(i.b)("inlineCode",{parentName:"p"},"CreditNoteInputModel")," y usarlo para crear el XML:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java",metastring:"{38}","{38}":!0},'Config config;\nSystemClock clock;\n\n// Create the POJO\nCreditNoteInputModel pojo = CreditNoteInputModel.Builder.aCreditNoteInputModel()\n        .withSerie("FC01")\n        .withNumero(1)\n        .withSerieNumeroComprobanteAfectado("F001-1")\n        .withDescripcionSustento("mi sustento")\n        .withProveedor(ProveedorInputModel.Builder.aProveedorInputModel()\n                .withRuc("12345678912")\n                .withRazonSocial("Softgreen S.A.C.")\n                .build()\n        )\n        .withCliente(ClienteInputModel.Builder.aClienteInputModel()\n                .withNombre("Carlos Feria")\n                .withNumeroDocumentoIdentidad("12121212121")\n                .withTipoDocumentoIdentidad(Catalog6.RUC.toString())\n                .build()\n        )\n        .withDetalle(Arrays.asList(\n                DocumentLineInputModel.Builder.aDocumentLineInputModel()\n                        .withDescripcion("Item1")\n                        .withCantidad(new BigDecimal(10))\n                        .withPrecioUnitario(new BigDecimal(100))\n                        .build(),\n                DocumentLineInputModel.Builder.aDocumentLineInputModel()\n                        .withDescripcion("Item2")\n                        .withCantidad(new BigDecimal(10))\n                        .withPrecioUnitario(new BigDecimal(100))\n                        .build())\n        )\n        .build();\n\n// Create XML\nDocumentWrapper<CreditNoteOutputModel> result = DocumentManager.createXML(pojo, config, systemClock);\nCreditNoteOutputModel output = result.getOutput();\nString xml = result.getXml();\n')))}d.isMDXComponent=!0}}]);