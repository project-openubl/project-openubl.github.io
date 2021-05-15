(self.webpackChunkproject_openubl=self.webpackChunkproject_openubl||[]).push([[6086],{3905:function(e,a,t){"use strict";t.d(a,{Zo:function(){return p},kt:function(){return h}});var r=t(67294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var o=r.createContext({}),c=function(e){var a=r.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},p=function(e){var a=c(e.components);return r.createElement(o.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},d=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,s=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(t),h=n,m=d["".concat(o,".").concat(h)]||d[h]||u[h]||s;return t?r.createElement(m,i(i({ref:a},p),{},{components:t})):r.createElement(m,i({ref:a},p))}));function h(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var s=t.length,i=new Array(s);i[0]=d;var l={};for(var o in a)hasOwnProperty.call(a,o)&&(l[o]=a[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<s;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},80880:function(e,a,t){"use strict";t.r(a),t.d(a,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return o},default:function(){return p}});var r=t(22122),n=t(19756),s=(t(67294),t(3905)),i={title:"Local"},l={unversionedId:"searchpe/installation/so",id:"searchpe/installation/so",isDocsHomePage:!1,title:"Local",description:"Si quieres instalar Searchpe en el sistema operativo de tu computador sigue los siguientes pasos:",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/06-searchpe/03-installation/so.md",sourceDirName:"06-searchpe/03-installation",slug:"/searchpe/installation/so",permalink:"/en/docs/searchpe/installation/so",editUrl:"https://github.com/project-openubl/website/edit/master/docs/06-searchpe/03-installation/so.md",version:"current",frontMatter:{title:"Local"},sidebar:"tutorialSidebar",previous:{title:"Docker",permalink:"/en/docs/searchpe/installation/docker"}},o=[{value:"Instala PostgreSQL",id:"instala-postgresql",children:[]},{value:"Instala Elasticsearch",id:"instala-elasticsearch",children:[]},{value:"Instala Searchpe",id:"instala-searchpe",children:[]},{value:"Instala Searchpe UI",id:"instala-searchpe-ui",children:[]}],c={toc:o};function p(e){var a=e.components,i=(0,n.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,r.Z)({},c,i,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Si quieres instalar ",(0,s.kt)("strong",{parentName:"p"},"Searchpe")," en el sistema operativo de tu computador sigue los siguientes pasos:"),(0,s.kt)("h2",{id:"instala-postgresql"},"Instala PostgreSQL"),(0,s.kt)("p",null,"Puedes usar ",(0,s.kt)("a",{parentName:"p",href:"https://www.postgresql.org/download/"},"https://www.postgresql.org/download/")," para descargar e instalar PosgreSQL; sin embargo, puedes utilizar el m\xe9todo de tu preferencia."),(0,s.kt)("p",null,"Una vez instalado PostgreSQL necesitas crear:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Una base de datos."),(0,s.kt)("li",{parentName:"ul"},"Un usuario y contrase\xf1a que tenga acceso a la base de datos.")),(0,s.kt)("p",null,"Puedes utilizar ",(0,s.kt)("a",{parentName:"p",href:"https://www.pgadmin.org/download/"},"PgAdmin")," para configurar tu base de datos."),(0,s.kt)("h2",{id:"instala-elasticsearch"},"Instala Elasticsearch"),(0,s.kt)("p",null,"Elasticsearch puede ser instalado con en m\xe9todo de tu preferencia; aqu\xed tienes algunas alternativas disponibles:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Si usas Windows puedes descargar el ",(0,s.kt)("a",{parentName:"li",href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/windows.html#download-msi"},"MSI")," e instalarlo."),(0,s.kt)("li",{parentName:"ul"},"Si usas CentOS, RHEL, o Fedora entonces puedes descargar e instalar ",(0,s.kt)("a",{parentName:"li",href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/rpm.html"},"RPM"),".")),(0,s.kt)("p",null,"Para ver todas las opciones disponibles para instalar Elasticseach visita la documentaci\xf3n oficial ",(0,s.kt)("a",{parentName:"p",href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/install-elasticsearch.html"},"Install Elasticsearch")),(0,s.kt)("h2",{id:"instala-searchpe"},"Instala Searchpe"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Descarga ",(0,s.kt)("strong",{parentName:"li"},"Searchpe")," desde ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/project-openubl/searchpe/releases"},"Searchpe Releases"),".")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"img",src:t(31272).Z,title:"Seachpe releases"})),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Descomprime el ",(0,s.kt)("inlineCode",{parentName:"li"},".zip")," descargado:")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"img",src:t(73540).Z,title:"Distribution folder tree"})),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Abre el archivo ",(0,s.kt)("inlineCode",{parentName:"li"},"config/application.properties")," y configura las conexiones a la base de datos y Elasticsearch:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"# PostgreSQL settings\nquarkus.datasource.username=db_username\nquarkus.datasource.password=db_password\nquarkus.datasource.jdbc.url=jdbc:postgresql://localhost:5432/searchpe_db\n\n# Elasticsearch settings\nquarkus.hibernate-search-orm.elasticsearch.username=es_username\nquarkus.hibernate-search-orm.elasticsearch.password=es_password\nquarkus.hibernate-search-orm.elasticsearch.hosts=localhost:9200\nquarkus.hibernate-search-orm.elasticsearch.protocol=HTTP\nquarkus.hibernate-search-orm.elasticsearch.version=7\n")),(0,s.kt)("p",null,"Reemplaza ",(0,s.kt)("inlineCode",{parentName:"p"},"db_username"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"db_password"),", y ",(0,s.kt)("inlineCode",{parentName:"p"},"searchpe_db")," con los datos de la base de datos que creaste."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Inicia el servidor ejecutando el archivo ",(0,s.kt)("inlineCode",{parentName:"li"},"bin/standalone.bat"),".")),(0,s.kt)("h2",{id:"instala-searchpe-ui"},"Instala Searchpe UI"),(0,s.kt)("p",null,"Descarga e instala ",(0,s.kt)("strong",{parentName:"p"},"Searchpe UI")," desde ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/project-openubl/searchpe-ui/releases"},"Searchpe UI Releases")," y selecciona el archivo correcto dependiendo de tus sistema operativo."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"img",src:t(81042).Z,title:"Seachpe UI releases"})),(0,s.kt)("p",null,"Eso es todo, tendr\xe1s Searchpe funcionando en tu computador."))}p.isMDXComponent=!0},73540:function(e,a,t){"use strict";a.Z=t.p+"assets/images/distribution-folder-tree-f25be2245edc3e1317ddbc0eed1fa1c8.png"},31272:function(e,a,t){"use strict";a.Z=t.p+"assets/images/searchpe-releases-f110ebb82872b10d30def4e3188f4d51.png"},81042:function(e,a,t){"use strict";a.Z=t.p+"assets/images/searchpe-ui-releases-2a033ce4a56ad61ba90ec65a97a79926.png"}}]);