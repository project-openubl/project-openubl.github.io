(self.webpackChunkproject_openubl=self.webpackChunkproject_openubl||[]).push([[3091],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return l},kt:function(){return h}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(r),h=a,m=d["".concat(i,".").concat(h)]||d[h]||u[h]||o;return r?n.createElement(m,c(c({ref:t},l),{},{components:r})):n.createElement(m,c({ref:t},l))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var p=2;p<o;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},82869:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return c},metadata:function(){return s},toc:function(){return i},default:function(){return l}});var n=r(22122),a=r(19756),o=(r(67294),r(3905)),c={title:"Docker"},s={unversionedId:"searchpe/installation/docker",id:"searchpe/installation/docker",isDocsHomePage:!1,title:"Docker",description:"The fastest way to experiment with Searchpe is using Docker or Podman.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/06-searchpe/03-installation/docker.md",sourceDirName:"06-searchpe/03-installation",slug:"/searchpe/installation/docker",permalink:"/en/docs/searchpe/installation/docker",editUrl:"https://github.com/project-openubl/website/edit/master/docs/06-searchpe/03-installation/docker.md",version:"current",frontMatter:{title:"Docker"},sidebar:"tutorialSidebar",previous:{title:"Docker compose",permalink:"/en/docs/searchpe/installation/docker-compose"},next:{title:"Local",permalink:"/en/docs/searchpe/installation/so"}},i=[{value:"Start PostgreSQL",id:"start-postgresql",children:[]},{value:"Start Elasticsearch",id:"start-elasticsearch",children:[]},{value:"Start Searchpe",id:"start-searchpe",children:[]},{value:"Start Searchpe UI",id:"start-searchpe-ui",children:[]}],p={toc:i};function l(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The fastest way to experiment with ",(0,o.kt)("strong",{parentName:"p"},"Searchpe")," is using Docker or Podman."),(0,o.kt)("h2",{id:"start-postgresql"},"Start PostgreSQL"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -- network=host -p 5432:5432 -e POSTGRES_USER = db_username -e POSTGRES_PASSWORD = db_password -e POSTGRES_DB = searchpe_db postgres:13.1\n")),(0,o.kt)("h2",{id:"start-elasticsearch"},"Start Elasticsearch"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'docker run -- network=host -p 9200:9200 -p 9300:9300 -e "discovery.type = single-node " docker.elastic.co/elasticsearch/elasticsearch:7.10.2\n')),(0,o.kt)("h2",{id:"start-searchpe"},"Start Searchpe"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -- network=host -p 8180:8180 -e QUARKUS_HTTP_PORT=8180 -e QUARKUS_DATASOURCE_USERNAME = db_username -e QUARKUS_DATASOURCE_PASSWORD = db_password -e QUARKUS_DATASOURCE_JDBC_URL=jdbc:postgresql:///localhost: 5432/searchpe_db -e QUARKUS_TERNATE_SEARCH_ORM_ELASTICSEARCH_HOSTS=localhost: 9200 -e QUARKUS_HIBERNATE_SEARCH_ORM_ELASTICSEARCH_PROTOCOL=HTTP quay.io/projecttopenub/searchpe\n")),(0,o.kt)("h2",{id:"start-searchpe-ui"},"Start Searchpe UI"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -- network=host -p 8080:8080 -e SEARCHPE_API_URL=http://localhost: 8180 quay.io/projecttopenubl/searchpe-ui\n")),(0,o.kt)("p",null,"That's it, you can already open your browser on http://localhost: 8080"),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Make sure you have ports 5432, 9200, 9300, 8180, and 8080 free")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The previous example uses ",(0,o.kt)("inlineCode",{parentName:"p"},"-- network=host")," so you need to have those free ports."))))}l.isMDXComponent=!0}}]);