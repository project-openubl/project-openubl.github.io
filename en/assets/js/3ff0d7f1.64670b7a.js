(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{100:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return o})),t.d(r,"metadata",(function(){return i})),t.d(r,"toc",(function(){return s})),t.d(r,"default",(function(){return l}));var n=t(3),a=t(8),c=(t(0),t(168)),o={title:"Docker"},i={unversionedId:"searchpe/installation-docker",id:"searchpe/installation-docker",isDocsHomePage:!1,title:"Docker",description:"La forma m\xe1s r\xe1pida de experimentar con Searchpe es usando Docker o Podman.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/searchpe/installation-docker.md",slug:"/searchpe/installation-docker",permalink:"/en/docs/searchpe/installation-docker",editUrl:"https://github.com/project-openubl/website/edit/master/docs/searchpe/installation-docker.md",version:"current",sidebar:"searchpe",previous:{title:"Searchpe",permalink:"/en/docs/searchpe"},next:{title:"Docker compose",permalink:"/en/docs/searchpe/installation-docker-compose"}},s=[{value:"Iniciar PostgreSQL",id:"iniciar-postgresql",children:[]},{value:"Iniciar Elasticsearch",id:"iniciar-elasticsearch",children:[]},{value:"Iniciar Searchpe",id:"iniciar-searchpe",children:[]},{value:"Iniciar Searchpe UI",id:"iniciar-searchpe-ui",children:[]}],p={toc:s};function l(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},p,t,{components:r,mdxType:"MDXLayout"}),Object(c.b)("p",null,"La forma m\xe1s r\xe1pida de experimentar con ",Object(c.b)("strong",{parentName:"p"},"Searchpe")," es usando Docker o Podman."),Object(c.b)("h2",{id:"iniciar-postgresql"},"Iniciar PostgreSQL"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"docker run --network=host -p 5432:5432 -e POSTGRES_USER=db_username -e POSTGRES_PASSWORD=db_password -e POSTGRES_DB=searchpe_db postgres:13.1\n")),Object(c.b)("h2",{id:"iniciar-elasticsearch"},"Iniciar Elasticsearch"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},'docker run --network=host -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" docker.elastic.co/elasticsearch/elasticsearch:7.10.2\n')),Object(c.b)("h2",{id:"iniciar-searchpe"},"Iniciar Searchpe"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"docker run --network=host -p 8180:8180 -e QUARKUS_HTTP_PORT=8180 -e QUARKUS_DATASOURCE_USERNAME=db_username -e QUARKUS_DATASOURCE_PASSWORD=db_password -e QUARKUS_DATASOURCE_JDBC_URL=jdbc:postgresql://localhost:5432/searchpe_db -e QUARKUS_HIBERNATE_SEARCH_ORM_ELASTICSEARCH_USERNAME=any -e QUARKUS_HIBERNATE_SEARCH_ORM_ELASTICSEARCH_PASSWORD=any -e QUARKUS_HIBERNATE_SEARCH_ORM_ELASTICSEARCH_HOSTS=localhost:9200 -e QUARKUS_HIBERNATE_SEARCH_ORM_ELASTICSEARCH_PROTOCOL=HTTP quay.io/projectopenubl/searchpe\n")),Object(c.b)("h2",{id:"iniciar-searchpe-ui"},"Iniciar Searchpe UI"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"docker run --network=host -p 8080:8080 -e SEARCHPE_API_URL=http://localhost:8180 quay.io/projectopenubl/searchpe-ui\n")),Object(c.b)("p",null,"Eso es todo, ya puedes abrir tu browser en http://localhost:8080"),Object(c.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(c.b)("div",{parentName:"div",className:"admonition-heading"},Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",{parentName:"h5",className:"admonition-icon"},Object(c.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(c.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Aseg\xfarate de tener los puertos 5432, 9200, 9300, 8180, y 8080 libres")),Object(c.b)("div",{parentName:"div",className:"admonition-content"},Object(c.b)("p",{parentName:"div"},"El ejemplo anterior usa ",Object(c.b)("inlineCode",{parentName:"p"},"--network=host")," por lo que necesitas tener esos puertos libres."))))}l.isMDXComponent=!0},168:function(e,r,t){"use strict";t.d(r,"a",(function(){return u})),t.d(r,"b",(function(){return m}));var n=t(0),a=t.n(n);function c(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){c(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),l=function(e){var r=a.a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=l(e.components);return a.a.createElement(p.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},b=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(t),b=n,m=u["".concat(o,".").concat(b)]||u[b]||d[b]||c;return t?a.a.createElement(m,i(i({ref:r},p),{},{components:t})):a.a.createElement(m,i({ref:r},p))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var c=t.length,o=new Array(c);o[0]=b;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var p=2;p<c;p++)o[p]=t[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);