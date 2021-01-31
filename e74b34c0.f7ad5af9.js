(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{134:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return o})),r.d(t,"default",(function(){return u}));var a=r(3),n=r(8),l=(r(0),r(155)),i={title:"Installation"},c={unversionedId:"xbuilder/server/installation",id:"xbuilder/server/installation",isDocsHomePage:!1,title:"Installation",description:"Docker",source:"@site/docs/xbuilder/server/installation.md",slug:"/xbuilder/server/installation",permalink:"/docs/xbuilder/server/installation",editUrl:"https://github.com/project-openubl/website/edit/master/docs/xbuilder/server/installation.md",version:"current"},o=[{value:"Docker",id:"docker",children:[]},{value:"JVM",id:"jvm",children:[]},{value:"Linux",id:"linux",children:[]},{value:"Windows",id:"windows",children:[]},{value:"Java Application Server",id:"java-application-server",children:[]}],p={toc:o};function u(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(l.a)("wrapper",Object(a.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(l.a)("h2",{id:"docker"},"Docker"),Object(l.a)("p",null,"The easiest way of starting ",Object(l.a)("em",{parentName:"p"},"XBuilder Server")," is using Docker."),Object(l.a)("pre",null,Object(l.a)("code",Object(a.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"docker run -p 8080:8080 docker.io/projectopenubl/xbuilder-server\n")),Object(l.a)("p",null,"Then open ",Object(l.a)("a",Object(a.a)({parentName:"p"},{href:"http://localhost:8080"}),"http://localhost:8080")," and verify that the server is running."),Object(l.a)("h2",{id:"jvm"},"JVM"),Object(l.a)("p",null,Object(l.a)("em",{parentName:"p"},"XBuilder Server")," can be executed as a common ",Object(l.a)("em",{parentName:"p"},".jar")," application."),Object(l.a)("ul",null,Object(l.a)("li",{parentName:"ul"},"Download ",Object(l.a)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/project-openubl/xbuilder-server/releases"}),"xbuilder-server-myVersion-jvm.tgz")," and uncompress it."),Object(l.a)("li",{parentName:"ul"},"Open a terminal and move to the folder where you uncompressed the downloaded file. Execute:")),Object(l.a)("pre",null,Object(l.a)("code",Object(a.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"java -jar xbuilder-*-runner.jar\n")),Object(l.a)("p",null,"Then open ",Object(l.a)("a",Object(a.a)({parentName:"p"},{href:"http://localhost:8080"}),"http://localhost:8080")," and verify that the server is running."),Object(l.a)("h2",{id:"linux"},"Linux"),Object(l.a)("p",null,Object(l.a)("em",{parentName:"p"},"XBuilder Server")," distributes a native Linux executable."),Object(l.a)("ul",null,Object(l.a)("li",{parentName:"ul"},"Download ",Object(l.a)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/project-openubl/xbuilder-server/releases"}),"xbuilder-server-myVersion-linux"),"."),Object(l.a)("li",{parentName:"ul"},"Open a terminal and move to the folder where you downloaded the file. Execute:")),Object(l.a)("pre",null,Object(l.a)("code",Object(a.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"./xbuilder-server-*\n")),Object(l.a)("h2",{id:"windows"},"Windows"),Object(l.a)("p",null,Object(l.a)("em",{parentName:"p"},"XBuilder Server")," distributes a native Windows executable."),Object(l.a)("ul",null,Object(l.a)("li",{parentName:"ul"},"Download ",Object(l.a)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/project-openubl/xbuilder-server/releases"}),"xbuilder-server-myVersion-win64.exe"),"."),Object(l.a)("li",{parentName:"ul"},"Open a terminal and move to the folder where you downloaded the file. Execute:")),Object(l.a)("pre",null,Object(l.a)("code",Object(a.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"start xbuilder-server-*\n")),Object(l.a)("h2",{id:"java-application-server"},"Java Application Server"),Object(l.a)("p",null,Object(l.a)("em",{parentName:"p"},"XBuilder Server")," distributes a ",Object(l.a)("inlineCode",{parentName:"p"},".war")," file that can be deployed in any Java Application Server like Wildfly, Glasfish, Weblogic, etc.."),Object(l.a)("ul",null,Object(l.a)("li",{parentName:"ul"},"Download ",Object(l.a)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/project-openubl/xbuilder-server/releases"}),"xbuilder-server-myVersion.war"),"."),Object(l.a)("li",{parentName:"ul"},"Deploy the war file depending on your Application Server.")))}u.isMDXComponent=!0},155:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var a=r(0),n=r.n(a);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=n.a.createContext({}),u=function(e){var t=n.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),b=u(r),d=a,m=b["".concat(i,".").concat(d)]||b[d]||s[d]||l;return r?n.a.createElement(m,c(c({ref:t},p),{},{components:r})):n.a.createElement(m,c({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=b;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<l;p++)i[p]=r[p];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);