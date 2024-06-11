"use strict";(self.webpackChunkproject_openubl=self.webpackChunkproject_openubl||[]).push([[1928],{15680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>m});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(n),b=a,m=p["".concat(u,".").concat(b)]||p[b]||d[b]||o;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=b;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},34498:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(58168),a=(n(96540),n(15680));const o={title:"Inicio r\xe1pido"},i=void 0,l={unversionedId:"ublhub/getting-started",id:"ublhub/getting-started",title:"Inicio r\xe1pido",description:"Los laboratorios est\xe1n hechos para que usted aprenda a usar Ublhub sin dificultad. Recuerde que la configuraci\xf3n no necesariamente es la adecuada para entornos de producci\xf3n.",source:"@site/docs/07-ublhub/02-getting-started.md",sourceDirName:"07-ublhub",slug:"/ublhub/getting-started",permalink:"/docs/ublhub/getting-started",draft:!1,editUrl:"https://github.com/project-openubl/website/tree/master/docs/07-ublhub/02-getting-started.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Inicio r\xe1pido"},sidebar:"tutorialSidebar",previous:{title:"Introducci\xf3n",permalink:"/docs/ublhub"},next:{title:"Java",permalink:"/docs/ublhub/installation/java"}},u={},c=[{value:"Laboratorio local",id:"laboratorio-local",level:2},{value:"Requisitos",id:"requisitos",level:3},{value:"Inicia ublhub",id:"inicia-ublhub",level:3}],s={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.yg)(p,(0,r.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("admonition",{title:"Laboratorios",type:"caution"},(0,a.yg)("p",{parentName:"admonition"},"Los laboratorios est\xe1n hechos para que usted aprenda a usar Ublhub sin dificultad. Recuerde que la configuraci\xf3n no necesariamente es la adecuada para entornos de producci\xf3n.")),(0,a.yg)("h2",{id:"laboratorio-local"},"Laboratorio local"),(0,a.yg)("p",null,"Experimenta con Ublhub en tu laptop."),(0,a.yg)("h3",{id:"requisitos"},"Requisitos"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Docker"),(0,a.yg)("li",{parentName:"ul"},"Docker compose")),(0,a.yg)("h3",{id:"inicia-ublhub"},"Inicia ublhub"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Crea un archivo ",(0,a.yg)("inlineCode",{parentName:"li"},"docker-compose.yml")," con el contenido:")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},'version: "3"\n\nservices:\n  postgresql:\n    image: postgres:13.6\n    ports:\n      - 5432:5432\n    environment:\n      POSTGRES_DB: ublhub_db\n      POSTGRES_USER: db_username\n      POSTGRES_PASSWORD: db_password\n    healthcheck:\n      test: ["CMD-SHELL", "pg_isready -U db_username -d ublhub_db"]\n      interval: 10s\n      timeout: 5s\n      retries: 5\n\n  ublhub:\n    image: quay.io/projectopenubl/ublhub\n    ports:\n      - 8180:8080\n    environment:\n      QUARKUS_HTTP_PORT: 8080\n      QUARKUS_DATASOURCE_USERNAME: db_username\n      QUARKUS_DATASOURCE_PASSWORD: db_password\n      QUARKUS_DATASOURCE_JDBC_URL: jdbc:postgresql://postgresql:5432/ublhub_db\n      OPENUBL_STORAGE_TYPE: filesystem\n      OPENUBL_STORAGE_FILESYSTEM.FOLDER: workspace\n    healthcheck:\n      test: ["CMD", "curl", "-f", "http://localhost:8080/q/health"]\n      interval: 10s\n      timeout: 5s\n      retries: 5\n    depends_on:\n      postgresql:\n        condition: service_healthy\n')),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Ubica tu terminal en la carpeta donde se encuentra el archivo ",(0,a.yg)("inlineCode",{parentName:"li"},"docker-compose.yml")," y ejecuta:")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"docker-compose up\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Ublhub est\xe1 funcionando en ",(0,a.yg)("a",{parentName:"li",href:"http://localhost:8180"},"http://localhost:8180"))))}d.isMDXComponent=!0}}]);