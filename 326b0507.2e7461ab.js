(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{122:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return f}));var n=r(0),i=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=i.a.createContext({}),c=function(e){var t=i.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=c(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=c(r),b=n,f=d["".concat(a,".").concat(b)]||d[b]||p[b]||o;return r?i.a.createElement(f,l(l({ref:t},s),{},{components:r})):i.a.createElement(f,l({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=b;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var s=2;s<o;s++)a[s]=r[s];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},182:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/xbuilder-339a45358d4f09fc77f744f96438df46.svg"},72:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return c}));var n=r(2),i=r(7),o=(r(0),r(122)),a={title:"XBuilder",hide_title:!0},l={unversionedId:"xbuilder/index",id:"xbuilder/index",isDocsHomePage:!1,title:"XBuilder",description:"img",source:"@site/docs/xbuilder/index.md",slug:"/xbuilder/index",permalink:"/docs/xbuilder/index",editUrl:"https://github.com/project-openubl/website/edit/master/docs/xbuilder/index.md",version:"current",sidebar:"xbuilder",next:{title:"Installation",permalink:"/docs/xbuilder/library/installation"}},u=[{value:"Introduction",id:"introduction",children:[]},{value:"Design principles",id:"design-principles",children:[]},{value:"How XBuilder works",id:"how-xbuilder-works",children:[]}],s={rightToc:u};function c(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("img",{alt:"img",src:r(182).default,title:"XBuilder logo"})),Object(o.b)("h2",{id:"introduction"},"Introduction"),Object(o.b)("p",null,"XBuilder is a Java library that can create XML files based on the Universal Bussiness Language (UBL)."),Object(o.b)("h2",{id:"design-principles"},"Design principles"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"You don't have to know UBL standard")," - XBuilder do not require you to know the UBL details, it exposes a set of POJOs that are, internally, transpiled into XML files that follows the UBL standards."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Math operations must be provided out of the box")," - XBuilder executes all math operations required to fill certain values in the XML files. Math operations like taxes, total amounts, discounts, etc. must be executed internally."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Apply default values when possible")," - XBuilder should fill all missing data with default values. XBuilder requires only minimal data.")),Object(o.b)("h2",{id:"how-xbuilder-works"},"How XBuilder works"),Object(o.b)("p",null,"We believe that you should provide as minimal data as possible and then allow XBuilder to do the rest for you. The input data provided by whoever uses XBuilder is not based in UBL but based in common and mainstream bussiness language."))}c.isMDXComponent=!0}}]);