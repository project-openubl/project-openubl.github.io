"use strict";(self.webpackChunkproject_openubl=self.webpackChunkproject_openubl||[]).push([[3150],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=l(r),m=a,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||c;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,i=new Array(c);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var l=2;l<c;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},37939:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>c,metadata:()=>o,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const c={title:"Introducci\xf3n",description:"Consulta ruc",keywords:["consulta ruc"],slug:"/searchpe"},i=void 0,o={unversionedId:"searchpe/introduction",id:"searchpe/introduction",title:"Introducci\xf3n",description:"Consulta ruc",source:"@site/docs/06-searchpe/01-introduction.md",sourceDirName:"06-searchpe",slug:"/searchpe",permalink:"/docs/searchpe",draft:!1,editUrl:"https://github.com/project-openubl/website/tree/master/docs/06-searchpe/01-introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Introducci\xf3n",description:"Consulta ruc",keywords:["consulta ruc"],slug:"/searchpe"},sidebar:"tutorialSidebar",previous:{title:"Valida y consulta",permalink:"/docs/xsender/validate-and-check"},next:{title:"Inicio r\xe1pido",permalink:"/docs/searchpe/getting-started"}},s={},l=[{value:"Caracter\xedsticas",id:"caracter\xedsticas",level:2},{value:"Arquitectura",id:"arquitectura",level:2}],p={toc:l},u="wrapper";function d(e){let{components:t,...c}=e;return(0,a.kt)(u,(0,n.Z)({},p,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Searchpe")," es un microservicio que procesa, almacena, y expone el contenido del ",(0,a.kt)("a",{parentName:"p",href:"https://www.sunat.gob.pe/descargaPRR/mrc137_padron_reducido.html"},"Padr\xf3n reducido RUC")," a trav\xe9s de su interf\xe1s gr\xe1fica (UI) y servicios REST."),(0,a.kt)("h2",{id:"caracter\xedsticas"},"Caracter\xedsticas"),(0,a.kt)("ul",{className:"contains-task-list"},(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Consulta RUC"),(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Consulta DNI"),(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Administraci\xf3n de usuarios"),(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Integraci\xf3n con OIDC (OpenID Connect). Por ejemplo: ",(0,a.kt)("a",{parentName:"li",href:"https://www.keycloak.org/"},"Keycloak"))),(0,a.kt)("h2",{id:"arquitectura"},"Arquitectura"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img",src:r(33936).Z,title:"Seachpe overview",width:"525",height:"499"})))}d.isMDXComponent=!0},33936:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/searchpe-overview-fa24020c14632793a6c5d5eb1a7b6a97.png"}}]);