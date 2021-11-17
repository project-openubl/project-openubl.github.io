"use strict";(self.webpackChunkproject_openubl=self.webpackChunkproject_openubl||[]).push([[1447],{3905:function(e,a,t){t.d(a,{Zo:function(){return u},kt:function(){return h}});var r=t(67294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var o=r.createContext({}),c=function(e){var a=r.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},u=function(e){var a=c(e.components);return r.createElement(o.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},d=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,s=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(t),h=n,m=d["".concat(o,".").concat(h)]||d[h]||p[h]||s;return t?r.createElement(m,i(i({ref:a},u),{},{components:t})):r.createElement(m,i({ref:a},u))}));function h(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var s=t.length,i=new Array(s);i[0]=d;var l={};for(var o in a)hasOwnProperty.call(a,o)&&(l[o]=a[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<s;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},98094:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var r=t(83117),n=t(80102),s=(t(67294),t(3905)),i=["components"],l={title:"Java"},o=void 0,c={unversionedId:"searchpe/enterprise/installation/java",id:"searchpe/enterprise/installation/java",isDocsHomePage:!1,title:"Java",description:"Puedes utilizar la m\xe1quina virtual de Java para ejecutar Searchpe en modo producci\xf3n.",source:"@site/docs/06-searchpe/07-enterprise/installation/java.md",sourceDirName:"06-searchpe/07-enterprise/installation",slug:"/searchpe/enterprise/installation/java",permalink:"/docs/searchpe/enterprise/installation/java",editUrl:"https://github.com/project-openubl/website/edit/master/docs/06-searchpe/07-enterprise/installation/java.md",tags:[],version:"current",frontMatter:{title:"Java"},sidebar:"tutorialSidebar",previous:{title:"Introducci\xf3n",permalink:"/docs/searchpe/enterprise/introduction"}},u=[{value:"Requisitos",id:"requisitos",children:[],level:2},{value:"Instala PostgreSQL",id:"instala-postgresql",children:[],level:2},{value:"Instala Elasticsearch",id:"instala-elasticsearch",children:[],level:2},{value:"Instala Keycloak",id:"instala-keycloak",children:[],level:2},{value:"Instala Searchpe",id:"instala-searchpe",children:[],level:2}],p={toc:u};function d(e){var a=e.components,l=(0,n.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},p,l,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Puedes utilizar la m\xe1quina virtual de Java para ejecutar Searchpe en modo producci\xf3n."),(0,s.kt)("h2",{id:"requisitos"},"Requisitos"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"PostgreSQL"),(0,s.kt)("li",{parentName:"ul"},"Elasticsearch"),(0,s.kt)("li",{parentName:"ul"},"Keycloak"),(0,s.kt)("li",{parentName:"ul"},"Java (versi\xf3n 11 o superior)")),(0,s.kt)("h2",{id:"instala-postgresql"},"Instala PostgreSQL"),(0,s.kt)("p",null,"Puedes usar ",(0,s.kt)("a",{parentName:"p",href:"https://www.postgresql.org/download/"},"https://www.postgresql.org/download/")," para descargar e instalar PosgreSQL; sin embargo, puedes utilizar el m\xe9todo de tu preferencia."),(0,s.kt)("p",null,"Una vez instalado PostgreSQL necesitas crear:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Una base de datos."),(0,s.kt)("li",{parentName:"ul"},"Un usuario y contrase\xf1a que tenga acceso a la base de datos.")),(0,s.kt)("p",null,"Puedes utilizar ",(0,s.kt)("a",{parentName:"p",href:"https://www.pgadmin.org/download/"},"PgAdmin")," para configurar tu base de datos."),(0,s.kt)("h2",{id:"instala-elasticsearch"},"Instala Elasticsearch"),(0,s.kt)("p",null,"Elasticsearch puede ser instalado con en m\xe9todo de tu preferencia; aqu\xed tienes algunas alternativas disponibles:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Si usas Windows puedes descargar el ",(0,s.kt)("a",{parentName:"li",href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/windows.html#download-msi"},"MSI")," e instalarlo."),(0,s.kt)("li",{parentName:"ul"},"Si usas CentOS, RHEL, o Fedora entonces puedes descargar e instalar ",(0,s.kt)("a",{parentName:"li",href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/rpm.html"},"RPM"),".")),(0,s.kt)("p",null,"Para ver todas las opciones disponibles para instalar Elasticseach visita la documentaci\xf3n oficial ",(0,s.kt)("a",{parentName:"p",href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/install-elasticsearch.html"},"Install Elasticsearch")),(0,s.kt)("h2",{id:"instala-keycloak"},"Instala Keycloak"),(0,s.kt)("p",null,"Keycloak puede ser instalado con en m\xe9todo de tu preferencia. Te recomendamos seguir la documentaci\xf3n oficial ",(0,s.kt)("a",{parentName:"p",href:"https://www.keycloak.org/docs/latest/server_installation/index.html"},"Server installation")),(0,s.kt)("h2",{id:"instala-searchpe"},"Instala Searchpe"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Descarga el archivo ",(0,s.kt)("strong",{parentName:"p"},"searchpe-enterprise-${version}.zip")," desde ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/project-openubl/searchpe/releases"},"Searchpe Releases"),".")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Descomprime el ",(0,s.kt)("inlineCode",{parentName:"p"},".zip")," descargado:"))),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"img",src:t(73540).Z,title:"Distribution folder tree"})),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Abre el archivo ",(0,s.kt)("inlineCode",{parentName:"li"},"config/application.properties")," y configura las conexiones a la base de datos:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"# PostgreSQL settings\nquarkus.datasource.username=db_username\nquarkus.datasource.password=db_password\nquarkus.datasource.jdbc.url=jdbc:postgresql://localhost:5432/searchpe_db\n\n# Oidc Auth\nquarkus.oidc.enabled=true\nquarkus.oidc.client-id=searchpe\nquarkus.oidc.credentials.secret=secret\nquarkus.oidc.auth-server-url=http://localhost:8080/auth/realms/openubl\n\n# Elasticsearch\nquarkus.hibernate-search-orm.elasticsearch.username=es_username\nquarkus.hibernate-search-orm.elasticsearch.password=es_password\nquarkus.hibernate-search-orm.elasticsearch.hosts=localhost:9200\nquarkus.hibernate-search-orm.elasticsearch.protocol=HTTP\nquarkus.hibernate-search-orm.elasticsearch.version=7\nquarkus.hibernate-search-orm.elasticsearch.version-check.enabled=true\nquarkus.hibernate-search-orm.schema-management.strategy=CREATE_OR_VALIDATE\nquarkus.hibernate-search-orm.automatic-indexing.synchronization.strategy=write-sync\n")),(0,s.kt)("p",null,"Reemplaza los valores de tu servidor PostgreSQL, Keycloak, y Searchpe con correctos valores."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Inicia el servidor ejecutando el archivo ",(0,s.kt)("inlineCode",{parentName:"p"},"bin/standalone.sh")," o ",(0,s.kt)("inlineCode",{parentName:"p"},"bin/standalone.bat")," dependiendo del sistema operativo que uses.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Searchpe est\xe1 funcionando en ",(0,s.kt)("a",{parentName:"p",href:"http://localhost:8180"},"http://localhost:8180")))))}d.isMDXComponent=!0},73540:function(e,a,t){a.Z=t.p+"assets/images/distribution-folder-tree-33d7bd0bed5dc9ae3b82d386ee9de4ed.png"}}]);