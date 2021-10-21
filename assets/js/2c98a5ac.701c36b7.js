(self.webpackChunkproject_openubl=self.webpackChunkproject_openubl||[]).push([[5719],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return p},kt:function(){return h}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),c=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(a),h=n,m=d["".concat(o,".").concat(h)]||d[h]||u[h]||s;return a?r.createElement(m,l(l({ref:t},p),{},{components:a})):r.createElement(m,l({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,l=new Array(s);l[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var c=2;c<s;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},96392:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=a(74034),n=a(79973),s=(a(67294),a(3905)),l=["components"],i={title:"Local"},o=void 0,c={unversionedId:"searchpe/installation/so",id:"searchpe/installation/so",isDocsHomePage:!1,title:"Local",description:"Si quieres instalar Searchpe en el sistema operativo de tu computador sigue los siguientes pasos:",source:"@site/docs/06-searchpe/03-installation/so.md",sourceDirName:"06-searchpe/03-installation",slug:"/searchpe/installation/so",permalink:"/docs/searchpe/installation/so",editUrl:"https://github.com/project-openubl/website/edit/master/docs/06-searchpe/03-installation/so.md",tags:[],version:"current",frontMatter:{title:"Local"},sidebar:"tutorialSidebar",previous:{title:"Docker",permalink:"/docs/searchpe/installation/docker"}},p=[{value:"Instala PostgreSQL",id:"instala-postgresql",children:[],level:2},{value:"Instala Elasticsearch",id:"instala-elasticsearch",children:[],level:2},{value:"Instala Searchpe",id:"instala-searchpe",children:[],level:2},{value:"Instala Searchpe UI",id:"instala-searchpe-ui",children:[],level:2}],u={toc:p};function d(e){var t=e.components,i=(0,n.Z)(e,l);return(0,s.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Si quieres instalar ",(0,s.kt)("strong",{parentName:"p"},"Searchpe")," en el sistema operativo de tu computador sigue los siguientes pasos:"),(0,s.kt)("h2",{id:"instala-postgresql"},"Instala PostgreSQL"),(0,s.kt)("p",null,"Puedes usar ",(0,s.kt)("a",{parentName:"p",href:"https://www.postgresql.org/download/"},"https://www.postgresql.org/download/")," para descargar e instalar PosgreSQL; sin embargo, puedes utilizar el m\xe9todo de tu preferencia."),(0,s.kt)("p",null,"Una vez instalado PostgreSQL necesitas crear:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Una base de datos."),(0,s.kt)("li",{parentName:"ul"},"Un usuario y contrase\xf1a que tenga acceso a la base de datos.")),(0,s.kt)("p",null,"Puedes utilizar ",(0,s.kt)("a",{parentName:"p",href:"https://www.pgadmin.org/download/"},"PgAdmin")," para configurar tu base de datos."),(0,s.kt)("h2",{id:"instala-elasticsearch"},"Instala Elasticsearch"),(0,s.kt)("p",null,"Elasticsearch puede ser instalado con en m\xe9todo de tu preferencia; aqu\xed tienes algunas alternativas disponibles:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Si usas Windows puedes descargar el ",(0,s.kt)("a",{parentName:"li",href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/windows.html#download-msi"},"MSI")," e instalarlo."),(0,s.kt)("li",{parentName:"ul"},"Si usas CentOS, RHEL, o Fedora entonces puedes descargar e instalar ",(0,s.kt)("a",{parentName:"li",href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/rpm.html"},"RPM"),".")),(0,s.kt)("p",null,"Para ver todas las opciones disponibles para instalar Elasticseach visita la documentaci\xf3n oficial ",(0,s.kt)("a",{parentName:"p",href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/install-elasticsearch.html"},"Install Elasticsearch")),(0,s.kt)("h2",{id:"instala-searchpe"},"Instala Searchpe"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Descarga ",(0,s.kt)("strong",{parentName:"li"},"Searchpe")," desde ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/project-openubl/searchpe/releases"},"Searchpe Releases"),".")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"img",src:a(31272).Z,title:"Seachpe releases"})),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Descomprime el ",(0,s.kt)("inlineCode",{parentName:"li"},".zip")," descargado:")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"img",src:a(73540).Z,title:"Distribution folder tree"})),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Abre el archivo ",(0,s.kt)("inlineCode",{parentName:"li"},"config/application.properties")," y configura las conexiones a la base de datos y Elasticsearch:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"# PostgreSQL settings\nquarkus.datasource.username=db_username\nquarkus.datasource.password=db_password\nquarkus.datasource.jdbc.url=jdbc:postgresql://localhost:5432/searchpe_db\n\n# Elasticsearch settings\nquarkus.hibernate-search-orm.elasticsearch.username=es_username\nquarkus.hibernate-search-orm.elasticsearch.password=es_password\nquarkus.hibernate-search-orm.elasticsearch.hosts=localhost:9200\nquarkus.hibernate-search-orm.elasticsearch.protocol=HTTP\nquarkus.hibernate-search-orm.elasticsearch.version=7\n")),(0,s.kt)("p",null,"Reemplaza ",(0,s.kt)("inlineCode",{parentName:"p"},"db_username"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"db_password"),", y ",(0,s.kt)("inlineCode",{parentName:"p"},"searchpe_db")," con los datos de la base de datos que creaste."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Inicia el servidor ejecutando el archivo ",(0,s.kt)("inlineCode",{parentName:"li"},"bin/standalone.bat"),".")),(0,s.kt)("h2",{id:"instala-searchpe-ui"},"Instala Searchpe UI"),(0,s.kt)("p",null,"Descarga e instala ",(0,s.kt)("strong",{parentName:"p"},"Searchpe UI")," desde ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/project-openubl/searchpe-ui/releases"},"Searchpe UI Releases")," y selecciona el archivo correcto dependiendo de tus sistema operativo."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"img",src:a(81042).Z,title:"Seachpe UI releases"})),(0,s.kt)("p",null,"Eso es todo, tendr\xe1s Searchpe funcionando en tu computador."))}d.isMDXComponent=!0},73540:function(e,t,a){"use strict";t.Z=a.p+"assets/images/distribution-folder-tree-f25be2245edc3e1317ddbc0eed1fa1c8.png"},31272:function(e,t,a){"use strict";t.Z=a.p+"assets/images/searchpe-releases-f110ebb82872b10d30def4e3188f4d51.png"},81042:function(e,t,a){"use strict";t.Z=a.p+"assets/images/searchpe-ui-releases-2a033ce4a56ad61ba90ec65a97a79926.png"}}]);