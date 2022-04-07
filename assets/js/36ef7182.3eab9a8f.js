"use strict";(self.webpackChunkproject_openubl=self.webpackChunkproject_openubl||[]).push([[9690],{3905:function(e,r,n){n.d(r,{Zo:function(){return l},kt:function(){return f}});var t=n(7294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=t.createContext({}),u=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},l=function(e){var r=u(e.components);return t.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(n),f=o,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||i;return n?t.createElement(m,a(a({ref:r},l),{},{components:n})):t.createElement(m,a({ref:r},l))}));function f(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},675:function(e,r,n){n.r(r),n.d(r,{assets:function(){return l},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var t=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],c={title:"Introducci\xf3n",description:"Envia tus XMLs (comprobantes electr\xf3nicos) a la SUNAT a trav\xe9s de sus Web Services",keywords:["enviar xml a SUNAT","web service SUNAT","obtener CDR de SUNAT","consultar ticket SUNAT","facturaci\xf3n electr\xf3nica"],image:"img/xsender.svg",slug:"/xsender"},s=void 0,u={unversionedId:"xsender/introduction",id:"xsender/introduction",title:"Introducci\xf3n",description:"Envia tus XMLs (comprobantes electr\xf3nicos) a la SUNAT a trav\xe9s de sus Web Services",source:"@site/docs/05-xsender/01-introduction.md",sourceDirName:"05-xsender",slug:"/xsender",permalink:"/docs/xsender",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/05-xsender/01-introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Introducci\xf3n",description:"Envia tus XMLs (comprobantes electr\xf3nicos) a la SUNAT a trav\xe9s de sus Web Services",keywords:["enviar xml a SUNAT","web service SUNAT","obtener CDR de SUNAT","consultar ticket SUNAT","facturaci\xf3n electr\xf3nica"],image:"img/xsender.svg",slug:"/xsender"},sidebar:"tutorialSidebar",previous:{title:"Anticipos",permalink:"/docs/xbuilder/examples/anticipos"},next:{title:"Instalaci\xf3n",permalink:"/docs/xsender/installation"}},l={},p=[{value:"Principios de dise\xf1o",id:"principios-de-dise\xf1o",level:2}],d={toc:p};function f(e){var r=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,t.Z)({},d,n,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"XSender es una librer\xeda que sirve para enviar archivos, XML basados en UBL (Universal Bussiness Language), a la SUNAT (Per\xfa)."),(0,i.kt)("h2",{id:"principios-de-dise\xf1o"},"Principios de dise\xf1o"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Conocimiento de SOAP no requerido"),".- XSender expone un conjunto de clases/m\xe9todos Java para hacerte f\xe1cil la interacci\xf3n con servicios SOAP."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"F\xe1cil de integrar"),".- Solamente con unos pocos pasos podr\xe1s integrar XSender a tu propio software.")))}f.isMDXComponent=!0}}]);