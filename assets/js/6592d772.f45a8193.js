"use strict";(self.webpackChunkproject_openubl=self.webpackChunkproject_openubl||[]).push([[2298],{3905:(e,n,r)=>{r.d(n,{Zo:()=>c,kt:()=>b});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function m(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=t.createContext({}),l=function(e){var n=t.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},c=function(e){var n=l(e.components);return t.createElement(u.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},s=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=m(e,["components","mdxType","originalType","parentName"]),d=l(r),s=o,b=d["".concat(u,".").concat(s)]||d[s]||p[s]||a;return r?t.createElement(b,i(i({ref:n},c),{},{components:r})):t.createElement(b,i({ref:n},c))}));function b(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=s;var m={};for(var u in n)hasOwnProperty.call(n,u)&&(m[u]=n[u]);m.originalType=e,m[d]="string"==typeof e?e:o,i[1]=m;for(var l=2;l<a;l++)i[l]=r[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}s.displayName="MDXCreateElement"},5859:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>m,toc:()=>l});var t=r(7462),o=(r(7294),r(3905));const a={title:"SummaryDocument (Resumen diario)",description:"Crear resumen diario"},i=void 0,m={unversionedId:"xbuilder/examples/summary-document",id:"xbuilder/examples/summary-document",title:"SummaryDocument (Resumen diario)",description:"Crear resumen diario",source:"@site/docs/04-xbuilder/06-examples/05-summary-document.md",sourceDirName:"04-xbuilder/06-examples",slug:"/xbuilder/examples/summary-document",permalink:"/docs/xbuilder/examples/summary-document",draft:!1,editUrl:"https://github.com/project-openubl/website/tree/master/docs/04-xbuilder/06-examples/05-summary-document.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"SummaryDocument (Resumen diario)",description:"Crear resumen diario"},sidebar:"tutorialSidebar",previous:{title:"VoidedDocument (Baja)",permalink:"/docs/xbuilder/examples/voided-document"},next:{title:"Perception (Percepci\xf3n)",permalink:"/docs/xbuilder/examples/perception"}},u={},l=[{value:"Create <em>SummaryDocument</em>",id:"create-summarydocument",level:2}],c={toc:l},d="wrapper";function p(e){let{components:n,...r}=e;return(0,o.kt)(d,(0,t.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"create-summarydocument"},"Create ",(0,o.kt)("em",{parentName:"h2"},"SummaryDocument")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'Defaults defaults;\nDateProvider dateProvider;\n\nSummaryDocuments input = SummaryDocuments.builder()\n        .numero(1)\n        .fechaEmisionComprobantes(dateProvider.now().minusDays(2))\n        .proveedor(Proveedor.builder()\n                .ruc("12345678912")\n                .razonSocial("Softgreen S.A.C.")\n                .build()\n        )\n        .comprobante(SummaryDocumentsItem.builder()\n                .tipoOperacion(Catalog19.ADICIONAR.toString())\n                .comprobante(Comprobante.builder()\n                        .tipoComprobante(Catalog1_Invoice.BOLETA.getCode())//\n                        .serieNumero("B001-1")\n                        .cliente(Cliente.builder()\n                                .nombre("Carlos Feria")\n                                .numeroDocumentoIdentidad("12345678")\n                                .tipoDocumentoIdentidad(Catalog6.DNI.getCode())\n                                .build()\n                        )\n                        .impuestos(ComprobanteImpuestos.builder()\n                                .igv(new BigDecimal("18"))\n                                .icb(new BigDecimal(2))\n                                .build()\n                        )\n                        .valorVenta(ComprobanteValorVenta.builder()\n                                .importeTotal(new BigDecimal("120"))\n                                .gravado(new BigDecimal("120"))\n                                .build()\n                        )\n                        .build()\n                )\n                .build()\n        )\n        .comprobante(SummaryDocumentsItem.builder()\n                .tipoOperacion(Catalog19.ADICIONAR.toString())\n                .comprobante(Comprobante.builder()\n                        .tipoComprobante(Catalog1.NOTA_CREDITO.getCode())\n                        .serieNumero("BC02-2")\n                        .comprobanteAfectado(ComprobanteAfectado.builder()\n                                .serieNumero("B002-2")\n                                .tipoComprobante(Catalog1.BOLETA.getCode()) //\n                                .build()\n                        )\n                        .cliente(Cliente.builder()\n                                .nombre("Carlos Feria")\n                                .numeroDocumentoIdentidad("12345678")\n                                .tipoDocumentoIdentidad(Catalog6.DNI.getCode())//\n                                .build()\n                        )\n                        .impuestos(ComprobanteImpuestos.builder()\n                                .igv(new BigDecimal("18"))\n                                .build()\n                        )\n                        .valorVenta(ComprobanteValorVenta.builder()\n                                .importeTotal(new BigDecimal("118"))\n                                .gravado(new BigDecimal("118"))\n                                .build()\n                        )\n                        .build()\n                )\n                .build()\n        )\n        .build();\n\nContentEnricher enricher = new ContentEnricher(defaults, dateProvider);\nenricher.enrich(input);\n\nTemplate template = TemplateProducer.getInstance().getSummaryDocuments();\nString xml = template.data(input).render();\n')))}p.isMDXComponent=!0}}]);