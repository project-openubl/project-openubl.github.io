(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{123:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return s}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),d=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},p=function(e){var t=d(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=d(n),m=r,s=p["".concat(a,".").concat(m)]||p[m]||b[m]||i;return n?o.a.createElement(s,u(u({ref:t},l),{},{components:n})):o.a.createElement(s,u({ref:t},l))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:r,a[1]=u;for(var l=2;l<i;l++)a[l]=n[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},62:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));var r=n(2),o=n(7),i=(n(0),n(123)),a={title:"DebitNote (Nota de d\xe9bito)"},u={unversionedId:"xbuilder/library/peru/debitNote",id:"xbuilder/library/peru/debitNote",isDocsHomePage:!1,title:"DebitNote (Nota de d\xe9bito)",description:"Create DebitNoteType",source:"@site/docs/xbuilder/library/peru/debitNote.md",slug:"/xbuilder/library/peru/debitNote",permalink:"/docs/xbuilder/library/peru/debitNote",editUrl:"https://github.com/project-openubl/website/edit/master/docs/xbuilder/library/peru/debitNote.md",version:"current",sidebar:"xbuilder",previous:{title:"CreditNote (Nota de cr\xe9dito)",permalink:"/docs/xbuilder/library/peru/creditNote"},next:{title:"VoidedDocument (Baja)",permalink:"/docs/xbuilder/library/peru/voidedDocument"}},c=[{value:"Create <em>DebitNoteType</em>",id:"create-debitnotetype",children:[]}],l={rightToc:c};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"create-debitnotetype"},"Create ",Object(i.b)("em",{parentName:"h2"},"DebitNoteType")),Object(i.b)("p",null,"To create a ",Object(i.b)("inlineCode",{parentName:"p"},"DebitNoteType")," you only need to create an instance of ",Object(i.b)("inlineCode",{parentName:"p"},"DebitNoteInputModel"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'Config config;\nSystemClock clock;\n\n// Create the POJO\nDebitNoteInputModel pojo = DebitNoteInputModel.Builder.aDebitNoteInputModel()\n        .withSerie("FD01")\n        .withNumero(1)\n        .withSerieNumeroComprobanteAfectado("F001-1")\n        .withDescripcionSustento("mi sustento")\n        .withProveedor(ProveedorInputModel.Builder.aProveedorInputModel()\n                .withRuc("12345678912")\n                .withRazonSocial("Softgreen S.A.C.")\n                .build()\n        )\n        .withCliente(ClienteInputModel.Builder.aClienteInputModel()\n                .withNombre("Carlos Feria")\n                .withNumeroDocumentoIdentidad("12121212121")\n                .withTipoDocumentoIdentidad(Catalog6.RUC.toString())\n                .build()\n        )\n        .withDetalle(Arrays.asList(\n                DocumentLineInputModel.Builder.aDocumentLineInputModel()\n                        .withDescripcion("Item1")\n                        .withCantidad(new BigDecimal(10))\n                        .withPrecioUnitario(new BigDecimal(100))\n                        .build(),\n                DocumentLineInputModel.Builder.aDocumentLineInputModel()\n                        .withDescripcion("Item2")\n                        .withCantidad(new BigDecimal(10))\n                        .withPrecioUnitario(new BigDecimal(100))\n                        .build())\n        )\n        .build();\n\n// Create XML\nDocumentWrapper<DebitNoteOutputModel> result = DocumentManager.createXML(pojo, config, systemClock);\nDebitNoteOutputModel output = result.getOutput();\nString xml = result.getXml();\n')))}d.isMDXComponent=!0}}]);