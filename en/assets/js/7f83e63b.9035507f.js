(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{111:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return i})),n.d(r,"metadata",(function(){return c})),n.d(r,"toc",(function(){return u})),n.d(r,"default",(function(){return l}));var t=n(3),a=n(8),o=(n(0),n(166)),i={title:"XSender",description:"Send XMLs to SUNAT with XSender",keywords:["xsender"]},c={unversionedId:"java-library-xsender",id:"java-library-xsender",isDocsHomePage:!1,title:"XSender",description:"Send XMLs to SUNAT with XSender",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/java-library-xsender.md",slug:"/java-library-xsender",permalink:"/en/docs/java-library-xsender",editUrl:"https://github.com/project-openubl/website/edit/master/docs/java-library-xsender.md",version:"current",sidebar:"docs",previous:{title:"XBuilder",permalink:"/en/docs/java-library-xbuilder"},next:{title:"Searchpe",permalink:"/en/docs/consulta-ruc"}},u=[{value:"Requirements",id:"requirements",children:[]},{value:"Resources",id:"resources",children:[]},{value:"Where can I use XSender?",id:"where-can-i-use-xsender",children:[]}],s={toc:u};function l(e){var r=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},s,n,{components:r,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"XSender")," is a Java library that is used for sending your electronic billing documents (XML files) to SUNAT."),Object(o.b)("h2",{id:"requirements"},"Requirements"),Object(o.b)("p",null,"The only requirement is that you application use ",Object(o.b)("strong",{parentName:"p"},"JDK8")," or superior."),Object(o.b)("h2",{id:"resources"},"Resources"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/en/docs/xsender"},"Documentation"))),Object(o.b)("h2",{id:"where-can-i-use-xsender"},"Where can I use XSender?"),Object(o.b)("p",null,"Some of the most common integration are:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Desktop apps."),Object(o.b)("li",{parentName:"ul"},"Web apps made on JavaEE and Jakarta EE. For instance Wildfly, JBoss, Glashfish, Tomcat, etc."),Object(o.b)("li",{parentName:"ul"},"Web apps made on Spring and Spring Boot.")))}l.isMDXComponent=!0},166:function(e,r,n){"use strict";n.d(r,"a",(function(){return p})),n.d(r,"b",(function(){return m}));var t=n(0),a=n.n(t);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function u(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),l=function(e){var r=a.a.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},p=function(e){var r=l(e.components);return a.a.createElement(s.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},b=a.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,o=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(n),b=t,m=p["".concat(i,".").concat(b)]||p[b]||d[b]||o;return n?a.a.createElement(m,c(c({ref:r},s),{},{components:n})):a.a.createElement(m,c({ref:r},s))}));function m(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var u in r)hasOwnProperty.call(r,u)&&(c[u]=r[u]);c.originalType=e,c.mdxType="string"==typeof e?e:t,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);