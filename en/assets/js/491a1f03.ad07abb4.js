(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{122:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return o})),t.d(r,"metadata",(function(){return i})),t.d(r,"toc",(function(){return u})),t.d(r,"default",(function(){return l}));var n=t(4),c=t(11),a=(t(0),t(188)),o={title:"Searchpe",description:"Consulta ruc",keywords:["consulta ruc"],hide_title:!0,slug:"/searchpe"},i={unversionedId:"searchpe/index",id:"searchpe/index",isDocsHomePage:!1,title:"Searchpe",description:"Consulta ruc",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/searchpe/index.md",sourceDirName:"searchpe",slug:"/searchpe",permalink:"/en/docs/searchpe",editUrl:"https://github.com/project-openubl/website/edit/master/docs/searchpe/index.md",version:"current",frontMatter:{title:"Searchpe",description:"Consulta ruc",keywords:["consulta ruc"],hide_title:!0,slug:"/searchpe"},sidebar:"searchpe",next:{title:"Docker",permalink:"/en/docs/searchpe/installation-docker"}},u=[{value:"Introducci\xf3n",id:"introducci\xf3n",children:[]},{value:"Caracter\xedsticas",id:"caracter\xedsticas",children:[]},{value:"Recursos",id:"recursos",children:[]},{value:"Requisitos",id:"requisitos",children:[]}],s={toc:u};function l(e){var r=e.components,t=Object(c.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"introducci\xf3n"},"Introducci\xf3n"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Searchpe")," es un microservicio que consume el ",Object(a.b)("inlineCode",{parentName:"p"},"padr\xf3n reducido")," de la SUNAT, lo procesa, almacena, y expone a trav\xe9s de REST endpoints que pueden luego ser consumidos por cualquier software."),Object(a.b)("h2",{id:"caracter\xedsticas"},"Caracter\xedsticas"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Puedes consumir los datos desde cualquier software sin importar el lenguage de programaci\xf3n."),Object(a.b)("li",{parentName:"ul"},"Ofrece mucho m\xe1s que solo la b\xfasqueda de empresas mediante el n\xfamero RUC.")),Object(a.b)("h2",{id:"recursos"},"Recursos"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://www.youtube.com/playlist?list=PLnRgWcnYy6sbngfRRE6tZZEp1cSuu7AeV"},"Videos"))),Object(a.b)("h2",{id:"requisitos"},"Requisitos"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"JDK 11"),Object(a.b)("li",{parentName:"ul"},"PostgreSQL"),Object(a.b)("li",{parentName:"ul"},"Elasticsearch")))}l.isMDXComponent=!0},188:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return m}));var n=t(0),c=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,c=function(e,r){if(null==e)return{};var t,n,c={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(c[t]=e[t]);return c}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var s=c.a.createContext({}),l=function(e){var r=c.a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=l(e.components);return c.a.createElement(s.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return c.a.createElement(c.a.Fragment,{},r)}},b=c.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(t),b=n,m=p["".concat(o,".").concat(b)]||p[b]||d[b]||a;return t?c.a.createElement(m,i(i({ref:r},s),{},{components:t})):c.a.createElement(m,i({ref:r},s))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,o=new Array(a);o[0]=b;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var s=2;s<a;s++)o[s]=t[s];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);