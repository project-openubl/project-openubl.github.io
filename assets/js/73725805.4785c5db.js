"use strict";(self.webpackChunkproject_openubl=self.webpackChunkproject_openubl||[]).push([[6877],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return s}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var m=r.createContext({}),l=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(m.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,m=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=l(n),s=o,y=p["".concat(m,".").concat(s)]||p[s]||d[s]||a;return n?r.createElement(y,u(u({ref:t},c),{},{components:n})):r.createElement(y,u({ref:t},c))}));function s(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,u=new Array(a);u[0]=p;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i.mdxType="string"==typeof e?e:o,u[1]=i;for(var l=2;l<a;l++)u[l]=n[l];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},17906:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return m},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),u=["components"],i={title:"SummaryDocument (Resumen diario)",description:"Crear resumen diario"},m=void 0,l={unversionedId:"xbuilder/examples/summary-document",id:"xbuilder/examples/summary-document",isDocsHomePage:!1,title:"SummaryDocument (Resumen diario)",description:"Crear resumen diario",source:"@site/docs/04-xbuilder/07-examples/05-summary-document.md",sourceDirName:"04-xbuilder/07-examples",slug:"/xbuilder/examples/summary-document",permalink:"/docs/xbuilder/examples/summary-document",editUrl:"https://github.com/project-openubl/website/edit/master/docs/04-xbuilder/07-examples/05-summary-document.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"SummaryDocument (Resumen diario)",description:"Crear resumen diario"},sidebar:"tutorialSidebar",previous:{title:"VoidedDocument (Baja)",permalink:"/docs/xbuilder/examples/voided-document"},next:{title:"IGV",permalink:"/docs/xbuilder/examples/igv"}},c=[{value:"Create <em>SummaryDocumentType</em>",id:"create-summarydocumenttype",children:[],level:2},{value:"How the <em>documentID</em> is calculated",id:"how-the-documentid-is-calculated",children:[],level:2}],d={toc:c};function p(e){var t=e.components,n=(0,o.Z)(e,u);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"create-summarydocumenttype"},"Create ",(0,a.kt)("em",{parentName:"h2"},"SummaryDocumentType")),(0,a.kt)("p",null,"Para crear una baja debes de crear una instancia de ",(0,a.kt)("inlineCode",{parentName:"p"},"SummaryDocumentInputModel")," y usarlo para crear el XML:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:"{46}","{46}":!0},'Config config;\nSystemClock clock;\n\n// Create the POJO\nCalendar calendar = Calendar.getInstance();\ncalendar.set(2019, Calendar.DECEMBER, 1, 20, 30, 59);\n\nSummaryDocumentInputModel pojo = SummaryDocumentInputModel.Builder.aSummaryDocumentInputModel()\n        .withNumero(1)\n        .withFechaEmisionDeComprobantesAsociados(calendar.getTimeInMillis())\n        .withProveedor(ProveedorInputModel.Builder.aProveedorInputModel()\n                .withRuc("12345678912")\n                .withRazonSocial("Softgreen S.A.C.")\n                .build()\n        )\n        .withDetalle(Collections.singletonList(\n                SummaryDocumentLineInputModel.Builder.aSummaryDocumentLineInputModel()\n                        .withTipoOperacion(Catalog19.ADICIONAR.toString())\n                        .withComprobante(SummaryDocumentComprobanteInputModel.Builder.aSummaryDocumentComprobanteInputModel()\n                                .withTipo(Catalog1.BOLETA.toString())\n                                .withSerieNumero("B001-1")\n                                .withCliente(ClienteInputModel.Builder.aClienteInputModel()\n                                        .withNombre("Carlos Feria")\n                                        .withNumeroDocumentoIdentidad("12345678")\n                                        .withTipoDocumentoIdentidad(Catalog6.DNI.toString())\n                                        .build()\n                                )\n                                .withImpuestos(SummaryDocumentImpuestosInputModel.Builder.aSummaryDocumentImpuestosInputModel()\n                                        .withIgv(new BigDecimal("18"))\n                                        .build()\n                                )\n                                .withValorVenta(SummaryDocumentComprobanteValorVentaInputModel.Builder.aSummaryDocumentComprobanteValorVentaInputModel()\n                                        .withImporteTotal(new BigDecimal("118"))\n                                        .withGravado(new BigDecimal("100"))\n                                        .build()\n                                )\n                                .build()\n                        )\n                        .build()\n        ))\n        .build();\n\n// When\nDocumentWrapper<SummaryDocumentOutputModel> result = DocumentManager.createXML(pojo, config, systemClock);\nSummaryDocumentOutputModel output = result.getOutput();\nString xml = result.getXml();\n')),(0,a.kt)("h2",{id:"how-the-documentid-is-calculated"},"How the ",(0,a.kt)("em",{parentName:"h2"},"documentID")," is calculated"),(0,a.kt)("p",null,"The ",(0,a.kt)("em",{parentName:"p"},"documentID")," has the structure:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"code-date-number"),". E.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"RC-20190101-1"))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"XBuilder")," will create the correct ",(0,a.kt)("em",{parentName:"p"},"documentID")," for you, you only need to define the ",(0,a.kt)("inlineCode",{parentName:"p"},"number")," of ",(0,a.kt)("em",{parentName:"p"},"SummaryDocuments")," created during the day."))}p.isMDXComponent=!0}}]);