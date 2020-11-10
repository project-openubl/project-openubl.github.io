(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{109:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return d}));var n=r(2),o=r(7),i=(r(0),r(123)),a={title:"CreditNote (Nota de cr\xe9dito)"},c={unversionedId:"xbuilder/library/peru/creditNote",id:"xbuilder/library/peru/creditNote",isDocsHomePage:!1,title:"CreditNote (Nota de cr\xe9dito)",description:"Create CreditNoteType",source:"@site/docs/xbuilder/library/peru/creditNote.md",slug:"/xbuilder/library/peru/creditNote",permalink:"/docs/xbuilder/library/peru/creditNote",editUrl:"https://github.com/project-openubl/website/edit/master/docs/xbuilder/library/peru/creditNote.md",version:"current",sidebar:"xbuilder",previous:{title:"Invoice (Boleta/Factura)",permalink:"/docs/xbuilder/library/peru/invoice"},next:{title:"DebitNote (Nota de d\xe9bito)",permalink:"/docs/xbuilder/library/peru/debitNote"}},u=[{value:"Create <em>CreditNoteType</em>",id:"create-creditnotetype",children:[]}],l={rightToc:u};function d(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"create-creditnotetype"},"Create ",Object(i.b)("em",{parentName:"h2"},"CreditNoteType")),Object(i.b)("p",null,"To create a ",Object(i.b)("inlineCode",{parentName:"p"},"CreditNoteType")," you only need to create an instance of ",Object(i.b)("inlineCode",{parentName:"p"},"CreditNoteInputModel"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'Config config;\nSystemClock clock;\n\n// Create the POJO\nCreditNoteInputModel pojo = CreditNoteInputModel.Builder.aCreditNoteInputModel()\n        .withSerie("FC01")\n        .withNumero(1)\n        .withSerieNumeroComprobanteAfectado("F001-1")\n        .withDescripcionSustento("mi sustento")\n        .withProveedor(ProveedorInputModel.Builder.aProveedorInputModel()\n                .withRuc("12345678912")\n                .withRazonSocial("Softgreen S.A.C.")\n                .build()\n        )\n        .withCliente(ClienteInputModel.Builder.aClienteInputModel()\n                .withNombre("Carlos Feria")\n                .withNumeroDocumentoIdentidad("12121212121")\n                .withTipoDocumentoIdentidad(Catalog6.RUC.toString())\n                .build()\n        )\n        .withDetalle(Arrays.asList(\n                DocumentLineInputModel.Builder.aDocumentLineInputModel()\n                        .withDescripcion("Item1")\n                        .withCantidad(new BigDecimal(10))\n                        .withPrecioUnitario(new BigDecimal(100))\n                        .build(),\n                DocumentLineInputModel.Builder.aDocumentLineInputModel()\n                        .withDescripcion("Item2")\n                        .withCantidad(new BigDecimal(10))\n                        .withPrecioUnitario(new BigDecimal(100))\n                        .build())\n        )\n        .build();\n\n// Create XML\nDocumentWrapper<CreditNoteOutputModel> result = DocumentManager.createXML(pojo, config, systemClock);\nCreditNoteOutputModel output = result.getOutput();\nString xml = result.getXml();\n')))}d.isMDXComponent=!0},123:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return s}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),d=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=d(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=d(r),m=n,s=p["".concat(a,".").concat(m)]||p[m]||b[m]||i;return r?o.a.createElement(s,c(c({ref:t},l),{},{components:r})):o.a.createElement(s,c({ref:t},l))}));function s(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);