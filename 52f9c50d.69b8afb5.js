(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{123:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return b}));var r=t(0),i=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=i.a.createContext({}),p=function(e){var n=i.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=p(e.components);return i.a.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},m=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),d=p(t),m=r,b=d["".concat(a,".").concat(m)]||d[m]||s[m]||o;return t?i.a.createElement(b,c(c({ref:n},l),{},{components:t})):i.a.createElement(b,c({ref:n},l))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=m;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<o;l++)a[l]=t[l];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},77:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return u})),t.d(n,"default",(function(){return p}));var r=t(2),i=t(7),o=(t(0),t(123)),a={title:"Invoice (Boleta/Factura)"},c={unversionedId:"xbuilder/ejemplos/invoice",id:"xbuilder/ejemplos/invoice",isDocsHomePage:!1,title:"Invoice (Boleta/Factura)",description:"Create InvoiceType",source:"@site/docs/xbuilder/ejemplos/invoice.md",slug:"/xbuilder/ejemplos/invoice",permalink:"/docs/xbuilder/ejemplos/invoice",editUrl:"https://github.com/project-openubl/website/edit/master/docs/xbuilder/ejemplos/invoice.md",version:"current",sidebar:"xbuilder",previous:{title:"Firmar XML",permalink:"/docs/xbuilder/signXml"},next:{title:"CreditNote (Nota de cr\xe9dito)",permalink:"/docs/xbuilder/ejemplos/creditNote"}},u=[{value:"Create <em>InvoiceType</em>",id:"create-invoicetype",children:[]}],l={rightToc:u};function p(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"create-invoicetype"},"Create ",Object(o.b)("em",{parentName:"h2"},"InvoiceType")),Object(o.b)("p",null,"Para crear una boleta/factura debes de crear una instancia de ",Object(o.b)("inlineCode",{parentName:"p"},"InvoiceInputModel")," y usarlo para crear el XML:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java",metastring:"{37}","{37}":!0}),'Config config;\nSystemClock clock;\n\n// Create the POJO\nInvoiceInputModel input = InvoiceInputModel.Builder.anInvoiceInputModel()\n    .withSerie("F001")\n    .withNumero(1)\n    .withProveedor(ProveedorInputModel.Builder.aProveedorInputModel()\n            .withRuc("12345678912")\n            .withRazonSocial("Softgreen S.A.C.")\n            .build()\n    )\n    .withCliente(ClienteInputModel.Builder.aClienteInputModel()\n            .withNombre("Carlos Feria")\n            .withNumeroDocumentoIdentidad("12121212121")\n            .withTipoDocumentoIdentidad(Catalog6.RUC.toString())\n            .build()\n    )\n    .withDetalle(Arrays.asList(\n            DocumentLineInputModel.Builder.aDocumentLineInputModel()\n                    .withDescripcion("Item1")\n                    .withCantidad(new BigDecimal(10))\n                    .withPrecioUnitario(new BigDecimal(100))\n                    .build(),\n            DocumentLineInputModel.Builder.aDocumentLineInputModel()\n                    .withDescripcion("Item2")\n                    .withCantidad(new BigDecimal(10))\n                    .withPrecioUnitario(new BigDecimal(100))\n                    .build())\n    )\n    .build();\n\n// Create Invoice\nDocumentWrapper<InvoiceOutputModel> result = DocumentManager.createXML(input, config, systemClock);\n\nInvoiceOutputModel output = result.getOutput(); // XML Var values\nString xml = result.getXml(); // XML content\n')))}p.isMDXComponent=!0}}]);