"use strict";(self.webpackChunkproject_openubl=self.webpackChunkproject_openubl||[]).push([[8366],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(t),m=a,b=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return t?r.createElement(b,i(i({ref:n},u),{},{components:t})):r.createElement(b,i({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},86114:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var r=t(83117),a=t(80102),o=(t(67294),t(3905)),i=["components"],c={title:"Migrando de v2 a v3"},l=void 0,s={unversionedId:"searchpe/migration",id:"searchpe/migration",isDocsHomePage:!1,title:"Migrando de v2 a v3",description:"Este documento te guiar\xe1 en la migraci\xf3n de tu Searchpe v2 a v3.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/06-searchpe/06-migration.md",sourceDirName:"06-searchpe",slug:"/searchpe/migration",permalink:"/en/docs/searchpe/migration",editUrl:"https://github.com/project-openubl/website/edit/master/docs/06-searchpe/06-migration.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Migrando de v2 a v3"},sidebar:"tutorialSidebar",previous:{title:"Integraci\xf3n API",permalink:"/en/docs/searchpe/api-integration"},next:{title:"Introducci\xf3n",permalink:"/en/docs/searchpe/enterprise/introduction"}},u=[{value:"Principales diferencias",id:"principales-diferencias",children:[],level:2},{value:"Consulta DNI/RUC",id:"consulta-dniruc",children:[{value:"Searchpe v2",id:"searchpe-v2",children:[],level:3},{value:"Searchpe v3",id:"searchpe-v3",children:[],level:3}],level:2}],p={toc:u};function d(e){var n=e.components,c=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,c,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Este documento te guiar\xe1 en la migraci\xf3n de tu Searchpe v2 a v3."),(0,o.kt)("h2",{id:"principales-diferencias"},"Principales diferencias"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Searchpe v2"),(0,o.kt)("th",{parentName:"tr",align:null},"Searchpe v3"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Requiere Elasticsearch para almacenar \xedndices usados en b\xfasquedas avanzadas"),(0,o.kt)("td",{parentName:"tr",align:null},"Elasticsearch no es requerido; sin embargo, las b\xfasquedas avanzadas ya no son posibles. S\xf3lo se puede buscar personas a trav\xe9z de su ",(0,o.kt)("inlineCode",{parentName:"td"},"n\xfamero de documento"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"No existe seguridad en los endpoints"),(0,o.kt)("td",{parentName:"tr",align:null},"Los endpoints tienen seguridad y adem\xe1s cuenta con un sistema de administraci\xf3n de usuarios")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"La UI y el backend son independientes y ambos requieren ser instalados"),(0,o.kt)("td",{parentName:"tr",align:null},"La UI y el backend son un solo artefacto y ya no se requiere la instalaci\xf3n de la UI ya que viene dentro del backend por defecto")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"S\xf3lo se puede buscar por RUC"),(0,o.kt)("td",{parentName:"tr",align:null},"Se puede buscar por DNI y RUC")))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img",src:t(48733).Z,title:"Seachpe new version"})),(0,o.kt)("h2",{id:"consulta-dniruc"},"Consulta DNI/RUC"),(0,o.kt)("h3",{id:"searchpe-v2"},"Searchpe v2"),(0,o.kt)("p",null,"El endpoint ",(0,o.kt)("inlineCode",{parentName:"p"},"/api/contribuyentes/{numeroDocumento}")," retorna:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:"{2-4}","{2-4}":!0},'{\n  "ruc": "20517630331",\n  "razonSocial": "Raz\xf3n social de persona jur\xeddica",\n  "estadoContribuyente": "ACTIVO",\n  "condicionDomicilio": "HABIDO",\n  "nombreVia": "Nombre de la calle...",\n  "numero": "123456789",\n  "tipoVia": "AV.",\n  "ubigeo": "010101"\n}\n')),(0,o.kt)("h3",{id:"searchpe-v3"},"Searchpe v3"),(0,o.kt)("p",null,"El endpoint ",(0,o.kt)("inlineCode",{parentName:"p"},"/api/contribuyentes/{numeroDocumento}")," retorna:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:"{2-5}","{2-5}":!0},'{\n  "numeroDocumento": "20517630331",\n  "nombre": "Raz\xf3n social o nombre de persona natural/jur\xeddica",\n  "estado": "ACTIVO",\n  "tipoPersona": "JURIDICA",\n  "condicionDomicilio": "HABIDO",\n  "nombreVia": "Nombre de la calle...",\n  "numero": "123456789",\n  "tipoVia": "AV.",\n  "ubigeo": "010101"\n}\n')))}d.isMDXComponent=!0},48733:function(e,n,t){n.Z=t.p+"assets/images/new-version-eeb60eac3fca56094509f211a4d208fc.png"}}]);