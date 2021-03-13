(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{125:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return o})),t.d(r,"metadata",(function(){return c})),t.d(r,"toc",(function(){return u})),t.d(r,"default",(function(){return s}));var n=t(3),a=t(8),i=(t(0),t(162)),o={title:"XBuilder",description:"Create and sign XML files based on UBL",keywords:["xbuilder"]},c={unversionedId:"java-library-xbuilder",id:"java-library-xbuilder",isDocsHomePage:!1,title:"XBuilder",description:"Create and sign XML files based on UBL",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/java-library-xbuilder.md",slug:"/java-library-xbuilder",permalink:"/en/docs/java-library-xbuilder",editUrl:"https://github.com/project-openubl/website/edit/master/docs/java-library-xbuilder.md",version:"current",sidebar:"docs",previous:{title:"Contribute",permalink:"/en/docs/contributing"},next:{title:"XSender",permalink:"/en/docs/java-library-xsender"}},u=[{value:"Requirements",id:"requirements",children:[]},{value:"Resources",id:"resources",children:[]},{value:"Where can I use XBuilder?",id:"where-can-i-use-xbuilder",children:[]}],l={toc:u};function s(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Java library use for:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Create XMLs."),Object(i.b)("li",{parentName:"ul"},"Sign XMLs.")),Object(i.b)("h2",{id:"requirements"},"Requirements"),Object(i.b)("p",null,"The only requirement is that you application use ",Object(i.b)("strong",{parentName:"p"},"JDK8")," or superior."),Object(i.b)("h2",{id:"resources"},"Resources"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/en/docs/xbuilder"},"Documentation")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://www.youtube.com/playlist?list=PLnRgWcnYy6sbiF96-ZEP7OLzFfDLrFvdU"},"Videos"))),Object(i.b)("h2",{id:"where-can-i-use-xbuilder"},"Where can I use XBuilder?"),Object(i.b)("p",null,"Some of the most common integration are:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Desktop apps."),Object(i.b)("li",{parentName:"ul"},"Web apps made on JavaEE and Jakarta EE. For instance Wildfly, JBoss, Glashfish, Tomcat, etc."),Object(i.b)("li",{parentName:"ul"},"Web apps made on Spring and Spring Boot.")))}s.isMDXComponent=!0},162:function(e,r,t){"use strict";t.d(r,"a",(function(){return b})),t.d(r,"b",(function(){return m}));var n=t(0),a=t.n(n);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),s=function(e){var r=a.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},b=function(e){var r=s(e.components);return a.a.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},d=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),b=s(t),d=n,m=b["".concat(o,".").concat(d)]||b[d]||p[d]||i;return t?a.a.createElement(m,c(c({ref:r},l),{},{components:t})):a.a.createElement(m,c({ref:r},l))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=d;var c={};for(var u in r)hasOwnProperty.call(r,u)&&(c[u]=r[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<i;l++)o[l]=t[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);