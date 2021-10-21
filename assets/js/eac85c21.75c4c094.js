(self.webpackChunkproject_openubl=self.webpackChunkproject_openubl||[]).push([[7676],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),d=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return o.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},s=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=d(n),m=r,b=s["".concat(c,".").concat(m)]||s[m]||p[m]||a;return n?o.createElement(b,i(i({ref:t},u),{},{components:n})):o.createElement(b,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<a;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}s.displayName="MDXCreateElement"},4485:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return u},default:function(){return s}});var o=n(74034),r=n(79973),a=(n(67294),n(3905)),i=["components"],l={title:"ICB"},c=void 0,d={unversionedId:"xbuilder/examples/icb",id:"xbuilder/examples/icb",isDocsHomePage:!1,title:"ICB",description:"Inpuesto al Consumo de Bolsas pl\xe1sticas (ICB) es un impuesto aplicado a cada producto o servicio vendido y puede estar presente en boleta, factura, nota de c\u0155edito, o nota de d\xe9bito.",source:"@site/docs/04-xbuilder/07-examples/07-icb.md",sourceDirName:"04-xbuilder/07-examples",slug:"/xbuilder/examples/icb",permalink:"/docs/xbuilder/examples/icb",editUrl:"https://github.com/project-openubl/website/edit/master/docs/04-xbuilder/07-examples/07-icb.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"ICB"},sidebar:"tutorialSidebar",previous:{title:"IGV",permalink:"/docs/xbuilder/examples/igv"},next:{title:"Precio",permalink:"/docs/xbuilder/examples/selling-price"}},u=[{value:"Valor del <em>ICB</em>",id:"valor-del-icb",children:[],level:2},{value:"Valor por defecto del <em>ICB</em>",id:"valor-por-defecto-del-icb",children:[],level:2},{value:"Ejemplos",id:"ejemplos",children:[{value:"<em>Invoice (boleta/factura)</em>",id:"invoice-boletafactura",children:[],level:3},{value:"<em>CreditNote (nota de cr\xe9dito)</em>",id:"creditnote-nota-de-cr\xe9dito",children:[],level:3},{value:"<em>DebitNote (nota de d\xe9bito)</em>",id:"debitnote-nota-de-d\xe9bito",children:[],level:3}],level:2}],p={toc:u};function s(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Inpuesto al Consumo de Bolsas pl\xe1sticas (ICB)")," es un impuesto aplicado a cada producto o servicio vendido y puede estar presente en ",(0,a.kt)("strong",{parentName:"p"},"boleta, factura, nota de c\u0155edito, o nota de d\xe9bito"),"."),(0,a.kt)("p",null,"El valor actual del ",(0,a.kt)("em",{parentName:"p"},"ICB")," es ",(0,a.kt)("em",{parentName:"p"},"0.3 Soles")," pero este valor puede cambiar con el tiempo. Puedes configurar el valor del ICB en ",(0,a.kt)("a",{parentName:"p",href:"../concepts#config"},"Conceptos b\xe1sicos"),"."),(0,a.kt)("h2",{id:"valor-del-icb"},"Valor del ",(0,a.kt)("em",{parentName:"h2"},"ICB")),(0,a.kt)("p",null,"El valor del ",(0,a.kt)("em",{parentName:"p"},"ICB")," es definido en ",(0,a.kt)("inlineCode",{parentName:"p"},"Config"),". Puedes leer sonbre ",(0,a.kt)("inlineCode",{parentName:"p"},"Config")," en ",(0,a.kt)("a",{parentName:"p",href:"../concepts#config"},"Conceptos b\xe1sicos"),"."),(0,a.kt)("h2",{id:"valor-por-defecto-del-icb"},"Valor por defecto del ",(0,a.kt)("em",{parentName:"h2"},"ICB")),(0,a.kt)("p",null,"Por defecto el ICB no es aplicado a los productos o servicios vendidos."),(0,a.kt)("h2",{id:"ejemplos"},"Ejemplos"),(0,a.kt)("h3",{id:"invoice-boletafactura"},(0,a.kt)("em",{parentName:"h3"},"Invoice (boleta/factura)")),(0,a.kt)("p",null,"Usa el campo ",(0,a.kt)("inlineCode",{parentName:"p"},"icb")," en cada item:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:"{4,7}","{4,7}":!0},"InvoiceInputModel input = InvoiceInputModel.Builder.anInvoiceInputModel()\n        .withDetalle(Arrays.asList(\n                DocumentLineInputModel.Builder.aDocumentLineInputModel()\n                        .withIcb(true)\n                        .build(),\n                DocumentLineInputModel.Builder.aDocumentLineInputModel()\n                        .withIcb(true)\n                        .build())\n        )\n        .build();\n")),(0,a.kt)("h3",{id:"creditnote-nota-de-cr\xe9dito"},(0,a.kt)("em",{parentName:"h3"},"CreditNote (nota de cr\xe9dito)")),(0,a.kt)("p",null,"Usa el campo ",(0,a.kt)("inlineCode",{parentName:"p"},"icb")," en cada item:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:"{4,7}","{4,7}":!0},"CreditNoteInputModel pojo = CreditNoteInputModel.Builder.aCreditNoteInputModel()\n        .withDetalle(Arrays.asList(\n                DocumentLineInputModel.Builder.aDocumentLineInputModel()\n                        .withIcb(true)\n                        .build(),\n                DocumentLineInputModel.Builder.aDocumentLineInputModel()\n                        .withIcb(true)\n                        .build())\n        )\n        .build();\n")),(0,a.kt)("h3",{id:"debitnote-nota-de-d\xe9bito"},(0,a.kt)("em",{parentName:"h3"},"DebitNote (nota de d\xe9bito)")),(0,a.kt)("p",null,"Usa el campo ",(0,a.kt)("inlineCode",{parentName:"p"},"icb")," en cada item:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:"{4,7}","{4,7}":!0},"DebitNoteInputModel pojo = DebitNoteInputModel.Builder.aDebitNoteInputModel()\n        .withDetalle(Arrays.asList(\n                DocumentLineInputModel.Builder.aDocumentLineInputModel()\n                        .withIcb(true)\n                        .build(),\n                DocumentLineInputModel.Builder.aDocumentLineInputModel()\n                        .withIcb(true)\n                        .build())\n        )\n        .build();\n")))}s.isMDXComponent=!0}}]);