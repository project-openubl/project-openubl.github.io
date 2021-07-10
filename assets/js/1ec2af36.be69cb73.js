(self.webpackChunkproject_openubl=self.webpackChunkproject_openubl||[]).push([[7645],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),s=c(n),m=o,b=s["".concat(l,".").concat(m)]||s[m]||p[m]||i;return n?r.createElement(b,a(a({ref:t},d),{},{components:n})):r.createElement(b,a({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=s;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},86262:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return s}});var r=n(22122),o=n(19756),i=(n(67294),n(3905)),a=["components"],u={title:"DebitNote (Nota de d\xe9bito)",description:"Crear nota de debito"},l=void 0,c={unversionedId:"xbuilder/examples/debit-note",id:"xbuilder/examples/debit-note",isDocsHomePage:!1,title:"DebitNote (Nota de d\xe9bito)",description:"Crear nota de debito",source:"@site/docs/04-xbuilder/07-examples/03-debit-note.md",sourceDirName:"04-xbuilder/07-examples",slug:"/xbuilder/examples/debit-note",permalink:"/docs/xbuilder/examples/debit-note",editUrl:"https://github.com/project-openubl/website/edit/master/docs/04-xbuilder/07-examples/03-debit-note.md",version:"current",sidebarPosition:3,frontMatter:{title:"DebitNote (Nota de d\xe9bito)",description:"Crear nota de debito"},sidebar:"tutorialSidebar",previous:{title:"CreditNote (Nota de cr\xe9dito)",permalink:"/docs/xbuilder/examples/credit-note"},next:{title:"VoidedDocument (Baja)",permalink:"/docs/xbuilder/examples/voided-document"}},d=[{value:"Create <em>DebitNoteType</em>",id:"create-debitnotetype",children:[]}],p={toc:d};function s(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"create-debitnotetype"},"Create ",(0,i.kt)("em",{parentName:"h2"},"DebitNoteType")),(0,i.kt)("p",null,"Para crear una nota de d\xe9bito debes de crear una instancia de ",(0,i.kt)("inlineCode",{parentName:"p"},"DebitNoteInputModel")," y usarlo para crear el XML:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"{38}","{38}":!0},'Config config;\nSystemClock clock;\n\n// Create the POJO\nDebitNoteInputModel pojo = DebitNoteInputModel.Builder.aDebitNoteInputModel()\n        .withSerie("FD01")\n        .withNumero(1)\n        .withSerieNumeroComprobanteAfectado("F001-1")\n        .withDescripcionSustento("mi sustento")\n        .withProveedor(ProveedorInputModel.Builder.aProveedorInputModel()\n                .withRuc("12345678912")\n                .withRazonSocial("Softgreen S.A.C.")\n                .build()\n        )\n        .withCliente(ClienteInputModel.Builder.aClienteInputModel()\n                .withNombre("Carlos Feria")\n                .withNumeroDocumentoIdentidad("12121212121")\n                .withTipoDocumentoIdentidad(Catalog6.RUC.toString())\n                .build()\n        )\n        .withDetalle(Arrays.asList(\n                DocumentLineInputModel.Builder.aDocumentLineInputModel()\n                        .withDescripcion("Item1")\n                        .withCantidad(new BigDecimal(10))\n                        .withPrecioUnitario(new BigDecimal(100))\n                        .build(),\n                DocumentLineInputModel.Builder.aDocumentLineInputModel()\n                        .withDescripcion("Item2")\n                        .withCantidad(new BigDecimal(10))\n                        .withPrecioUnitario(new BigDecimal(100))\n                        .build())\n        )\n        .build();\n\n// Create XML\nDocumentWrapper<DebitNoteOutputModel> result = DocumentManager.createXML(pojo, config, systemClock);\nDebitNoteOutputModel output = result.getOutput();\nString xml = result.getXml();\n')))}s.isMDXComponent=!0}}]);