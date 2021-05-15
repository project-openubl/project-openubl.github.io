(self.webpackChunkproject_openubl=self.webpackChunkproject_openubl||[]).push([[6086],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return p},kt:function(){return h}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),c=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(a),h=n,m=d["".concat(i,".").concat(h)]||d[h]||u[h]||s;return a?r.createElement(m,l(l({ref:t},p),{},{components:a})):r.createElement(m,l({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,l=new Array(s);l[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var c=2;c<s;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},80880:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return l},metadata:function(){return o},toc:function(){return i},default:function(){return p}});var r=a(22122),n=a(19756),s=(a(67294),a(3905)),l={title:"Local"},o={unversionedId:"searchpe/installation/so",id:"searchpe/installation/so",isDocsHomePage:!1,title:"Local",description:"If you want to install Searchpe on your computer's operating system, follow the following steps:",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/06-searchpe/03-installation/so.md",sourceDirName:"06-searchpe/03-installation",slug:"/searchpe/installation/so",permalink:"/en/docs/searchpe/installation/so",editUrl:"https://github.com/project-openubl/website/edit/master/docs/06-searchpe/03-installation/so.md",version:"current",frontMatter:{title:"Local"},sidebar:"tutorialSidebar",previous:{title:"Docker",permalink:"/en/docs/searchpe/installation/docker"}},i=[{value:"Installs PostgreSQL",id:"installs-postgresql",children:[]},{value:"Installs Elasticsearch",id:"installs-elasticsearch",children:[]},{value:"Installs Searchpe",id:"installs-searchpe",children:[]},{value:"Installs the Searchpe UI",id:"installs-the-searchpe-ui",children:[]}],c={toc:i};function p(e){var t=e.components,l=(0,n.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,r.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"If you want to install ",(0,s.kt)("strong",{parentName:"p"},"Searchpe")," on your computer's operating system, follow the following steps:"),(0,s.kt)("h2",{id:"installs-postgresql"},"Installs PostgreSQL"),(0,s.kt)("p",null,"You can use ",(0,s.kt)("a",{parentName:"p",href:"https://www.postgresql.org/download/"},"https://www.postgresql.org/download/")," to download and install PosgreSQL; however, you can use the method of your preference."),(0,s.kt)("p",null,"Once you have installed PostgreSQL you need to create:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"A database."),(0,s.kt)("li",{parentName:"ul"},"A user and password that has access to the database.")),(0,s.kt)("p",null,"You can use ",(0,s.kt)("a",{parentName:"p",href:"https://www.pgadmin.org/download/"},"PgAdmin")," to configure your database."),(0,s.kt)("h2",{id:"installs-elasticsearch"},"Installs Elasticsearch"),(0,s.kt)("p",null,"Elasticsearch can be installed with a method of your preference; here are some alternatives available:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"If you use Windows you can download the ",(0,s.kt)("a",{parentName:"li",href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/windows.html#download-msi"},"MSI")," and install it."),(0,s.kt)("li",{parentName:"ul"},"If you use CentOS, RHEL, or Fedora then you can download and install ",(0,s.kt)("a",{parentName:"li",href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/rpm.html"},"RPM"),".")),(0,s.kt)("p",null,"For all the options available to install Elasticseach visit the official documentation ",(0,s.kt)("a",{parentName:"p",href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/install-elasticsearch.html"},"Install Elastisearch")),(0,s.kt)("h2",{id:"installs-searchpe"},"Installs Searchpe"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Download ",(0,s.kt)("strong",{parentName:"li"},"Searchpe")," from ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/project-openubl/searchpe/releases"},"Searchpe Releases"),".")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"img",src:a(31272).Z,title:"Seachpe releases"})),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Unzip the downloaded ",(0,s.kt)("inlineCode",{parentName:"li"},".zip"),":")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"img",src:a(73540).Z,title:"Distribution folder tree"})),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Opens the file ",(0,s.kt)("inlineCode",{parentName:"li"},"config/application.properties")," and configures the connections to the database and Elasticsearch:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"# PostgreSQL settings\nquarkus.datasource.username=db_username\nquarkus.datasource.password=db_password\nquarkus.datasource.jdbc.url=jdbc:postgresql://localhost: 5432/searchpe_db\n\n# Elasticsearch settings\nquarkus.hibernate-search-orm.elasticsearch.username=es_username\nquarkus.hibernate-search-orm.elasticsearch.password=es_password\nquarkus.hibernate-search-orm.elasticsearch.hosts=localhost: 9200\nquarkus.hibernate-search-orm.elasticsearch.protocol=HTTP\nquarkus.hibernate-search-orm.elasticsearch.version=7\n")),(0,s.kt)("p",null,"Replaces ",(0,s.kt)("inlineCode",{parentName:"p"},"db_username"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"db_password"),", and ",(0,s.kt)("inlineCode",{parentName:"p"},"searchpe_db")," with the database data you created."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Starts the server by running the file ",(0,s.kt)("inlineCode",{parentName:"li"},"bin/standalone.bat"),".")),(0,s.kt)("h2",{id:"installs-the-searchpe-ui"},"Installs the Searchpe UI"),(0,s.kt)("p",null,"Download and install ",(0,s.kt)("strong",{parentName:"p"},"Searchpe UI")," from ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/project-openubl/searchpe-ui/releases"},"Searchpe UI Releases")," and select the correct file depending on your operating system."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"img",src:a(81042).Z,title:"Seachpe UI releases"})),(0,s.kt)("p",null,"That's all, you'll have Searchpe running on your computer."))}p.isMDXComponent=!0},73540:function(e,t,a){"use strict";t.Z=a.p+"assets/images/distribution-folder-tree-f25be2245edc3e1317ddbc0eed1fa1c8.png"},31272:function(e,t,a){"use strict";t.Z=a.p+"assets/images/searchpe-releases-f110ebb82872b10d30def4e3188f4d51.png"},81042:function(e,t,a){"use strict";t.Z=a.p+"assets/images/searchpe-ui-releases-2a033ce4a56ad61ba90ec65a97a79926.png"}}]);