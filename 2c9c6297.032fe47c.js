(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{121:function(e,r,n){"use strict";n.d(r,"a",(function(){return u})),n.d(r,"b",(function(){return b}));var t=n(0),a=n.n(t);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var r=a.a.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},u=function(e){var r=l(e.components);return a.a.createElement(p.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},m=a.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=t,b=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return n?a.a.createElement(b,c(c({ref:r},p),{},{components:n})):a.a.createElement(b,c({ref:r},p))}));function b(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:t,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},72:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return i})),n.d(r,"metadata",(function(){return c})),n.d(r,"rightToc",(function(){return s})),n.d(r,"default",(function(){return l}));var t=n(2),a=n(7),o=(n(0),n(121)),i={title:"Criterios de dise\xf1o"},c={unversionedId:"design-principles",id:"design-principles",isDocsHomePage:!1,title:"Criterios de dise\xf1o",description:'- Usa solo lo que necesites - Project OpenUBL est\xe1 dise\xf1ado para no obligarte a "todo o nada"; es decir, puedes seleccionar que funcionalidad espec\xedfica necesitas y usar solamente esa funcionalidad.',source:"@site/docs/design-principles.md",slug:"/design-principles",permalink:"/docs/design-principles",editUrl:"https://github.com/project-openubl/website/edit/master/docs/design-principles.md",version:"current",sidebar:"docs",previous:{title:"Introducci\xf3n",permalink:"/docs/"}},s=[],p={rightToc:s};function l(e){var r=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},p,n,{components:r,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Usa solo lo que necesites"),' - Project OpenUBL est\xe1 dise\xf1ado para no obligarte a "todo o nada"; es decir, puedes seleccionar que funcionalidad espec\xedfica necesitas y usar solamente esa funcionalidad.')),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"F\xe1cil integraci\xf3n")," - Podr\xe1s empezar las herramientas ofrecidas por Project OpenUBL f\xe1cilmente ya que no tendr\xe1s que aprender todo lo ya implementado dentro de las herramientas.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Bajo acoplamiento al lenguaje de programaci\xf3n")," - Project OpenUBL ofrece librerias en Java; sin embargo, tambi\xe9n ofrece un conjunto de microservicios para que puedas usarlos sin importar el lenguaje de programaci\xf3n que uses."))))}l.isMDXComponent=!0}}]);