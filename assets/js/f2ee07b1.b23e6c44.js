"use strict";(self.webpackChunkproject_openubl=self.webpackChunkproject_openubl||[]).push([[3541],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(n),b=o,m=p["".concat(c,".").concat(b)]||p[b]||s[b]||i;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var d=2;d<i;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},5185:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=n(7462),o=(n(7294),n(3905));const i={title:"DebitNote (Nota de d\xe9bito)",description:"Crear nota de debito"},a=void 0,l={unversionedId:"xbuilder/examples/debit-note",id:"xbuilder/examples/debit-note",title:"DebitNote (Nota de d\xe9bito)",description:"Crear nota de debito",source:"@site/docs/04-xbuilder/06-examples/03-debit-note.md",sourceDirName:"04-xbuilder/06-examples",slug:"/xbuilder/examples/debit-note",permalink:"/docs/xbuilder/examples/debit-note",draft:!1,editUrl:"https://github.com/project-openubl/website/tree/master/docs/04-xbuilder/06-examples/03-debit-note.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"DebitNote (Nota de d\xe9bito)",description:"Crear nota de debito"},sidebar:"tutorialSidebar",previous:{title:"CreditNote (Nota de cr\xe9dito)",permalink:"/docs/xbuilder/examples/credit-note"},next:{title:"VoidedDocument (Baja)",permalink:"/docs/xbuilder/examples/voided-document"}},c={},d=[{value:"Create <em>DebitNote</em>",id:"create-debitnote",level:2}],u={toc:d};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"create-debitnote"},"Create ",(0,o.kt)("em",{parentName:"h2"},"DebitNote")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'Defaults defaults;\nDateProvider dateProvider;\n\nDebitNote input = DebitNote.builder()\n        .serie("FD01")\n        .numero(1)\n        .comprobanteAfectadoSerieNumero("F001-1")\n        .sustentoDescripcion("mi sustento")\n        .proveedor(Proveedor.builder()\n                .ruc("12345678912")\n                .razonSocial("Softgreen S.A.C.")\n                .build()\n        )\n        .cliente(Cliente.builder()\n                .nombre("Carlos Feria")\n                .numeroDocumentoIdentidad("12121212121")\n                .tipoDocumentoIdentidad(Catalog6.RUC.toString())\n                .build()\n        )\n        .detalle(DocumentoVentaDetalle.builder()\n                .descripcion("Item1")\n                .cantidad(new BigDecimal("10"))\n                .precio(new BigDecimal("100"))\n                .build()\n        )\n        .detalle(DocumentoVentaDetalle.builder()\n                .descripcion("Item2")\n                .cantidad(new BigDecimal("10"))\n                .precio(new BigDecimal("100"))\n                .build()\n        )\n        .build();\n\nContentEnricher enricher = new ContentEnricher(defaults, dateProvider);\nenricher.enrich(input);\n\nTemplate template = TemplateProducer.getInstance().getDebitNote();\nString xml = template.data(input).render();\n')))}p.isMDXComponent=!0}}]);