(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{132:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return l}));var n=r(4),o=r(11),a=(r(0),r(188)),i={title:"API"},c={unversionedId:"xbuilder/server/api",id:"xbuilder/server/api",isDocsHomePage:!1,title:"API",description:"For interacting with XBuilder Server you need to use the set of REST endpoints XBuilder Server exposes to you.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/xbuilder/server/api.md",sourceDirName:"xbuilder/server",slug:"/xbuilder/server/api",permalink:"/en/docs/xbuilder/server/api",editUrl:"https://github.com/project-openubl/website/edit/master/docs/xbuilder/server/api.md",version:"current",frontMatter:{title:"API"}},p=[{value:"Openapi.json",id:"openapijson",children:[]}],u={toc:p};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"For interacting with ",Object(a.b)("em",{parentName:"p"},"XBuilder Server")," you need to use the set of REST endpoints ",Object(a.b)("em",{parentName:"p"},"XBuilder Server")," exposes to you."),Object(a.b)("h2",{id:"openapijson"},"Openapi.json"),Object(a.b)("p",null,"For having access to our REST API documentation you need to have ",Object(a.b)("em",{parentName:"p"},"XBuilder Server")," running and then download our ",Object(a.b)("inlineCode",{parentName:"p"},"openapi.json")," file through:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"http://localhost:8080/openapi"},"http://localhost:8080/openapi"))),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"You need to change ",Object(a.b)("inlineCode",{parentName:"p"},"http://localhost:8080")," depending on where you started the server")),Object(a.b)("p",null,"Once you have the ",Object(a.b)("inlineCode",{parentName:"p"},"openapi.json")," you can view it through the tool of your preference; we can recommend ",Object(a.b)("a",{parentName:"p",href:"https://www.apicur.io/"},"Apicur")," or ",Object(a.b)("a",{parentName:"p",href:"https://swagger.io/"},"Swagger")," but it is up to you."))}l.isMDXComponent=!0},188:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=l(r),d=n,f=s["".concat(i,".").concat(d)]||s[d]||b[d]||a;return r?o.a.createElement(f,c(c({ref:t},u),{},{components:r})):o.a.createElement(f,c({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);