(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{113:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return d})),n.d(t,"default",(function(){return u}));var i=n(2),a=n(7),o=(n(0),n(123)),r={title:"Precio",description:"Precio unitario y precio de venta",keywords:["precio unitario","precio de venta"]},c={unversionedId:"xbuilder/ejemplos/sellingPrice",id:"xbuilder/ejemplos/sellingPrice",isDocsHomePage:!1,title:"Precio",description:"Precio unitario y precio de venta",source:"@site/docs/xbuilder/ejemplos/sellingPrice.md",slug:"/xbuilder/ejemplos/sellingPrice",permalink:"/docs/xbuilder/ejemplos/sellingPrice",editUrl:"https://github.com/project-openubl/website/edit/master/docs/xbuilder/ejemplos/sellingPrice.md",version:"current",sidebar:"xbuilder",previous:{title:"ICB",permalink:"/docs/xbuilder/ejemplos/icb"},next:{title:"Preguntas frecuentes",permalink:"/docs/xbuilder/qa"}},d=[{value:"Caso 1 - Cantidad y Precio antes de impuestos",id:"caso-1---cantidad-y-precio-antes-de-impuestos",children:[{value:"<em>Invoice (boleta/factura)</em>",id:"invoice-boletafactura",children:[]},{value:"<em>CreditNote (nota de cr\xe9dito)</em>",id:"creditnote-nota-de-cr\xe9dito",children:[]},{value:"<em>DebitNote (nota de d\xe9bito)</em>",id:"debitnote-nota-de-d\xe9bito",children:[]}]},{value:"Caso 2 - Cantidad y Precio despu\xe9s de impuestos",id:"caso-2---cantidad-y-precio-despu\xe9s-de-impuestos",children:[{value:"<em>Invoice (boleta/factura)</em>",id:"invoice-boletafactura-1",children:[]},{value:"<em>CreditNote (nota de cr\xe9dito)</em>",id:"creditnote-nota-de-cr\xe9dito-1",children:[]},{value:"<em>DebitNote (nota de d\xe9bito)</em>",id:"debitnote-nota-de-d\xe9bito-1",children:[]}]}],l={rightToc:d};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Cuando creas una ",Object(o.b)("strong",{parentName:"p"},"boleta, factura, nota de c\u0155edito, o nota de d\xe9bito")," existen dos tipos de precios que deben de ser incluidos en el XML:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Precio antes de impuestos."),Object(o.b)("li",{parentName:"ul"},"Precio despu\xe9s de impuestos.")),Object(o.b)("p",null,"El precio de un producto o servicio es combinado con la ",Object(o.b)("em",{parentName:"p"},"cantidad")," y como resultado se obtiene el precio final de venta:"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"CANTIDAD ","*"," PRECIO ANTES DE IMPUESTOS = PRECIO DE VENTA")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"XBuilder")," requiere solo 2 de las 3 variables de la f\xf3rmula anterior, la tercera variable ser\xe1 calculada autom\xe1ticamente."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Caso 1")," - ",Object(o.b)("inlineCode",{parentName:"li"},"Cantidad")," y ",Object(o.b)("inlineCode",{parentName:"li"},"precio antes de impuestos"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Caso 2")," - ",Object(o.b)("inlineCode",{parentName:"li"},"Cantidad")," y ",Object(o.b)("inlineCode",{parentName:"li"},"precio despu\xe9s de impuestos"),".")),Object(o.b)("h2",{id:"caso-1---cantidad-y-precio-antes-de-impuestos"},"Caso 1 - Cantidad y Precio antes de impuestos"),Object(o.b)("p",null,"El ",Object(o.b)("inlineCode",{parentName:"p"},"precio antes de impuestos")," puede ser definido mediante el campo ",Object(o.b)("inlineCode",{parentName:"p"},"precioUnitario"),":"),Object(o.b)("h3",{id:"invoice-boletafactura"},Object(o.b)("em",{parentName:"h3"},"Invoice (boleta/factura)")),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-java",metastring:"{4,5,8,9}","{4,5,8,9}":!0}),"InvoiceInputModel pojo = InvoiceInputModel.Builder.anInvoiceInputModel()\n        .withDetalle(Arrays.asList(\n                DocumentLineInputModel.Builder.aDocumentLineInputModel()\n                        .withCantidad(new BigDecimal(10))\n                        .withPrecioUnitario(new BigDecimal(100))\n                        .build(),\n                DocumentLineInputModel.Builder.aDocumentLineInputModel()\n                        .withCantidad(new BigDecimal(10))\n                        .withPrecioUnitario(new BigDecimal(100))\n                        .build())\n        )\n        .build();\n")),Object(o.b)("h3",{id:"creditnote-nota-de-cr\xe9dito"},Object(o.b)("em",{parentName:"h3"},"CreditNote (nota de cr\xe9dito)")),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-java",metastring:"{4,5,8,9}","{4,5,8,9}":!0}),"CreditNoteInputModel pojo = CreditNoteInputModel.Builder.aCreditNoteInputModel()\n        .withDetalle(Arrays.asList(\n                DocumentLineInputModel.Builder.aDocumentLineInputModel()\n                        .withCantidad(new BigDecimal(10))\n                        .withPrecioUnitario(new BigDecimal(100))\n                        .build(),\n                DocumentLineInputModel.Builder.aDocumentLineInputModel()\n                        .withCantidad(new BigDecimal(10))\n                        .withPrecioUnitario(new BigDecimal(100))\n                        .build())\n        )\n        .build();\n")),Object(o.b)("h3",{id:"debitnote-nota-de-d\xe9bito"},Object(o.b)("em",{parentName:"h3"},"DebitNote (nota de d\xe9bito)")),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-java",metastring:"{4,5,8,9}","{4,5,8,9}":!0}),"DebitNoteInputModel pojo = DebitNoteInputModel.Builder.aDebitNoteInputModel()\n        .withDetalle(Arrays.asList(\n                DocumentLineInputModel.Builder.aDocumentLineInputModel()\n                        .withCantidad(new BigDecimal(10))\n                        .withPrecioUnitario(new BigDecimal(100))\n                        .build(),\n                DocumentLineInputModel.Builder.aDocumentLineInputModel()\n                        .withCantidad(new BigDecimal(10))\n                        .withPrecioUnitario(new BigDecimal(100))\n                        .build())\n        )\n        .build();\n")),Object(o.b)("h2",{id:"caso-2---cantidad-y-precio-despu\xe9s-de-impuestos"},"Caso 2 - Cantidad y Precio despu\xe9s de impuestos"),Object(o.b)("p",null,"El ",Object(o.b)("inlineCode",{parentName:"p"},"precio despu\xe9s de impuestos")," puede ser definido mediante el campo ",Object(o.b)("inlineCode",{parentName:"p"},"precioConIgv"),":"),Object(o.b)("h3",{id:"invoice-boletafactura-1"},Object(o.b)("em",{parentName:"h3"},"Invoice (boleta/factura)")),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-java",metastring:"{4,5,8,9}","{4,5,8,9}":!0}),"InvoiceInputModel pojo = InvoiceInputModel.Builder.anInvoiceInputModel()\n        .withDetalle(Arrays.asList(\n                DocumentLineInputModel.Builder.aDocumentLineInputModel()\n                        .withCantidad(new BigDecimal(10))\n                        .withPrecioConIgv(new BigDecimal(118))\n                        .build(),\n                DocumentLineInputModel.Builder.aDocumentLineInputModel()\n                        .withCantidad(new BigDecimal(10))\n                        .withPrecioConIgv(new BigDecimal(118))\n                        .build())\n        )\n        .build();\n")),Object(o.b)("h3",{id:"creditnote-nota-de-cr\xe9dito-1"},Object(o.b)("em",{parentName:"h3"},"CreditNote (nota de cr\xe9dito)")),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-java",metastring:"{4,5,8,9}","{4,5,8,9}":!0}),"CreditNoteInputModel pojo = CreditNoteInputModel.Builder.aCreditNoteInputModel()\n        .withDetalle(Arrays.asList(\n                DocumentLineInputModel.Builder.aDocumentLineInputModel()\n                        .withCantidad(new BigDecimal(10))\n                        .withPrecioConIgv(new BigDecimal(118))\n                        .build(),\n                DocumentLineInputModel.Builder.aDocumentLineInputModel()\n                        .withCantidad(new BigDecimal(10))\n                        .withPrecioConIgv(new BigDecimal(118))\n                        .build())\n        )\n        .build();\n")),Object(o.b)("h3",{id:"debitnote-nota-de-d\xe9bito-1"},Object(o.b)("em",{parentName:"h3"},"DebitNote (nota de d\xe9bito)")),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-java",metastring:"{4,5,8,9}","{4,5,8,9}":!0}),"DebitNoteInputModel pojo = DebitNoteInputModel.Builder.aDebitNoteInputModel()\n        .withDetalle(Arrays.asList(\n                DocumentLineInputModel.Builder.aDocumentLineInputModel()\n                        .withCantidad(new BigDecimal(10))\n                        .withPrecioConIgv(new BigDecimal(118))\n                        .build(),\n                DocumentLineInputModel.Builder.aDocumentLineInputModel()\n                        .withCantidad(new BigDecimal(10))\n                        .withPrecioConIgv(new BigDecimal(118))\n                        .build())\n        )\n        .build();\n")))}u.isMDXComponent=!0},123:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var i=n(0),a=n.n(i);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),p=u(n),s=i,m=p["".concat(r,".").concat(s)]||p[s]||b[s]||o;return n?a.a.createElement(m,c(c({ref:t},l),{},{components:n})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=s;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:i,r[1]=c;for(var l=2;l<o;l++)r[l]=n[l];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);