"use strict";(self.webpackChunkproject_openubl=self.webpackChunkproject_openubl||[]).push([[6602],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),s=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(a),m=n,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return a?r.createElement(h,i(i({ref:t},p),{},{components:a})):r.createElement(h,i({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1842:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=a(7462),n=(a(7294),a(3905));const o={title:"Inicio r\xe1pido"},i=void 0,c={unversionedId:"searchpe/getting-started",id:"searchpe/getting-started",title:"Inicio r\xe1pido",description:"Los laboratorios est\xe1n hechos para que usted aprenda a usar Searchpe sin dificultad. Recuerde que la configuraci\xf3n no necesariamente es la adecuada para entornos de producci\xf3n.",source:"@site/docs/06-searchpe/02-getting-started.md",sourceDirName:"06-searchpe",slug:"/searchpe/getting-started",permalink:"/docs/searchpe/getting-started",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/06-searchpe/02-getting-started.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Inicio r\xe1pido"},sidebar:"tutorialSidebar",previous:{title:"Introducci\xf3n",permalink:"/docs/searchpe"},next:{title:"Java",permalink:"/docs/searchpe/installation/java"}},l={},s=[{value:"Laboratorio online",id:"laboratorio-online",level:2},{value:"Laboratorio local",id:"laboratorio-local",level:2},{value:"Requisitos",id:"requisitos",level:3},{value:"Inicia searchpe",id:"inicia-searchpe",level:3}],p={toc:s};function u(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{title:"Laboratorios",type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Los laboratorios est\xe1n hechos para que usted aprenda a usar Searchpe sin dificultad. Recuerde que la configuraci\xf3n no necesariamente es la adecuada para entornos de producci\xf3n.")),(0,n.kt)("h2",{id:"laboratorio-online"},"Laboratorio online"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://katacoda.com/openubl/"},(0,n.kt)("img",{parentName:"a",src:"https://shields.katacoda.com/katacoda/openubl/count.svg",alt:"Katakoda"}))),(0,n.kt)("p",null,"La manera m\xe1s sencilla de experimentar con Searchpe es utilizando nuestros laboratorios virtuales disponibles en ",(0,n.kt)("a",{parentName:"p",href:"https://katacoda.com/openubl/courses"},"Katakoda")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"img",src:a(5653).Z,title:"Katakoda",width:"275",height:"290"})),(0,n.kt)("p",null,"Para ver los laboratorios disponibles haga click ",(0,n.kt)("a",{parentName:"p",href:"https://katacoda.com/openubl/courses"},"aqu\xed"),"."),(0,n.kt)("h2",{id:"laboratorio-local"},"Laboratorio local"),(0,n.kt)("p",null,"Experimenta con Searchpe en tu laptop."),(0,n.kt)("h3",{id:"requisitos"},"Requisitos"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Docker"),(0,n.kt)("li",{parentName:"ul"},"Docker compose")),(0,n.kt)("h3",{id:"inicia-searchpe"},"Inicia searchpe"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Crea un archivo ",(0,n.kt)("inlineCode",{parentName:"li"},"docker-compose.yml")," con el contenido:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},'version: "3"\n\nservices:\n  postgresql:\n    image: postgres:13.6\n    ports:\n      - 5432:5432\n    environment:\n      POSTGRES_DB: searchpe_db\n      POSTGRES_USER: db_username\n      POSTGRES_PASSWORD: db_password\n    healthcheck:\n      test: ["CMD-SHELL", "pg_isready -U db_username -d searchpe_db"]\n      interval: 10s\n      timeout: 5s\n      retries: 5\n\n  searchpe:\n    image: quay.io/projectopenubl/searchpe\n    ports:\n      - 8180:8080\n    environment:\n      QUARKUS_HTTP_PORT: 8080\n      QUARKUS_DATASOURCE_USERNAME: db_username\n      QUARKUS_DATASOURCE_PASSWORD: db_password\n      QUARKUS_DATASOURCE_JDBC_URL: jdbc:postgresql://postgresql:5432/searchpe_db\n      // highlight-next-line\n      SEARCHPE_SUNAT_PADRONREDUCIDOURL: https://raw.githubusercontent.com/project-openubl/searchpe/master/src/test/resources/padron_reducido_ruc.zip\n    healthcheck:\n      test: ["CMD", "curl", "-f", "http://localhost:8080/q/health"]\n      interval: 10s\n      timeout: 5s\n      retries: 5\n    depends_on:\n      postgresql:\n        condition: service_healthy\n')),(0,n.kt)("admonition",{title:"Padr\xf3n reducido",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"La variable de entorno ",(0,n.kt)("inlineCode",{parentName:"p"},"SEARCHPE_SUNAT_PADRONREDUCIDOURL")," apunta a un padr\xf3n reducido de prueba, si deseas usar el padr\xf3n reducido real entonces reemplaza la linea resaltada por:"),(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("inlineCode",{parentName:"p"},"SEARCHPE_SUNAT_PADRONREDUCIDOURL: http://www2.sunat.gob.pe/padron_reducido_ruc.zip"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Ubica tu terminal en la carpeta donde se encuentra el archivo ",(0,n.kt)("inlineCode",{parentName:"li"},"docker-compose.yml")," y ejecuta:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"docker-compose up\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Searchpe est\xe1 funcionando en ",(0,n.kt)("a",{parentName:"li",href:"http://localhost:8180"},"http://localhost:8180"))))}u.isMDXComponent=!0},5653:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/katacoda-logo-106fe32a80443fd3cc70d88d880572f4.png"}}]);