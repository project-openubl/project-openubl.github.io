(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{166:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return m}));var n=t(0),a=t.n(n);function l(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){l(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),b=function(e){var r=a.a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=b(e.components);return a.a.createElement(u.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},d=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=b(t),d=n,m=p["".concat(i,".").concat(d)]||p[d]||s[d]||l;return t?a.a.createElement(m,o(o({ref:r},u),{},{components:t})):a.a.createElement(m,o({ref:r},u))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var l=t.length,i=new Array(l);i[0]=d;var o={};for(var c in r)hasOwnProperty.call(r,c)&&(o[c]=r[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var u=2;u<l;u++)i[u]=t[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},79:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return o})),t.d(r,"toc",(function(){return c})),t.d(r,"default",(function(){return b}));var n=t(3),a=t(8),l=(t(0),t(166)),i={title:"Installation"},o={unversionedId:"xbuilder/server/installation",id:"xbuilder/server/installation",isDocsHomePage:!1,title:"Installation",description:"Docker",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/xbuilder/server/installation.md",slug:"/xbuilder/server/installation",permalink:"/en/docs/xbuilder/server/installation",editUrl:"https://github.com/project-openubl/website/edit/master/docs/xbuilder/server/installation.md",version:"current"},c=[{value:"Docker",id:"docker",children:[]},{value:"JVM",id:"jvm",children:[]},{value:"Linux",id:"linux",children:[]},{value:"Windows",id:"windows",children:[]},{value:"Java Application Server",id:"java-application-server",children:[]}],u={toc:c};function b(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},u,t,{components:r,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"docker"},"Docker"),Object(l.b)("p",null,"The easiest way of starting ",Object(l.b)("em",{parentName:"p"},"XBuilder Server")," is using Docker."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"docker run -p 8080:8080 docker.io/projectopenubl/xbuilder-server\n")),Object(l.b)("p",null,"Then open ",Object(l.b)("a",{parentName:"p",href:"http://localhost:8080"},"http://localhost:8080")," and verify that the server is running."),Object(l.b)("h2",{id:"jvm"},"JVM"),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"XBuilder Server")," can be executed as a common ",Object(l.b)("em",{parentName:"p"},".jar")," application."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Download ",Object(l.b)("a",{parentName:"li",href:"https://github.com/project-openubl/xbuilder-server/releases"},"xbuilder-server-myVersion-jvm.tgz")," and uncompress it."),Object(l.b)("li",{parentName:"ul"},"Open a terminal and move to the folder where you uncompressed the downloaded file. Execute:")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"java -jar xbuilder-*-runner.jar\n")),Object(l.b)("p",null,"Then open ",Object(l.b)("a",{parentName:"p",href:"http://localhost:8080"},"http://localhost:8080")," and verify that the server is running."),Object(l.b)("h2",{id:"linux"},"Linux"),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"XBuilder Server")," distributes a native Linux executable."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Download ",Object(l.b)("a",{parentName:"li",href:"https://github.com/project-openubl/xbuilder-server/releases"},"xbuilder-server-myVersion-linux"),"."),Object(l.b)("li",{parentName:"ul"},"Open a terminal and move to the folder where you downloaded the file. Execute:")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"./xbuilder-server-*\n")),Object(l.b)("h2",{id:"windows"},"Windows"),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"XBuilder Server")," distributes a native Windows executable."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Download ",Object(l.b)("a",{parentName:"li",href:"https://github.com/project-openubl/xbuilder-server/releases"},"xbuilder-server-myVersion-win64.exe"),"."),Object(l.b)("li",{parentName:"ul"},"Open a terminal and move to the folder where you downloaded the file. Execute:")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"start xbuilder-server-*\n")),Object(l.b)("h2",{id:"java-application-server"},"Java Application Server"),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"XBuilder Server")," distributes a ",Object(l.b)("inlineCode",{parentName:"p"},".war")," file that can be deployed in any Java Application Server like Wildfly, Glasfish, Weblogic, etc.."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Download ",Object(l.b)("a",{parentName:"li",href:"https://github.com/project-openubl/xbuilder-server/releases"},"xbuilder-server-myVersion.war"),"."),Object(l.b)("li",{parentName:"ul"},"Deploy the war file depending on your Application Server.")))}b.isMDXComponent=!0}}]);