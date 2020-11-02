(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{122:function(e,n,r){"use strict";r.d(n,"a",(function(){return u})),r.d(n,"b",(function(){return f}));var t=r(0),a=r.n(t);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),d=function(e){var n=a.a.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},u=function(e){var n=d(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=d(r),b=t,f=u["".concat(i,".").concat(b)]||u[b]||s[b]||o;return r?a.a.createElement(f,l(l({ref:n},p),{},{components:r})):a.a.createElement(f,l({ref:n},p))}));function f(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,i=new Array(o);i[0]=b;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:t,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},63:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return i})),r.d(n,"metadata",(function(){return l})),r.d(n,"rightToc",(function(){return c})),r.d(n,"default",(function(){return d}));var t=r(2),a=r(7),o=(r(0),r(122)),i={title:"Installation"},l={unversionedId:"xsender/library/installation",id:"xsender/library/installation",isDocsHomePage:!1,title:"Installation",description:"XSender is a Java library for sending XML files to SUNAT; it can be found in Maven Central",source:"@site/docs/xsender/library/installation.md",slug:"/xsender/library/installation",permalink:"/docs/xsender/library/installation",editUrl:"https://github.com/project-openubl/website/edit/master/docs/xsender/library/installation.md",version:"current",sidebar:"xsender",previous:{title:"XSender",permalink:"/docs/xsender/index"},next:{title:"Getting started",permalink:"/docs/xsender/library/gettingStarted"}},c=[{value:"Maven",id:"maven",children:[]},{value:"Gradle",id:"gradle",children:[]}],p={rightToc:c};function d(e){var n=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},p,r,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"XSender is a Java library for sending XML files to SUNAT; it can be found in ",Object(o.b)("a",Object(t.a)({parentName:"p"},{href:"https://mvnrepository.com/artifact/io.github.project-openubl/xsender"}),"Maven Central")),Object(o.b)("p",null,"You can use XSender following the methods below:"),Object(o.b)("h2",{id:"maven"},"Maven"),Object(o.b)("p",null,"Open your ",Object(o.b)("inlineCode",{parentName:"p"},"pom.xml")," file and add:"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-xml"}),"<dependency>\n    <groupId>io.github.project-openubl</groupId>\n        <artifactId>xsender</artifactId>\n    <version>3.0.0.Final</version>\n</dependency>\n")),Object(o.b)("h2",{id:"gradle"},"Gradle"),Object(o.b)("p",null,"Open your ",Object(o.b)("inlineCode",{parentName:"p"},"build.gradle")," file and add:"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-java"}),"compile group: 'io.github.project-openubl', name: 'xsender', version: '3.0.0.Final'\n")))}d.isMDXComponent=!0}}]);