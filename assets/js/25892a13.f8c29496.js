"use strict";(self.webpackChunkproject_openubl=self.webpackChunkproject_openubl||[]).push([[198],{15680:(e,a,t)=>{t.d(a,{xA:()=>u,yg:()=>m});var r=t(96540);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=r.createContext({}),p=function(e){var a=r.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},u=function(e){var a=p(e.components);return r.createElement(s.Provider,{value:a},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},g=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(t),g=n,m=c["".concat(s,".").concat(g)]||c[g]||d[g]||o;return t?r.createElement(m,l(l({ref:a},u),{},{components:t})):r.createElement(m,l({ref:a},u))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,l=new Array(o);l[0]=g;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i[c]="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},17194:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=t(58168),n=(t(96540),t(15680));const o={title:"Java"},l=void 0,i={unversionedId:"searchpe/installation/java",id:"searchpe/installation/java",title:"Java",description:"Puedes utilizar la m\xe1quina virtual de Java para ejecutar Searchpe en modo producci\xf3n.",source:"@site/docs/06-searchpe/03-installation/java.md",sourceDirName:"06-searchpe/03-installation",slug:"/searchpe/installation/java",permalink:"/docs/searchpe/installation/java",draft:!1,editUrl:"https://github.com/project-openubl/website/tree/master/docs/06-searchpe/03-installation/java.md",tags:[],version:"current",frontMatter:{title:"Java"},sidebar:"tutorialSidebar",previous:{title:"Inicio r\xe1pido",permalink:"/docs/searchpe/getting-started"},next:{title:"Kubernetes",permalink:"/docs/searchpe/installation/kubernetes"}},s={},p=[{value:"Requisitos",id:"requisitos",level:2},{value:"Instala PostgreSQL",id:"instala-postgresql",level:2},{value:"Instala Searchpe",id:"instala-searchpe",level:2}],u={toc:p},c="wrapper";function d(e){let{components:a,...o}=e;return(0,n.yg)(c,(0,r.A)({},u,o,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"Puedes utilizar la m\xe1quina virtual de Java para ejecutar Searchpe en modo producci\xf3n."),(0,n.yg)("h2",{id:"requisitos"},"Requisitos"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"PostgreSQL"),(0,n.yg)("li",{parentName:"ul"},"Java (versi\xf3n 11 o superior)")),(0,n.yg)("h2",{id:"instala-postgresql"},"Instala PostgreSQL"),(0,n.yg)("p",null,"Puedes usar ",(0,n.yg)("a",{parentName:"p",href:"https://www.postgresql.org/download/"},"https://www.postgresql.org/download/")," para descargar e instalar PosgreSQL; sin embargo, puedes utilizar el m\xe9todo de tu preferencia."),(0,n.yg)("p",null,"Una vez instalado PostgreSQL necesitas crear:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Una base de datos."),(0,n.yg)("li",{parentName:"ul"},"Un usuario y contrase\xf1a que tenga acceso a la base de datos.")),(0,n.yg)("p",null,"Puedes utilizar ",(0,n.yg)("a",{parentName:"p",href:"https://www.pgadmin.org/download/"},"PgAdmin")," para configurar tu base de datos."),(0,n.yg)("h2",{id:"instala-searchpe"},"Instala Searchpe"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Descarga el archivo ",(0,n.yg)("strong",{parentName:"p"},"searchpe-${version}.zip")," desde ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/project-openubl/searchpe/releases"},"Searchpe Releases"),".")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Descomprime el ",(0,n.yg)("inlineCode",{parentName:"p"},".zip")," descargado:"))),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"img",src:t(14477).A,title:"Distribution folder tree",width:"228",height:"235"})),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Abre el archivo ",(0,n.yg)("inlineCode",{parentName:"li"},"config/application.properties")," y configura las conexiones a la base de datos:")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-yaml"},"# Quarkus settings\nquarkus.http.port=8180\n\n# PostgreSQL settings\nquarkus.datasource.username=db_username\nquarkus.datasource.password=db_password\nquarkus.datasource.jdbc.url=jdbc:postgresql://localhost:5432/searchpe_db\n")),(0,n.yg)("p",null,"Reemplaza ",(0,n.yg)("inlineCode",{parentName:"p"},"db_username"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"db_password"),", y ",(0,n.yg)("inlineCode",{parentName:"p"},"searchpe_db")," con los datos de la base de datos que creaste."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Inicia el servidor ejecutando el archivo ",(0,n.yg)("inlineCode",{parentName:"p"},"bin/standalone.sh")," o ",(0,n.yg)("inlineCode",{parentName:"p"},"bin/standalone.bat")," dependiendo del sistema operativo que uses.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Searchpe est\xe1 funcionando en ",(0,n.yg)("a",{parentName:"p",href:"http://localhost:8180"},"http://localhost:8180")))))}d.isMDXComponent=!0},14477:(e,a,t)=>{t.d(a,{A:()=>r});const r=t.p+"assets/images/distribution-folder-tree-33d7bd0bed5dc9ae3b82d386ee9de4ed.png"}}]);