(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{100:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var r=n(2),a=n(7),i=(n(0),n(124)),o={title:"ICB"},l={unversionedId:"xbuilder/library/peru/icb",id:"xbuilder/library/peru/icb",isDocsHomePage:!1,title:"ICB",description:"Inpuesto al Consumo de Bolsas pl\xe1sticas (ICB) is a type of tax applied only to plastic bags. Whenever you create an _InvoiceType_, _CreditNoteType_, or _DebitNoteType_ you can define, for each item selled, if you want to apply the ICB taxes or not.",source:"@site/docs/xbuilder/library/peru/icb.md",slug:"/xbuilder/library/peru/icb",permalink:"/docs/xbuilder/library/peru/icb",editUrl:"https://github.com/project-openubl/website/edit/master/docs/xbuilder/library/peru/icb.md",version:"current",sidebar:"xbuilder",previous:{title:"IGV",permalink:"/docs/xbuilder/library/peru/igv"},next:{title:"Selling price",permalink:"/docs/xbuilder/library/peru/sellingPrice"}},c=[{value:"Examples",id:"examples",children:[{value:"<em>Invoice (boleta/factura)</em>",id:"invoice-boletafactura",children:[]},{value:"<em>CreditNote (nota de cr\xe9dito)</em>",id:"creditnote-nota-de-cr\xe9dito",children:[]},{value:"<em>DebitNote (nota de d\xe9bito)</em>",id:"debitnote-nota-de-d\xe9bito",children:[]}]},{value:"Value of <em>ICB</em>",id:"value-of-icb",children:[]},{value:"Default value of <em>ICB</em>",id:"default-value-of-icb",children:[]}],u={rightToc:c};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Inpuesto al Consumo de Bolsas pl\xe1sticas (ICB)")," is a type of tax applied only to plastic bags. Whenever you create an ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"InvoiceType"),", ",Object(i.b)("em",{parentName:"strong"},"CreditNoteType"),", or ",Object(i.b)("em",{parentName:"strong"},"DebitNoteType"))," you can define, for each item selled, if you want to apply the ",Object(i.b)("em",{parentName:"p"},"ICB")," taxes or not."),Object(i.b)("p",null,"The current value of ",Object(i.b)("em",{parentName:"p"},"ICB")," is ",Object(i.b)("em",{parentName:"p"},"0.2 Soles")," but this might change in the future. Don't worry you are safe if you use your own ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"../concepts#config"}),"Config")," default values."),Object(i.b)("h2",{id:"examples"},"Examples"),Object(i.b)("h3",{id:"invoice-boletafactura"},Object(i.b)("em",{parentName:"h3"},"Invoice (boleta/factura)")),Object(i.b)("p",null,"Use the field ",Object(i.b)("inlineCode",{parentName:"p"},"icb")," in each item selled:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"InvoiceInputModel input = InvoiceInputModel.Builder.anInvoiceInputModel()\n        .withDetalle(Arrays.asList(\n                DocumentLineInputModel.Builder.aDocumentLineInputModel()\n                        .withIcb(true)\n                        .build(),\n                DocumentLineInputModel.Builder.aDocumentLineInputModel()\n                        .withIcb(true)\n                        .build())\n        )\n        .build();\n")),Object(i.b)("h3",{id:"creditnote-nota-de-cr\xe9dito"},Object(i.b)("em",{parentName:"h3"},"CreditNote (nota de cr\xe9dito)")),Object(i.b)("p",null,"Use the field ",Object(i.b)("inlineCode",{parentName:"p"},"icb")," in each item selled:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"CreditNoteInputModel pojo = CreditNoteInputModel.Builder.aCreditNoteInputModel()\n        .withDetalle(Arrays.asList(\n                DocumentLineInputModel.Builder.aDocumentLineInputModel()\n                        .withIcb(true)\n                        .build(),\n                DocumentLineInputModel.Builder.aDocumentLineInputModel()\n                        .withIcb(true)\n                        .build())\n        )\n        .build();\n")),Object(i.b)("h3",{id:"debitnote-nota-de-d\xe9bito"},Object(i.b)("em",{parentName:"h3"},"DebitNote (nota de d\xe9bito)")),Object(i.b)("p",null,"Use the field ",Object(i.b)("inlineCode",{parentName:"p"},"icb")," in each item selled:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"DebitNoteInputModel pojo = DebitNoteInputModel.Builder.aDebitNoteInputModel()\n        .withDetalle(Arrays.asList(\n                DocumentLineInputModel.Builder.aDocumentLineInputModel()\n                        .withIcb(true)\n                        .build(),\n                DocumentLineInputModel.Builder.aDocumentLineInputModel()\n                        .withIcb(true)\n                        .build())\n        )\n        .build();\n")),Object(i.b)("h2",{id:"value-of-icb"},"Value of ",Object(i.b)("em",{parentName:"h2"},"ICB")),Object(i.b)("p",null,"The value of ",Object(i.b)("em",{parentName:"p"},"ICB")," is defined by the value you setted in the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"../concepts#config"}),"Config")," object."),Object(i.b)("h2",{id:"default-value-of-icb"},"Default value of ",Object(i.b)("em",{parentName:"h2"},"ICB")),Object(i.b)("p",null,"If ",Object(i.b)("em",{parentName:"p"},"icb")," is not defined or is ",Object(i.b)("inlineCode",{parentName:"p"},"false"),", then ",Object(i.b)("inlineCode",{parentName:"p"},"XBuilder")," won't apply this type of tax."))}b.isMDXComponent=!0},124:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),b=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=b(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=b(n),s=r,m=p["".concat(o,".").concat(s)]||p[s]||d[s]||i;return n?a.a.createElement(m,l(l({ref:t},u),{},{components:n})):a.a.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);