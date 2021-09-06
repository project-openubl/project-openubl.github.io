(self.webpackChunkproject_openubl=self.webpackChunkproject_openubl||[]).push([[3723],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),l=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,c=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(t),m=o,h=d["".concat(i,".").concat(m)]||d[m]||u[m]||c;return t?r.createElement(h,a(a({ref:n},p),{},{components:t})):r.createElement(h,a({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var c=t.length,a=new Array(c);a[0]=d;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<c;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},89113:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var r=t(22122),o=t(19756),c=(t(67294),t(3905)),a=["components"],s={title:"Docker compose"},i=void 0,l={unversionedId:"searchpe/installation/docker-compose",id:"searchpe/installation/docker-compose",isDocsHomePage:!1,title:"Docker compose",description:"Requirements",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/06-searchpe/03-installation/docker-compose.md",sourceDirName:"06-searchpe/03-installation",slug:"/searchpe/installation/docker-compose",permalink:"/en/docs/searchpe/installation/docker-compose",editUrl:"https://github.com/project-openubl/website/edit/master/docs/06-searchpe/03-installation/docker-compose.md",tags:[],version:"current",frontMatter:{title:"Docker compose"},sidebar:"tutorialSidebar",previous:{title:"Use",permalink:"/en/docs/searchpe/usage"},next:{title:"Docker",permalink:"/en/docs/searchpe/installation/docker"}},p=[{value:"Requirements",id:"requirements",children:[]},{value:"Creates docker-compose.yml",id:"creates-docker-composeyml",children:[]},{value:"Starts docker-compose",id:"starts-docker-compose",children:[]}],u={toc:p};function d(e){var n=e.components,t=(0,o.Z)(e,a);return(0,c.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"requirements"},"Requirements"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"Have ",(0,c.kt)("a",{parentName:"li",href:"https://docs.docker.com/compose/install/"},"Docker installed"))),(0,c.kt)("h2",{id:"creates-docker-composeyml"},"Creates docker-compose.yml"),(0,c.kt)("p",null,"Creates a ",(0,c.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file with the following content:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-yaml"},'version: "3"\n\nservices:\n  elasticsearch:\n    image: docker.elastic.co/elasticsearch/elasticsearch:7.10.2\n    ports:\n      - 9200:9200\n      - 9300:9300\n    environment:\n      "discovery.type": single-node\n    healthcheck:\n      test: ["CMD", "curl", "-f", "http://localhost:9200/_cat/health"]\n      interval: 10s\n      timeout: 5s\n      retries: 5\n\n  searchpe-db:\n    image: postgres:13.1\n    ports:\n      - 5432:5432\n    environment:\n      POSTGRES_DB: searchpe_db\n      POSTGRES_USER: user\n      POSTGRES_PASSWORD: password\n    healthcheck:\n      test: ["CMD-SHELL", "pg_isready -U user -d searchpe_db"]\n      interval: 10s\n      timeout: 5s\n      retries: 5\n\n  searchpe:\n    image: quay.io/projectopenubl/searchpe\n    ports:\n      - 8180:8180\n    environment:\n      QUARKUS_HTTP_PORT: 8180\n      QUARKUS_DATASOURCE_USERNAME: user\n      QUARKUS_DATASOURCE_PASSWORD: password\n      QUARKUS_DATASOURCE_JDBC_URL: jdbc:postgresql://searchpe-db:5432/searchpe_db\n      QUARKUS_HIBERNATE_SEARCH_ORM_ELASTICSEARCH_USERNAME: any\n      QUARKUS_HIBERNATE_SEARCH_ORM_ELASTICSEARCH_PASSWORD: any\n      QUARKUS_HIBERNATE_SEARCH_ORM_ELASTICSEARCH_HOSTS: elasticsearch:9200\n      QUARKUS_HIBERNATE_SEARCH_ORM_ELASTICSEARCH_PROTOCOL: HTTP\n    healthcheck:\n      test: ["CMD", "curl", "-f", "http://localhost:8180/q/health"]\n      interval: 10s\n      timeout: 5s\n      retries: 5\n    depends_on:\n      elasticsearch:\n        condition: service_healthy\n      searchpe-db:\n        condition: service_healthy\n\n  searchpe-ui:\n    image: quay.io/projectopenubl/searchpe-ui\n    ports:\n      - 8080:8080\n    environment:\n      SEARCHPE_API_URL: http://searchpe:8180\n    depends_on:\n      searchpe:\n        condition: service_healthy\n')),(0,c.kt)("h2",{id:"starts-docker-compose"},"Starts docker-compose"),(0,c.kt)("p",null,"Locate your terminal in the folder where ",(0,c.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," is located and runs:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose up\n")),(0,c.kt)("p",null,"That's all, you'll see the server running at http://localhost: 8080"))}d.isMDXComponent=!0}}]);