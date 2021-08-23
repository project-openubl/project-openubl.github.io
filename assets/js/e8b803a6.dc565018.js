(self.webpackChunkproject_openubl=self.webpackChunkproject_openubl||[]).push([[1825],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return s}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),s=r,N=c["".concat(d,".").concat(s)]||c[s]||m[s]||o;return n?a.createElement(N,l(l({ref:t},u),{},{components:n})):a.createElement(N,l({ref:t},u))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=c;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6033:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return u},default:function(){return c}});var a=n(22122),r=n(19756),o=(n(67294),n(3905)),l=["components"],i={title:"IGV"},d=void 0,p={unversionedId:"xbuilder/examples/igv",id:"xbuilder/examples/igv",isDocsHomePage:!1,title:"IGV",description:"Inpuesto General a las Ventas (IGV) es un impuesto aplicado durante la venta de un producto o servicio. Cuando creas una boleta, factura, nota de c\u0155edito, o nota de d\xe9bito tu puedes definir, por cada item vendido, un tipo espec\xedfico de IGV. Todos los tipos de IGV pueden ser agrupados en los siguientes grupos:",source:"@site/docs/04-xbuilder/07-examples/06-igv.md",sourceDirName:"04-xbuilder/07-examples",slug:"/xbuilder/examples/igv",permalink:"/docs/xbuilder/examples/igv",editUrl:"https://github.com/project-openubl/website/edit/master/docs/04-xbuilder/07-examples/06-igv.md",version:"current",sidebarPosition:6,frontMatter:{title:"IGV"},sidebar:"tutorialSidebar",previous:{title:"SummaryDocument (Resumen diario)",permalink:"/docs/xbuilder/examples/summary-document"},next:{title:"ICB",permalink:"/docs/xbuilder/examples/icb"}},u=[{value:"Tipos de IGV",id:"tipos-de-igv",children:[]},{value:"Tipo de IGV por defecto",id:"tipo-de-igv-por-defecto",children:[]},{value:"Ejemplos",id:"ejemplos",children:[{value:"<em>Invoice (boleta/factura)</em>",id:"invoice-boletafactura",children:[]},{value:"<em>CreditNote (nota de cr\xe9dito)</em>",id:"creditnote-nota-de-cr\xe9dito",children:[]},{value:"<em>DebitNote (nota de d\xe9bito)</em>",id:"debitnote-nota-de-d\xe9bito",children:[]}]}],m={toc:u};function c(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Inpuesto General a las Ventas (IGV)")," es un impuesto aplicado durante la venta de un producto o servicio. Cuando creas una ",(0,o.kt)("strong",{parentName:"p"},"boleta, factura, nota de c\u0155edito, o nota de d\xe9bito")," tu puedes definir, por cada item vendido, un tipo espec\xedfico de ",(0,o.kt)("em",{parentName:"p"},"IGV"),". Todos los tipos de ",(0,o.kt)("em",{parentName:"p"},"IGV")," pueden ser agrupados en los siguientes grupos:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Gravadas"),(0,o.kt)("li",{parentName:"ul"},"Exoneradas"),(0,o.kt)("li",{parentName:"ul"},"Inafectas"),(0,o.kt)("li",{parentName:"ul"},"Gratuitas")),(0,o.kt)("p",null,"El IGV es aplicado a cada item (producto o servicio) que se vende."),(0,o.kt)("h2",{id:"tipos-de-igv"},"Tipos de IGV"),(0,o.kt)("p",null,"El tipo de IGV es definido en el atributo ",(0,o.kt)("inlineCode",{parentName:"p"},"tipoIgv")," y los valores posibles que puede tomar vienen definidos por el ",(0,o.kt)("strong",{parentName:"p"},"Cat\xe1logo 07")," definido por la SUNAT."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Value"),(0,o.kt)("th",{parentName:"tr",align:null},"Code"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"GRAVADO_OPERACION_ONEROSA"),(0,o.kt)("td",{parentName:"tr",align:null},"10")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"GRAVADO_RETIRO_POR_PREMIO"),(0,o.kt)("td",{parentName:"tr",align:null},"11")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"GRAVADO_RETIRO_POR_DONACION"),(0,o.kt)("td",{parentName:"tr",align:null},"12")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"GRAVADO_RETIRO"),(0,o.kt)("td",{parentName:"tr",align:null},"13")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"GRAVADO_RETIRO_POR_PUBLICIDAD"),(0,o.kt)("td",{parentName:"tr",align:null},"14")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"GRAVADO_BONIFICACIONES"),(0,o.kt)("td",{parentName:"tr",align:null},"15")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"GRAVADO_RETIRO_POR_ENTREGA_A_TRABAJADORES"),(0,o.kt)("td",{parentName:"tr",align:null},"16")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"GRAVADO_IVAP"),(0,o.kt)("td",{parentName:"tr",align:null},"17")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"EXONERADO_OPERACION_ONEROSA"),(0,o.kt)("td",{parentName:"tr",align:null},"20")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"EXONERADO_TRANSFERENCIA_GRATUITA"),(0,o.kt)("td",{parentName:"tr",align:null},"21")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"INAFECTO_OPERACION_ONEROSA"),(0,o.kt)("td",{parentName:"tr",align:null},"30")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"INAFECTO_RETIRO_POR_BONIFICACION"),(0,o.kt)("td",{parentName:"tr",align:null},"31")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"INAFECTO_RETIRO"),(0,o.kt)("td",{parentName:"tr",align:null},"32")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"INAFECTO_RETIRO_POR_MUESTRAS_MEDICAS"),(0,o.kt)("td",{parentName:"tr",align:null},"33")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"INAFECTO_RETIRO_POR_CONVENIO_COLECTIVO"),(0,o.kt)("td",{parentName:"tr",align:null},"34")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"INAFECTO_RETIRO_POR_PREMIO"),(0,o.kt)("td",{parentName:"tr",align:null},"35")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"INAFECTO_RETIRO_POR_PUBLICIDAD"),(0,o.kt)("td",{parentName:"tr",align:null},"36")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"EXPORTACION"),(0,o.kt)("td",{parentName:"tr",align:null},"40")))),(0,o.kt)("h2",{id:"tipo-de-igv-por-defecto"},"Tipo de IGV por defecto"),(0,o.kt)("p",null,"Si el ",(0,o.kt)("inlineCode",{parentName:"p"},"tipoIgv")," no es definido durante la creaci\xf3n del XML entonces se aplica el ",(0,o.kt)("inlineCode",{parentName:"p"},"tipoIgv")," por defecto definido en la interfaz ",(0,o.kt)("inlineCode",{parentName:"p"},"Config"),". Puedes leer un poco m\xe1s sobre ",(0,o.kt)("inlineCode",{parentName:"p"},"Config")," en ",(0,o.kt)("a",{parentName:"p",href:"../concepts#config"},"Conceptos b\xe1sicos")),(0,o.kt)("h2",{id:"ejemplos"},"Ejemplos"),(0,o.kt)("h3",{id:"invoice-boletafactura"},(0,o.kt)("em",{parentName:"h3"},"Invoice (boleta/factura)")),(0,o.kt)("p",null,"Usa el campo ",(0,o.kt)("inlineCode",{parentName:"p"},"tipoIgv")," en cada elemento vendido:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:"{4,7}","{4,7}":!0},"InvoiceInputModel pojo = InvoiceInputModel.Builder.anInvoiceInputModel()\n        .withDetalle(Arrays.asList(\n                DocumentLineInputModel.Builder.aDocumentLineInputModel()\n                        .withTipoIgv(Catalog7.GRAVADO_OPERACION_ONEROSA.toString())\n                        .build(),\n                DocumentLineInputModel.Builder.aDocumentLineInputModel()\n                        .withTipoIgv(Catalog7.GRAVADO_OPERACION_ONEROSA.toString())\n                        .build())\n        )\n        .build();\n")),(0,o.kt)("h3",{id:"creditnote-nota-de-cr\xe9dito"},(0,o.kt)("em",{parentName:"h3"},"CreditNote (nota de cr\xe9dito)")),(0,o.kt)("p",null,"Usa el campo ",(0,o.kt)("inlineCode",{parentName:"p"},"tipoIgv")," en cada elemento vendido:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:"{4,7}","{4,7}":!0},"CreditNoteInputModel pojo = CreditNoteInputModel.Builder.aCreditNoteInputModel()\n        .withDetalle(Arrays.asList(\n                DocumentLineInputModel.Builder.aDocumentLineInputModel()\n                        .withTipoIgv(Catalog7.GRAVADO_OPERACION_ONEROSA.toString())\n                        .build(),\n                DocumentLineInputModel.Builder.aDocumentLineInputModel()\n                        .withTipoIgv(Catalog7.GRAVADO_OPERACION_ONEROSA.toString())\n                        .build())\n        )\n        .build();\n")),(0,o.kt)("h3",{id:"debitnote-nota-de-d\xe9bito"},(0,o.kt)("em",{parentName:"h3"},"DebitNote (nota de d\xe9bito)")),(0,o.kt)("p",null,"Usa el campo ",(0,o.kt)("inlineCode",{parentName:"p"},"tipoIgv")," en cada elemento vendido:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:"{4,7}","{4,7}":!0},"DebitNoteInputModel pojo = DebitNoteInputModel.Builder.aDebitNoteInputModel()\n        .withDetalle(Arrays.asList(\n                DocumentLineInputModel.Builder.aDocumentLineInputModel()\n                        .withTipoIgv(Catalog7.GRAVADO_OPERACION_ONEROSA.toString())\n                        .build(),\n                DocumentLineInputModel.Builder.aDocumentLineInputModel()\n                        .withTipoIgv(Catalog7.GRAVADO_OPERACION_ONEROSA.toString())\n                        .build())\n        )\n        .build();\n")))}c.isMDXComponent=!0}}]);