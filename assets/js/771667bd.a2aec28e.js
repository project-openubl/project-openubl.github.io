"use strict";(self.webpackChunkproject_openubl=self.webpackChunkproject_openubl||[]).push([[8218],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,u=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(r),f=o,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||u;return r?n.createElement(m,a(a({ref:t},s),{},{components:r})):n.createElement(m,a({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var u=r.length,a=new Array(u);a[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var c=2;c<u;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7298:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var n=r(7462),o=r(3366),u=(r(7294),r(3905)),a=["components"],i={title:"GetStatusCdr"},l=void 0,c={unversionedId:"xsender/billConsultService/getStatusCrd",id:"xsender/billConsultService/getStatusCrd",title:"GetStatusCdr",description:"Usado para:",source:"@site/docs/05-xsender/07-billConsultService/getStatusCrd.md",sourceDirName:"05-xsender/07-billConsultService",slug:"/xsender/billConsultService/getStatusCrd",permalink:"/docs/xsender/billConsultService/getStatusCrd",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/05-xsender/07-billConsultService/getStatusCrd.md",tags:[],version:"current",frontMatter:{title:"GetStatusCdr"},sidebar:"tutorialSidebar",previous:{title:"GetStatus",permalink:"/docs/xsender/billConsultService/getStatus"},next:{title:"getStatus",permalink:"/docs/xsender/billValidService/getStatus"}},s={},p=[{value:"Check status",id:"check-status",level:2}],d={toc:p};function f(e){var t=e.components,r=(0,o.Z)(e,a);return(0,u.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("p",null,"Usado para:"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"Obtener el CDR de un comprobante electr\xf3nico.")),(0,u.kt)("h2",{id:"check-status"},"Check status"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-java"},'ServiceConfig config = new ServiceConfig.Builder()\n    .url(URL_CONSULTA)\n    .username(USERNAME)\n    .passwod(PASSWORD)\n    .build();\n\nBillConsultBean consult = new BillConsultBean.Builder()\n    .ruc("1234567894")\n    .tipo("01")\n    .serie("F001")\n    .numero(102)\n    .build();\n\nStatusResponse response = BillConsultServiceManager.getStatusCdr(config, consult);\n')))}f.isMDXComponent=!0}}]);