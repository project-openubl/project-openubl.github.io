(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{116:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return c})),t.d(a,"metadata",(function(){return l})),t.d(a,"toc",(function(){return i})),t.d(a,"default",(function(){return p}));var r=t(3),n=t(8),s=(t(0),t(162)),c={title:"Local"},l={unversionedId:"searchpe/installation-so",id:"searchpe/installation-so",isDocsHomePage:!1,title:"Local",description:"Si quieres instalar Searchpe en el sistema operativo de tu computador sigue los siguientes pasos:",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/searchpe/installation-so.md",slug:"/searchpe/installation-so",permalink:"/en/docs/searchpe/installation-so",editUrl:"https://github.com/project-openubl/website/edit/master/docs/searchpe/installation-so.md",version:"current",sidebar:"searchpe",previous:{title:"Docker compose",permalink:"/en/docs/searchpe/installation-docker-compose"},next:{title:"Uso",permalink:"/en/docs/searchpe/uso"}},i=[{value:"Instala PostgreSQL",id:"instala-postgresql",children:[]},{value:"Instala Elasticsearch",id:"instala-elasticsearch",children:[]},{value:"Instala Searchpe",id:"instala-searchpe",children:[]},{value:"Instala Searchpe UI",id:"instala-searchpe-ui",children:[]}],o={toc:i};function p(e){var a=e.components,c=Object(n.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},o,c,{components:a,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Si quieres instalar ",Object(s.b)("strong",{parentName:"p"},"Searchpe")," en el sistema operativo de tu computador sigue los siguientes pasos:"),Object(s.b)("h2",{id:"instala-postgresql"},"Instala PostgreSQL"),Object(s.b)("p",null,"Puedes usar ",Object(s.b)("a",{parentName:"p",href:"https://www.postgresql.org/download/"},"https://www.postgresql.org/download/")," para descargar e instalar PosgreSQL; sin embargo, puedes utilizar el m\xe9todo de tu preferencia."),Object(s.b)("p",null,"Una vez instalado PostgreSQL necesitas crear:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Una base de datos."),Object(s.b)("li",{parentName:"ul"},"Un usuario y contrase\xf1a que tenga acceso a la base de datos.")),Object(s.b)("p",null,"Puedes utilizar ",Object(s.b)("a",{parentName:"p",href:"https://www.pgadmin.org/download/"},"PgAdmin")," para configurar tu base de datos."),Object(s.b)("h2",{id:"instala-elasticsearch"},"Instala Elasticsearch"),Object(s.b)("p",null,"Elasticsearch puede ser instalado con en m\xe9todo de tu preferencia; aqu\xed tienes algunas alternativas disponibles:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Si usas Windows puedes descargar el ",Object(s.b)("a",{parentName:"li",href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/windows.html#download-msi"},"MSI")," e instalarlo."),Object(s.b)("li",{parentName:"ul"},"Si usas CentOS, RHEL, o Fedora entonces puedes descargar e instalar ",Object(s.b)("a",{parentName:"li",href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/rpm.html"},"RPM"),".")),Object(s.b)("p",null,"Para ver todas las opciones disponibles para instalar Elasticseach visita la documentaci\xf3n oficial ",Object(s.b)("a",{parentName:"p",href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/install-elasticsearch.html"},"Install Elasticsearch")),Object(s.b)("h2",{id:"instala-searchpe"},"Instala Searchpe"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Descarga ",Object(s.b)("strong",{parentName:"li"},"Searchpe")," desde ",Object(s.b)("a",{parentName:"li",href:"https://github.com/project-openubl/searchpe/releases"},"Searchpe Releases"),".")),Object(s.b)("p",null,Object(s.b)("img",{alt:"img",src:t(337).default,title:"Seachpe releases"})),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Descomprime el ",Object(s.b)("inlineCode",{parentName:"li"},".zip")," descargado:")),Object(s.b)("p",null,Object(s.b)("img",{alt:"img",src:t(338).default,title:"Distribution folder tree"})),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Abre el archivo ",Object(s.b)("inlineCode",{parentName:"li"},"config/application.properties")," y configura las conexiones a la base de datos y Elasticsearch:")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-yaml"},"# PostgreSQL settings\nquarkus.datasource.username=db_username\nquarkus.datasource.password=db_password\nquarkus.datasource.jdbc.url=jdbc:postgresql://localhost:5432/searchpe_db\n\n# Elasticsearch settings\nquarkus.hibernate-search-orm.elasticsearch.username=es_username\nquarkus.hibernate-search-orm.elasticsearch.password=es_password\nquarkus.hibernate-search-orm.elasticsearch.hosts=localhost:9200\nquarkus.hibernate-search-orm.elasticsearch.protocol=HTTP\nquarkus.hibernate-search-orm.elasticsearch.version=7\n")),Object(s.b)("p",null,"Reemplaza ",Object(s.b)("inlineCode",{parentName:"p"},"db_username"),", ",Object(s.b)("inlineCode",{parentName:"p"},"db_password"),", y ",Object(s.b)("inlineCode",{parentName:"p"},"searchpe_db")," con los datos de la base de datos que creaste."),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Inicia el servidor ejecutando el archivo ",Object(s.b)("inlineCode",{parentName:"li"},"bin/standalone.bat"),".")),Object(s.b)("h2",{id:"instala-searchpe-ui"},"Instala Searchpe UI"),Object(s.b)("p",null,"Descarga e instala ",Object(s.b)("strong",{parentName:"p"},"Searchpe UI")," desde ",Object(s.b)("a",{parentName:"p",href:"https://github.com/project-openubl/searchpe-ui/releases"},"Searchpe UI Releases")," y selecciona el archivo correcto dependiendo de tus sistema operativo."),Object(s.b)("p",null,Object(s.b)("img",{alt:"img",src:t(339).default,title:"Seachpe UI releases"})),Object(s.b)("p",null,"Eso es todo, tendr\xe1s Searchpe funcionando en tu computador."))}p.isMDXComponent=!0},162:function(e,a,t){"use strict";t.d(a,"a",(function(){return u})),t.d(a,"b",(function(){return m}));var r=t(0),n=t.n(r);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function c(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?c(Object(t),!0).forEach((function(a){s(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var o=n.a.createContext({}),p=function(e){var a=n.a.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},u=function(e){var a=p(e.components);return n.a.createElement(o.Provider,{value:a},e.children)},b={inlineCode:"code",wrapper:function(e){var a=e.children;return n.a.createElement(n.a.Fragment,{},a)}},d=n.a.forwardRef((function(e,a){var t=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),u=p(t),d=r,m=u["".concat(c,".").concat(d)]||u[d]||b[d]||s;return t?n.a.createElement(m,l(l({ref:a},o),{},{components:t})):n.a.createElement(m,l({ref:a},o))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var s=t.length,c=new Array(s);c[0]=d;var l={};for(var i in a)hasOwnProperty.call(a,i)&&(l[i]=a[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var o=2;o<s;o++)c[o]=t[o];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},337:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/searchpe-releases-f110ebb82872b10d30def4e3188f4d51.png"},338:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/distribution-folder-tree-f25be2245edc3e1317ddbc0eed1fa1c8.png"},339:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/searchpe-ui-releases-2a033ce4a56ad61ba90ec65a97a79926.png"}}]);