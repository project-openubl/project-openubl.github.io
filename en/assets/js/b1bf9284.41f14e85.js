(self.webpackChunkproject_openubl=self.webpackChunkproject_openubl||[]).push([[9152],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,b=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(b,i(i({ref:t},s),{},{components:n})):r.createElement(b,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},89789:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return c},default:function(){return s}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),i={title:"XBuilder 1.1.6.Final",author:"carlosthe19916",author_title:"Core Team",author_url:"https://github.com/carlosthe19916",author_image_url:"https://avatars3.githubusercontent.com/u/2582866?s=460&u=8567bb6bedfdc35830b70ce661e3c93cf3edd68a&v=4",tags:["xbuilder"]},l={permalink:"/en/blog/2021/03/11/xbuilder-forma-pago",editUrl:"https://github.com/project-openubl/website/edit/master/blog/blog/2021-03-11-xbuilder-forma-pago.md",source:"@site/i18n/en/docusaurus-plugin-content-blog/2021-03-11-xbuilder-forma-pago.md",title:"XBuilder 1.1.6.Final",description:"\xa1XBuilder 1.1.6.Final fue lanzado!",date:"2021-03-11T00:00:00.000Z",formattedDate:"March 11, 2021",tags:[{label:"xbuilder",permalink:"/en/blog/tags/xbuilder"}],readingTime:.95,truncated:!0,prevItem:{title:"XBuilder 1.1.7.Final",permalink:"/en/blog/2021/03/28/xbuilder-1.1.7.Final"},nextItem:{title:"Searchpe Beta1 released",permalink:"/en/blog/2021/01/30/searchpe-beta-released"}},c=[{value:"\xbfCuales son los cambios y cuando entrar\xe1n en vigencia?",id:"\xbfcuales-son-los-cambios-y-cuando-entrar\xe1n-en-vigencia",children:[]},{value:"\xbfQu\xe9 necesitas para cumplir con el nuevo requerimiento?",id:"\xbfqu\xe9-necesitas-para-cumplir-con-el-nuevo-requerimiento",children:[]}],u={toc:c};function s(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\xa1XBuilder 1.1.6.Final fue lanzado!"),(0,o.kt)("p",null,"Una nueva versi\xf3n de ",(0,o.kt)("inlineCode",{parentName:"p"},"XBuilder")," fue lanzada. Como siempre, las versiones anteriores son completamente compatibles con las anteriores."),(0,o.kt)("p",null,"El cambio m\xe1s importante es la introducci\xf3n de pagos al cr\xe9dito y al contado. Con este feature garantizamos el soporte a la ",(0,o.kt)("a",{parentName:"p",href:"https://cpe.sunat.gob.pe/nuevos-requisitos-para-cpe"},"Resoluci\xf3n de Superintendencia N\xb0 193-2020/SUNAT")," en el que incorporan la obligatoriedad de consignar la forma de pago."),(0,o.kt)("h3",{id:"\xbfcuales-son-los-cambios-y-cuando-entrar\xe1n-en-vigencia"},"\xbfCuales son los cambios y cuando entrar\xe1n en vigencia?"),(0,o.kt)("p",null,"A partir del 01 de abril del 2021 todas las facturas/boletas deber\xe1n de indicar el tipo de pago (contado o cr\xe9dito). Si tu XML no contiene esos campos entonces la SUNAT rechazar\xe1 esos comprobantes por lo que este es un cambio obligatorio. Para conocer m\xe1s sobre los cambios que entrar\xe1n en vigencia el pr\xf3ximo mes lee ",(0,o.kt)("a",{parentName:"p",href:"https://cpe.sunat.gob.pe/nuevos-requisitos-para-cpe"},"Resoluci\xf3n de Superintendencia N\xb0 193-2020/SUNAT"),"."),(0,o.kt)("h3",{id:"\xbfqu\xe9-necesitas-para-cumplir-con-el-nuevo-requerimiento"},"\xbfQu\xe9 necesitas para cumplir con el nuevo requerimiento?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Si ya usas ",(0,o.kt)("inlineCode",{parentName:"li"},"XBuilder")," solamente actualiza la librer\xeda a la versi\xf3n m\xe1s reciente. Si solamente emites comprobantes al contado entonces tendr\xe1s ",(0,o.kt)("inlineCode",{parentName:"li"},"Cero")," cambios en tu software ya existente. Por otro lado, si emites comprobantes al cr\xe9dito entonces utiliza nuestro ",(0,o.kt)("a",{parentName:"li",href:"https://project-openubl.github.io/docs/xbuilder/ejemplos/formaPago"},"manual")," para empezar a emitir comprobantes al cr\xe9dito.")))}s.isMDXComponent=!0}}]);