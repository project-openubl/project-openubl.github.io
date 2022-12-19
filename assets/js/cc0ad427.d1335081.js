"use strict";(self.webpackChunkproject_openubl=self.webpackChunkproject_openubl||[]).push([[1712],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=l(r),m=a,f=s["".concat(u,".").concat(m)]||s[m]||d[m]||o;return r?n.createElement(f,c(c({ref:t},p),{},{components:r})):n.createElement(f,c({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[s]="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8592:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={title:"Introducci\xf3n",description:"Project OpenUBL fue dise\xf1ado y hecho para que puedas empezar a manipular comprobantes electr\xf3nicos r\xe1pidamente y sin necesidad de reinventar la rueda nuevamente.",slug:"/"},c=void 0,i={unversionedId:"introduction",id:"introduction",title:"Introducci\xf3n",description:"Project OpenUBL fue dise\xf1ado y hecho para que puedas empezar a manipular comprobantes electr\xf3nicos r\xe1pidamente y sin necesidad de reinventar la rueda nuevamente.",source:"@site/docs/01-introduction.md",sourceDirName:".",slug:"/",permalink:"/docs/",draft:!1,editUrl:"https://github.com/project-openubl/website/tree/master/docs/01-introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Introducci\xf3n",description:"Project OpenUBL fue dise\xf1ado y hecho para que puedas empezar a manipular comprobantes electr\xf3nicos r\xe1pidamente y sin necesidad de reinventar la rueda nuevamente.",slug:"/"},sidebar:"tutorialSidebar",next:{title:"Criterios de dise\xf1o",permalink:"/docs/design-principles"}},u={},l=[{value:"\xbfQu\xe9 es Project OpenUBL?",id:"qu\xe9-es-project-openubl",level:2},{value:"\xbfQu\xe9 puedes hacer con Project OpenUBL?",id:"qu\xe9-puedes-hacer-con-project-openubl",level:2},{value:"Comparaci\xf3n con otras soluciones",id:"comparaci\xf3n-con-otras-soluciones",level:2},{value:"Mantente informado",id:"mantente-informado",level:2},{value:"\xbfHay algo que mejorar?",id:"hay-algo-que-mejorar",level:2}],p={toc:l};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"qu\xe9-es-project-openubl"},"\xbfQu\xe9 es Project OpenUBL?"),(0,a.kt)("p",null,"Project OpenUBL es un proyecto Open Source que desarrolla un conjunto de librerias, microservicios asociados al est\xe1ndar UBL y la Facturaci\xf3n Electr\xf3nica en el Per\xfa."),(0,a.kt)("h2",{id:"qu\xe9-puedes-hacer-con-project-openubl"},"\xbfQu\xe9 puedes hacer con Project OpenUBL?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Crear XMLs")," - Crea tus XMLs (comprobantes electr\xf3nicos) basados en UBL y las especificaciones de la SUNAT."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Firmar XMLs")," - Firma electr\xf3nicamente tus archivos XMLs."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Enviar tus XMLs a la SUNAT")," - Env\xeda tus XMLs a la SUNAT o cualquier OSE.")),(0,a.kt)("h2",{id:"comparaci\xf3n-con-otras-soluciones"},"Comparaci\xf3n con otras soluciones"),(0,a.kt)("p",null,"De entre todas las opciones en el mercado, Project OpenUBL es el \xfanico verdaderamente Open Source; recuerda que para que un proyecto sea Open Source no es suficiente tener solamente el c\xf3digo fuente."),(0,a.kt)("p",null,"A diferencia de otras soluciones, Project OpenUBL est\xe1 orientado a ayudarte a crear tu propio software de facturaci\xf3n electr\xf3nica y no a venderte un software ya hecho."),(0,a.kt)("h2",{id:"mantente-informado"},"Mantente informado"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.facebook.com/Openubl/"},"Facebook")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://twitter.com/openubl"},"Twitter")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/blog"},"Blog"))),(0,a.kt)("h2",{id:"hay-algo-que-mejorar"},"\xbfHay algo que mejorar?"),(0,a.kt)("p",null,"Si encuentras alg\xfan error en la documentaci\xf3n, tienes sugerencias sobre c\xf3mo mejorar la documentaci\xf3n, o ideas que ayuden a Project OpenUBL entonces crea un tweet mencionando a ",(0,a.kt)("a",{parentName:"p",href:"https://twitter.com/openubl"},"@openubl")," en tu cuenta de Twitter, o escr\xedbenos por nuestro canal de chat en ",(0,a.kt)("a",{parentName:"p",href:"https://projectopenubl.zulipchat.com/"},"Zulip"),"."))}s.isMDXComponent=!0}}]);