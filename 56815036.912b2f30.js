(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{143:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),d=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},p=function(e){var t=d(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=d(n),u=a,m=p["".concat(l,".").concat(u)]||p[u]||O[u]||o;return n?r.a.createElement(m,b(b({ref:t},c),{},{components:n})):r.a.createElement(m,b({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var b={};for(var i in t)hasOwnProperty.call(t,i)&&(b[i]=t[i]);b.originalType=e,b.mdxType="string"==typeof e?e:a,l[1]=b;for(var c=2;c<o;c++)l[c]=n[c];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},85:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return d}));var a=n(2),r=n(7),o=(n(0),n(143)),l={title:"IGV"},b={unversionedId:"xbuilder/ejemplos/igv",id:"xbuilder/ejemplos/igv",isDocsHomePage:!1,title:"IGV",description:"Inpuesto General a las Ventas (IGV) es un impuesto aplicado durante la venta de un producto o servicio. Cuando creas una boleta, factura, nota de c\u0155edito, o nota de d\xe9bito tu puedes definir, por cada item vendido, un tipo espec\xedfico de IGV. Todos los tipos de IGV pueden ser agrupados en los siguientes grupos:",source:"@site/docs/xbuilder/ejemplos/igv.md",slug:"/xbuilder/ejemplos/igv",permalink:"/docs/xbuilder/ejemplos/igv",editUrl:"https://github.com/project-openubl/website/edit/master/docs/xbuilder/ejemplos/igv.md",version:"current",sidebar:"xbuilder",previous:{title:"SummaryDocument (Resumen diario)",permalink:"/docs/xbuilder/ejemplos/summaryDocument"},next:{title:"ICB",permalink:"/docs/xbuilder/ejemplos/icb"}},i=[{value:"Tipos de IGV",id:"tipos-de-igv",children:[]},{value:"Tipo de IGV por defecto",id:"tipo-de-igv-por-defecto",children:[]},{value:"Ejemplos",id:"ejemplos",children:[{value:"<em>Invoice (boleta/factura)</em>",id:"invoice-boletafactura",children:[]},{value:"<em>CreditNote (nota de cr\xe9dito)</em>",id:"creditnote-nota-de-cr\xe9dito",children:[]},{value:"<em>DebitNote (nota de d\xe9bito)</em>",id:"debitnote-nota-de-d\xe9bito",children:[]}]}],c={rightToc:i};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Inpuesto General a las Ventas (IGV)")," es un impuesto aplicado durante la venta de un producto o servicio. Cuando creas una ",Object(o.b)("strong",{parentName:"p"},"boleta, factura, nota de c\u0155edito, o nota de d\xe9bito")," tu puedes definir, por cada item vendido, un tipo espec\xedfico de ",Object(o.b)("em",{parentName:"p"},"IGV"),". Todos los tipos de ",Object(o.b)("em",{parentName:"p"},"IGV")," pueden ser agrupados en los siguientes grupos:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Gravadas"),Object(o.b)("li",{parentName:"ul"},"Exoneradas"),Object(o.b)("li",{parentName:"ul"},"Inafectas"),Object(o.b)("li",{parentName:"ul"},"Gratuitas")),Object(o.b)("p",null,"El IGV es aplicado a cada item (producto o servicio) que se vende."),Object(o.b)("h2",{id:"tipos-de-igv"},"Tipos de IGV"),Object(o.b)("p",null,"El tipo de IGV es definido en el atributo ",Object(o.b)("inlineCode",{parentName:"p"},"tipoIgv")," y los valores posibles que puede tomar vienen definidos por el ",Object(o.b)("strong",{parentName:"p"},"Cat\xe1logo 07")," definido por la SUNAT."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Value"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Code"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"GRAVADO_OPERACION_ONEROSA"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"10")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"GRAVADO_RETIRO_POR_PREMIO"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"11")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"GRAVADO_RETIRO_POR_DONACION"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"12")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"GRAVADO_RETIRO"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"13")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"GRAVADO_RETIRO_POR_PUBLICIDAD"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"14")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"GRAVADO_BONIFICACIONES"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"15")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"GRAVADO_RETIRO_POR_ENTREGA_A_TRABAJADORES"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"16")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"GRAVADO_IVAP"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"17")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"EXONERADO_OPERACION_ONEROSA"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"20")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"EXONERADO_TRANSFERENCIA_GRATUITA"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"21")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"INAFECTO_OPERACION_ONEROSA"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"30")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"INAFECTO_RETIRO_POR_BONIFICACION"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"31")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"INAFECTO_RETIRO"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"32")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"INAFECTO_RETIRO_POR_MUESTRAS_MEDICAS"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"33")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"INAFECTO_RETIRO_POR_CONVENIO_COLECTIVO"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"34")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"INAFECTO_RETIRO_POR_PREMIO"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"35")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"INAFECTO_RETIRO_POR_PUBLICIDAD"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"36")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"EXPORTACION"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"40")))),Object(o.b)("h2",{id:"tipo-de-igv-por-defecto"},"Tipo de IGV por defecto"),Object(o.b)("p",null,"Si el ",Object(o.b)("inlineCode",{parentName:"p"},"tipoIgv")," no es definido durante la creaci\xf3n del XML entonces se aplica el ",Object(o.b)("inlineCode",{parentName:"p"},"tipoIgv")," por defecto definido en la interfaz ",Object(o.b)("inlineCode",{parentName:"p"},"Config"),". Puedes leer un poco m\xe1s sobre ",Object(o.b)("inlineCode",{parentName:"p"},"Config")," en ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../concepts#config"}),"Conceptos b\xe1sicos")),Object(o.b)("h2",{id:"ejemplos"},"Ejemplos"),Object(o.b)("h3",{id:"invoice-boletafactura"},Object(o.b)("em",{parentName:"h3"},"Invoice (boleta/factura)")),Object(o.b)("p",null,"Usa el campo ",Object(o.b)("inlineCode",{parentName:"p"},"tipoIgv")," en cada elemento vendido:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java",metastring:"{4,7}","{4,7}":!0}),"InvoiceInputModel pojo = InvoiceInputModel.Builder.anInvoiceInputModel()\n        .withDetalle(Arrays.asList(\n                DocumentLineInputModel.Builder.aDocumentLineInputModel()\n                        .withTipoIgv(Catalog7.GRAVADO_OPERACION_ONEROSA.toString())\n                        .build(),\n                DocumentLineInputModel.Builder.aDocumentLineInputModel()\n                        .withTipoIgv(Catalog7.GRAVADO_OPERACION_ONEROSA.toString())\n                        .build())\n        )\n        .build();\n")),Object(o.b)("h3",{id:"creditnote-nota-de-cr\xe9dito"},Object(o.b)("em",{parentName:"h3"},"CreditNote (nota de cr\xe9dito)")),Object(o.b)("p",null,"Usa el campo ",Object(o.b)("inlineCode",{parentName:"p"},"tipoIgv")," en cada elemento vendido:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java",metastring:"{4,7}","{4,7}":!0}),"CreditNoteInputModel pojo = CreditNoteInputModel.Builder.aCreditNoteInputModel()\n        .withDetalle(Arrays.asList(\n                DocumentLineInputModel.Builder.aDocumentLineInputModel()\n                        .withTipoIgv(Catalog7.GRAVADO_OPERACION_ONEROSA.toString())\n                        .build(),\n                DocumentLineInputModel.Builder.aDocumentLineInputModel()\n                        .withTipoIgv(Catalog7.GRAVADO_OPERACION_ONEROSA.toString())\n                        .build())\n        )\n        .build();\n")),Object(o.b)("h3",{id:"debitnote-nota-de-d\xe9bito"},Object(o.b)("em",{parentName:"h3"},"DebitNote (nota de d\xe9bito)")),Object(o.b)("p",null,"Usa el campo ",Object(o.b)("inlineCode",{parentName:"p"},"tipoIgv")," en cada elemento vendido:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java",metastring:"{4,7}","{4,7}":!0}),"DebitNoteInputModel pojo = DebitNoteInputModel.Builder.aDebitNoteInputModel()\n        .withDetalle(Arrays.asList(\n                DocumentLineInputModel.Builder.aDocumentLineInputModel()\n                        .withTipoIgv(Catalog7.GRAVADO_OPERACION_ONEROSA.toString())\n                        .build(),\n                DocumentLineInputModel.Builder.aDocumentLineInputModel()\n                        .withTipoIgv(Catalog7.GRAVADO_OPERACION_ONEROSA.toString())\n                        .build())\n        )\n        .build();\n")))}d.isMDXComponent=!0}}]);