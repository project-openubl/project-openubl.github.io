"use strict";(self.webpackChunkproject_openubl=self.webpackChunkproject_openubl||[]).push([[7127],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(a),m=n,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return a?r.createElement(f,i(i({ref:t},u),{},{components:a})):r.createElement(f,i({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},95109:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var r=a(83117),n=a(80102),o=(a(67294),a(3905)),i=["components"],l={title:"Java"},s=void 0,p={unversionedId:"searchpe/installation/java",id:"searchpe/installation/java",isDocsHomePage:!1,title:"Java",description:"Puedes utilizar la m\xe1quina virtual de Java para ejecutar Searchpe en modo producci\xf3n.",source:"@site/docs/06-searchpe/03-installation/java.md",sourceDirName:"06-searchpe/03-installation",slug:"/searchpe/installation/java",permalink:"/docs/searchpe/installation/java",editUrl:"https://github.com/project-openubl/website/edit/master/docs/06-searchpe/03-installation/java.md",tags:[],version:"current",frontMatter:{title:"Java"},sidebar:"tutorialSidebar",previous:{title:"Inicio r\xe1pido",permalink:"/docs/searchpe/getting-started"},next:{title:"Kubernetes",permalink:"/docs/searchpe/installation/kubernetes"}},u=[{value:"Requisitos",id:"requisitos",children:[],level:2},{value:"Instala PostgreSQL",id:"instala-postgresql",children:[],level:2},{value:"Instala Searchpe",id:"instala-searchpe",children:[],level:2}],c={toc:u};function d(e){var t=e.components,l=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Puedes utilizar la m\xe1quina virtual de Java para ejecutar Searchpe en modo producci\xf3n."),(0,o.kt)("h2",{id:"requisitos"},"Requisitos"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"PostgreSQL"),(0,o.kt)("li",{parentName:"ul"},"Java (versi\xf3n 11 o superior)")),(0,o.kt)("h2",{id:"instala-postgresql"},"Instala PostgreSQL"),(0,o.kt)("p",null,"Puedes usar ",(0,o.kt)("a",{parentName:"p",href:"https://www.postgresql.org/download/"},"https://www.postgresql.org/download/")," para descargar e instalar PosgreSQL; sin embargo, puedes utilizar el m\xe9todo de tu preferencia."),(0,o.kt)("p",null,"Una vez instalado PostgreSQL necesitas crear:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Una base de datos."),(0,o.kt)("li",{parentName:"ul"},"Un usuario y contrase\xf1a que tenga acceso a la base de datos.")),(0,o.kt)("p",null,"Puedes utilizar ",(0,o.kt)("a",{parentName:"p",href:"https://www.pgadmin.org/download/"},"PgAdmin")," para configurar tu base de datos."),(0,o.kt)("h2",{id:"instala-searchpe"},"Instala Searchpe"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Descarga el archivo ",(0,o.kt)("strong",{parentName:"p"},"searchpe-${version}.zip")," desde ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/project-openubl/searchpe/releases"},"Searchpe Releases"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Descomprime el ",(0,o.kt)("inlineCode",{parentName:"p"},".zip")," descargado:"))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img",src:a(73540).Z,title:"Distribution folder tree"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Abre el archivo ",(0,o.kt)("inlineCode",{parentName:"li"},"config/application.properties")," y configura las conexiones a la base de datos:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# Quarkus settings\nquarkus.http.port=8180\n\n# PostgreSQL settings\nquarkus.datasource.username=db_username\nquarkus.datasource.password=db_password\nquarkus.datasource.jdbc.url=jdbc:postgresql://localhost:5432/searchpe_db\n")),(0,o.kt)("p",null,"Reemplaza ",(0,o.kt)("inlineCode",{parentName:"p"},"db_username"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"db_password"),", y ",(0,o.kt)("inlineCode",{parentName:"p"},"searchpe_db")," con los datos de la base de datos que creaste."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Inicia el servidor ejecutando el archivo ",(0,o.kt)("inlineCode",{parentName:"p"},"bin/standalone.sh")," o ",(0,o.kt)("inlineCode",{parentName:"p"},"bin/standalone.bat")," dependiendo del sistema operativo que uses.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Searchpe est\xe1 funcionando en ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:8180"},"http://localhost:8180")))))}d.isMDXComponent=!0},73540:function(e,t,a){t.Z=a.p+"assets/images/distribution-folder-tree-33d7bd0bed5dc9ae3b82d386ee9de4ed.png"}}]);