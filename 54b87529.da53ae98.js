(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{155:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),d=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},s=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=d(n),m=r,b=s["".concat(a,".").concat(m)]||s[m]||p[m]||i;return n?o.a.createElement(b,c(c({ref:t},u),{},{components:n})):o.a.createElement(b,c({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},96:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var r=n(3),o=n(8),i=(n(0),n(155)),a={title:"CreditNote (Nota de cr\xe9dito)",description:"Crear nota de credito"},c={unversionedId:"xbuilder/ejemplos/creditNote",id:"xbuilder/ejemplos/creditNote",isDocsHomePage:!1,title:"CreditNote (Nota de cr\xe9dito)",description:"Crear nota de credito",source:"@site/docs/xbuilder/ejemplos/creditNote.md",slug:"/xbuilder/ejemplos/creditNote",permalink:"/docs/xbuilder/ejemplos/creditNote",editUrl:"https://github.com/project-openubl/website/edit/master/docs/xbuilder/ejemplos/creditNote.md",version:"current",sidebar:"xbuilder",previous:{title:"Invoice (Boleta/Factura)",permalink:"/docs/xbuilder/ejemplos/invoice"},next:{title:"DebitNote (Nota de d\xe9bito)",permalink:"/docs/xbuilder/ejemplos/debitNote"}},l=[{value:"Create <em>CreditNoteType</em>",id:"create-creditnotetype",children:[]}],u={toc:l};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.a)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.a)("h2",{id:"create-creditnotetype"},"Create ",Object(i.a)("em",{parentName:"h2"},"CreditNoteType")),Object(i.a)("p",null,"Para crear una nota de cr\xe9dito debes de crear una instancia de ",Object(i.a)("inlineCode",{parentName:"p"},"CreditNoteInputModel")," y usarlo para crear el XML:"),Object(i.a)("pre",null,Object(i.a)("code",Object(r.a)({parentName:"pre"},{className:"language-java",metastring:"{38}","{38}":!0}),'Config config;\nSystemClock clock;\n\n// Create the POJO\nCreditNoteInputModel pojo = CreditNoteInputModel.Builder.aCreditNoteInputModel()\n        .withSerie("FC01")\n        .withNumero(1)\n        .withSerieNumeroComprobanteAfectado("F001-1")\n        .withDescripcionSustento("mi sustento")\n        .withProveedor(ProveedorInputModel.Builder.aProveedorInputModel()\n                .withRuc("12345678912")\n                .withRazonSocial("Softgreen S.A.C.")\n                .build()\n        )\n        .withCliente(ClienteInputModel.Builder.aClienteInputModel()\n                .withNombre("Carlos Feria")\n                .withNumeroDocumentoIdentidad("12121212121")\n                .withTipoDocumentoIdentidad(Catalog6.RUC.toString())\n                .build()\n        )\n        .withDetalle(Arrays.asList(\n                DocumentLineInputModel.Builder.aDocumentLineInputModel()\n                        .withDescripcion("Item1")\n                        .withCantidad(new BigDecimal(10))\n                        .withPrecioUnitario(new BigDecimal(100))\n                        .build(),\n                DocumentLineInputModel.Builder.aDocumentLineInputModel()\n                        .withDescripcion("Item2")\n                        .withCantidad(new BigDecimal(10))\n                        .withPrecioUnitario(new BigDecimal(100))\n                        .build())\n        )\n        .build();\n\n// Create XML\nDocumentWrapper<CreditNoteOutputModel> result = DocumentManager.createXML(pojo, config, systemClock);\nCreditNoteOutputModel output = result.getOutput();\nString xml = result.getXml();\n')))}d.isMDXComponent=!0}}]);