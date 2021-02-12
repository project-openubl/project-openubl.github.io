(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{157:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return b}));var r=t(0),o=t.n(r);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),p=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(t),m=r,b=u["".concat(a,".").concat(m)]||u[m]||d[m]||c;return t?o.a.createElement(b,i(i({ref:n},l),{},{components:t})):o.a.createElement(b,i({ref:n},l))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,a=new Array(c);a[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var l=2;l<c;l++)a[l]=t[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},88:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return p}));var r=t(3),o=t(8),c=(t(0),t(157)),a={title:"Docker compose"},i={unversionedId:"searchpe/installation-docker-compose",id:"searchpe/installation-docker-compose",isDocsHomePage:!1,title:"Docker compose",description:"Requisitos",source:"@site/docs/searchpe/installation-docker-compose.md",slug:"/searchpe/installation-docker-compose",permalink:"/docs/searchpe/installation-docker-compose",editUrl:"https://github.com/project-openubl/website/edit/master/docs/searchpe/installation-docker-compose.md",version:"current",sidebar:"searchpe",previous:{title:"Docker",permalink:"/docs/searchpe/installation-docker"},next:{title:"Local",permalink:"/docs/searchpe/installation-so"}},s=[{value:"Requisitos",id:"requisitos",children:[]},{value:"Crea docker-compose.yml",id:"crea-docker-composeyml",children:[]},{value:"Inicia docker-compose",id:"inicia-docker-compose",children:[]}],l={toc:s};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"requisitos"},"Requisitos"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Tener instalado ",Object(c.b)("a",{parentName:"li",href:"https://docs.docker.com/compose/install/"},"Docker compose"))),Object(c.b)("h2",{id:"crea-docker-composeyml"},"Crea docker-compose.yml"),Object(c.b)("p",null,"Crea un archivo ",Object(c.b)("inlineCode",{parentName:"p"},"docker-compose.yml")," con el siguiente contenido:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-yaml"},'version: "3"\n\nservices:\n  elasticsearch:\n    image: docker.elastic.co/elasticsearch/elasticsearch:7.10.2\n    ports:\n      - 9200:9200\n      - 9300:9300\n    environment:\n      "discovery.type": single-node\n    healthcheck:\n      test: ["CMD", "curl", "-f", "http://localhost:9200/_cat/health"]\n      interval: 10s\n      timeout: 5s\n      retries: 5\n\n  searchpe-db:\n    image: postgres:13.1\n    ports:\n      - 5432:5432\n    environment:\n      POSTGRES_DB: searchpe_db\n      POSTGRES_USER: user\n      POSTGRES_PASSWORD: password\n    healthcheck:\n      test: ["CMD-SHELL", "pg_isready -U user -d searchpe_db"]\n      interval: 10s\n      timeout: 5s\n      retries: 5\n\n  searchpe:\n    image: quay.io/projectopenubl/searchpe\n    ports:\n      - 8180:8180\n    environment:\n      QUARKUS_HTTP_PORT: 8180\n      QUARKUS_DATASOURCE_USERNAME: user\n      QUARKUS_DATASOURCE_PASSWORD: password\n      QUARKUS_DATASOURCE_JDBC_URL: jdbc:postgresql://searchpe-db:5432/searchpe_db\n      QUARKUS_HIBERNATE_SEARCH_ORM_ELASTICSEARCH_USERNAME: any\n      QUARKUS_HIBERNATE_SEARCH_ORM_ELASTICSEARCH_PASSWORD: any\n      QUARKUS_HIBERNATE_SEARCH_ORM_ELASTICSEARCH_HOSTS: elasticsearch:9200\n      QUARKUS_HIBERNATE_SEARCH_ORM_ELASTICSEARCH_PROTOCOL: HTTP\n    healthcheck:\n      test: ["CMD", "curl", "-f", "http://localhost:8180/q/health"]\n      interval: 10s\n      timeout: 5s\n      retries: 5\n    depends_on:\n      elasticsearch:\n        condition: service_healthy\n      searchpe-db:\n        condition: service_healthy\n\n  searchpe-ui:\n    image: quay.io/projectopenubl/searchpe-ui\n    ports:\n      - 8080:8080\n    environment:\n      SEARCHPE_API_URL: http://searchpe:8180\n    depends_on:\n      searchpe:\n        condition: service_healthy\n')),Object(c.b)("h2",{id:"inicia-docker-compose"},"Inicia docker-compose"),Object(c.b)("p",null,"Ubica tu terminal en la carpeta donde se encuentra ",Object(c.b)("inlineCode",{parentName:"p"},"docker-compose.yml")," y ejecuta:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-shell"},"docker-compose up\n")),Object(c.b)("p",null,"Eso es todo, podr\xe1s ver el servidor funcionando en http://localhost:8080"))}p.isMDXComponent=!0}}]);