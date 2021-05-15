(self.webpackChunkproject_openubl=self.webpackChunkproject_openubl||[]).push([[77],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return s}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),m=d(n),s=o,f=m["".concat(c,".").concat(s)]||m[s]||p[s]||a;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function s(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var d=2;d<a;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},82242:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return u},toc:function(){return c},default:function(){return l}});var r=n(22122),o=n(19756),a=(n(67294),n(3905)),i={title:"VoidedDocument (Baja)",description:"Crear baja"},u={unversionedId:"xbuilder/examples/voided-document",id:"xbuilder/examples/voided-document",isDocsHomePage:!1,title:"VoidedDocument (Baja)",description:"Crear baja",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/04-xbuilder/07-examples/04-voided-document.md",sourceDirName:"04-xbuilder/07-examples",slug:"/xbuilder/examples/voided-document",permalink:"/en/docs/xbuilder/examples/voided-document",editUrl:"https://github.com/project-openubl/website/edit/master/docs/04-xbuilder/07-examples/04-voided-document.md",version:"current",sidebarPosition:4,frontMatter:{title:"VoidedDocument (Baja)",description:"Crear baja"},sidebar:"tutorialSidebar",previous:{title:"DebitNote (Nota de d\xe9bito)",permalink:"/en/docs/xbuilder/examples/debit-note"},next:{title:"SummaryDocument (Resumen diario)",permalink:"/en/docs/xbuilder/examples/summary-document"}},c=[{value:"Create <em>VoidedDocumentType</em>",id:"create-voideddocumenttype",children:[]},{value:"How the <em>documentID</em> is calculated",id:"how-the-documentid-is-calculated",children:[]}],d={toc:c};function l(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"create-voideddocumenttype"},"Create ",(0,a.kt)("em",{parentName:"h2"},"VoidedDocumentType")),(0,a.kt)("p",null,"Para crear una baja debes de crear una instancia de ",(0,a.kt)("inlineCode",{parentName:"p"},"VoidedDocumentInputModel")," y usarlo para crear el XML:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:"{24}","{24}":!0},'Config config;\nSystemClock clock;\n\n// Create the POJO\nVoidedDocumentInputModel pojo = VoidedDocumentInputModel.Builder.aVoidedDocumentInputModel()\n        .withNumero(1)\n        .withProveedor(ProveedorInputModel.Builder.aProveedorInputModel()\n                .withRuc("12345678912")\n                .withRazonSocial("Softgreen S.A.C.")\n                .build()\n        )\n        .withDescripcionSustento("mi razon de baja")\n        .withComprobante(\n                VoidedDocumentLineInputModel.Builder.aVoidedDocumentLineInputModel()\n                        .withSerieNumero("F001-1")\n                        .withTipoComprobante(Catalog1.FACTURA.toString())\n                        .build()\n        )\n        .build();\n\n// Create XML\nDocumentWrapper<VoidedDocumentOutputModel> result = DocumentManager.createXML(pojo, config, systemClock);\nVoidedDocumentOutputModel output = result.getOutput();\nString xml = result.getXml();\n')),(0,a.kt)("h2",{id:"how-the-documentid-is-calculated"},"How the ",(0,a.kt)("em",{parentName:"h2"},"documentID")," is calculated"),(0,a.kt)("p",null,"The ",(0,a.kt)("em",{parentName:"p"},"documentID")," has the structure:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"code-date-number"),". E.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"RA-20190101-1"))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"XBuilder")," will create the correct ",(0,a.kt)("em",{parentName:"p"},"documentID")," for you, you only need to define the ",(0,a.kt)("inlineCode",{parentName:"p"},"number")," of ",(0,a.kt)("em",{parentName:"p"},"VoidedDocuments")," created during the day."))}l.isMDXComponent=!0}}]);