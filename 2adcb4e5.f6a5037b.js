(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{122:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},b=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),b=p(r),s=n,f=b["".concat(o,".").concat(s)]||b[s]||d[s]||i;return r?a.a.createElement(f,l(l({ref:t},u),{},{components:r})):a.a.createElement(f,l({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},71:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(2),a=r(7),i=(r(0),r(122)),o={title:"Installation"},l={unversionedId:"xbuilder/library/installation",id:"xbuilder/library/installation",isDocsHomePage:!1,title:"Installation",description:"XBuilder can be found in Maven Central",source:"@site/docs/xbuilder/library/installation.md",slug:"/xbuilder/library/installation",permalink:"/docs/xbuilder/library/installation",editUrl:"https://github.com/project-openubl/website/edit/master/docs/xbuilder/library/installation.md",version:"current",sidebar:"xbuilder",previous:{title:"Docs Index",permalink:"/docs/xbuilder/index"},next:{title:"Example",permalink:"/docs/xbuilder/library/gettingStarted"}},c=[{value:"Maven",id:"maven",children:[]},{value:"Gradle",id:"gradle",children:[]}],u={rightToc:c};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"XBuilder can be found in ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://mvnrepository.com/artifact/io.github.project-openubl/xbuilder"}),"Maven Central")),Object(i.b)("h2",{id:"maven"},"Maven"),Object(i.b)("p",null,"Open your ",Object(i.b)("inlineCode",{parentName:"p"},"pom.xml")," file and add:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-xml"}),"<dependency>\n    <groupId>io.github.project-openubl</groupId>\n        <artifactId>xbuilder</artifactId>\n    <version>1.1.0.Final</version>\n</dependency>\n")),Object(i.b)("h2",{id:"gradle"},"Gradle"),Object(i.b)("p",null,"Open your ",Object(i.b)("inlineCode",{parentName:"p"},"build.gradle")," file and add:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"compile group: 'io.github.project-openubl', name: 'xbuilder', version: '1.1.0.Final'\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Check ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://mvnrepository.com/artifact/io.github.project-openubl/xbuilder"}),"Maven Central")," for checking which is the latest version of XBuilder.")))}p.isMDXComponent=!0}}]);