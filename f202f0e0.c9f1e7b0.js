(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{110:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return o})),t.d(r,"metadata",(function(){return l})),t.d(r,"rightToc",(function(){return s})),t.d(r,"default",(function(){return c}));var n=t(2),i=t(7),a=(t(0),t(121)),o={title:"Introduction"},l={unversionedId:"xbuilder/server/introduction",id:"xbuilder/server/introduction",isDocsHomePage:!1,title:"Introduction",description:"XBuilder Server is a Microservice that can create XML files based on the Universal Bussiness Language (UBL). It is based on XBuilder",source:"@site/docs/xbuilder/server/introduction.md",slug:"/xbuilder/server/introduction",permalink:"/docs/xbuilder/server/introduction",editUrl:"https://github.com/project-openubl/website/edit/master/docs/xbuilder/server/introduction.md",version:"current",sidebar:"xbuilder",previous:{title:"Selling price",permalink:"/docs/xbuilder/library/peru/sellingPrice"},next:{title:"Installation",permalink:"/docs/xbuilder/server/installation"}},s=[{value:"Features",id:"features",children:[]},{value:"Design principles",id:"design-principles",children:[]},{value:"How XBuilder works",id:"how-xbuilder-works",children:[]}],u={rightToc:s};function c(e){var r=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"XBuilder Server")," is a Microservice that can create XML files based on the ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Universal_Business_Language"}),"Universal Bussiness Language")," (UBL). It is based on ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://project-openubl.github.io/xbuilder-docs/"}),"XBuilder")),Object(a.b)("h2",{id:"features"},"Features"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"XBuilder Server")," is based on ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://project-openubl.github.io/xbuilder-docs/"}),"XBuilder")," so it offers the same core funtionalities. However, ",Object(a.b)("em",{parentName:"p"},"XBuilder Server")," offers additional features that allows you to deploy it across different cloud platforms or bare-metals."),Object(a.b)("h2",{id:"design-principles"},"Design principles"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Easy integration")," - ",Object(a.b)("em",{parentName:"li"},"XBuilder Server")," allows easy integration with any third party software regardless of their programing language or architecture."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Hybrid")," - ",Object(a.b)("em",{parentName:"li"},"XBuilder Server")," can be deployed in mutiple cloud platforms or bare-metals. You can go to the cloud and use container images and/or go as serveless. If the cloud if not for you then you can always deploy ",Object(a.b)("em",{parentName:"li"},"XBuilder Server")," in your own datacenter."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"XBuilder Sync")," - ",Object(a.b)("em",{parentName:"li"},"XBuilder Server")," supports 100% of features of XBuilder so whenever a new feature or bug is solved into XBuilder you will have it for free.")),Object(a.b)("h2",{id:"how-xbuilder-works"},"How XBuilder works"),Object(a.b)("p",null,"We believe that you should provide as minimal data as possible and then allow XBuilder to do the rest for you. The input data provided by whoever uses XBuilder is not based in UBL but based in common and mainstream bussiness language."))}c.isMDXComponent=!0},121:function(e,r,t){"use strict";t.d(r,"a",(function(){return d})),t.d(r,"b",(function(){return f}));var n=t(0),i=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=i.a.createContext({}),c=function(e){var r=i.a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},d=function(e){var r=c(e.components);return i.a.createElement(u.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return i.a.createElement(i.a.Fragment,{},r)}},b=i.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(t),b=n,f=d["".concat(o,".").concat(b)]||d[b]||p[b]||a;return t?i.a.createElement(f,l(l({ref:r},u),{},{components:t})):i.a.createElement(f,l({ref:r},u))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,o=new Array(a);o[0]=b;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var u=2;u<a;u++)o[u]=t[u];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);