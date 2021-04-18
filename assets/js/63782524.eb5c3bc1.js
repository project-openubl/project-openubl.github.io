(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{128:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return l}));var r=n(4),o=n(11),a=(n(0),n(188)),i={title:"VoidedDocument (Baja)",description:"Crear baja"},c={unversionedId:"xbuilder/ejemplos/voidedDocument",id:"xbuilder/ejemplos/voidedDocument",isDocsHomePage:!1,title:"VoidedDocument (Baja)",description:"Crear baja",source:"@site/docs/xbuilder/ejemplos/voidedDocument.md",sourceDirName:"xbuilder/ejemplos",slug:"/xbuilder/ejemplos/voidedDocument",permalink:"/docs/xbuilder/ejemplos/voidedDocument",editUrl:"https://github.com/project-openubl/website/edit/master/docs/xbuilder/ejemplos/voidedDocument.md",version:"current",frontMatter:{title:"VoidedDocument (Baja)",description:"Crear baja"},sidebar:"xbuilder",previous:{title:"DebitNote (Nota de d\xe9bito)",permalink:"/docs/xbuilder/ejemplos/debitNote"},next:{title:"SummaryDocument (Resumen diario)",permalink:"/docs/xbuilder/ejemplos/summaryDocument"}},u=[{value:"Create <em>VoidedDocumentType</em>",id:"create-voideddocumenttype",children:[]},{value:"How the <em>documentID</em> is calculated",id:"how-the-documentid-is-calculated",children:[]}],d={toc:u};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"create-voideddocumenttype"},"Create ",Object(a.b)("em",{parentName:"h2"},"VoidedDocumentType")),Object(a.b)("p",null,"Para crear una baja debes de crear una instancia de ",Object(a.b)("inlineCode",{parentName:"p"},"VoidedDocumentInputModel")," y usarlo para crear el XML:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-java",metastring:"{24}","{24}":!0},'Config config;\nSystemClock clock;\n\n// Create the POJO\nVoidedDocumentInputModel pojo = VoidedDocumentInputModel.Builder.aVoidedDocumentInputModel()\n        .withNumero(1)\n        .withProveedor(ProveedorInputModel.Builder.aProveedorInputModel()\n                .withRuc("12345678912")\n                .withRazonSocial("Softgreen S.A.C.")\n                .build()\n        )\n        .withDescripcionSustento("mi razon de baja")\n        .withComprobante(\n                VoidedDocumentLineInputModel.Builder.aVoidedDocumentLineInputModel()\n                        .withSerieNumero("F001-1")\n                        .withTipoComprobante(Catalog1.FACTURA.toString())\n                        .build()\n        )\n        .build();\n\n// Create XML\nDocumentWrapper<VoidedDocumentOutputModel> result = DocumentManager.createXML(pojo, config, systemClock);\nVoidedDocumentOutputModel output = result.getOutput();\nString xml = result.getXml();\n')),Object(a.b)("h2",{id:"how-the-documentid-is-calculated"},"How the ",Object(a.b)("em",{parentName:"h2"},"documentID")," is calculated"),Object(a.b)("p",null,"The ",Object(a.b)("em",{parentName:"p"},"documentID")," has the structure:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("em",{parentName:"li"},"code-date-number"),". E.g. ",Object(a.b)("inlineCode",{parentName:"li"},"RA-20190101-1"))),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"XBuilder")," will create the correct ",Object(a.b)("em",{parentName:"p"},"documentID")," for you, you only need to define the ",Object(a.b)("inlineCode",{parentName:"p"},"number")," of ",Object(a.b)("em",{parentName:"p"},"VoidedDocuments")," created during the day."))}l.isMDXComponent=!0},188:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return s}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=o.a.createContext({}),l=function(e){var t=o.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return o.a.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),p=l(n),b=r,s=p["".concat(i,".").concat(b)]||p[b]||m[b]||a;return n?o.a.createElement(s,c(c({ref:t},d),{},{components:n})):o.a.createElement(s,c({ref:t},d))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var d=2;d<a;d++)i[d]=n[d];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);