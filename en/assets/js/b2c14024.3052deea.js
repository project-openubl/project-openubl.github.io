(self.webpackChunkproject_openubl=self.webpackChunkproject_openubl||[]).push([[4872],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=u(r),f=i,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||o;return r?n.createElement(m,c(c({ref:t},s),{},{components:r})):n.createElement(m,c({ref:t},s))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,c=new Array(o);c[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,c[1]=a;for(var u=2;u<o;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},82101:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return c},metadata:function(){return a},toc:function(){return l},default:function(){return s}});var n=r(22122),i=r(19756),o=(r(67294),r(3905)),c={title:"GetStatus"},a={unversionedId:"xsender/billService/getStatus",id:"xsender/billService/getStatus",isDocsHomePage:!1,title:"GetStatus",description:"Usado para verificar Tickets:",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/05-xsender/06-billService/getStatus.md",sourceDirName:"05-xsender/06-billService",slug:"/xsender/billService/getStatus",permalink:"/en/docs/xsender/billService/getStatus",editUrl:"https://github.com/project-openubl/website/edit/master/docs/05-xsender/06-billService/getStatus.md",version:"current",frontMatter:{title:"GetStatus"},sidebar:"tutorialSidebar",previous:{title:"C\xf3digos de error Sunat",permalink:"/en/docs/xsender/codigosErrorSunat"},next:{title:"SendBill",permalink:"/en/docs/xsender/billService/sendBill"}},l=[{value:"Check <em>ticket</em>",id:"check-ticket",children:[]}],u={toc:l};function s(e){var t=e.components,r=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Usado para verificar ",(0,o.kt)("em",{parentName:"p"},"Tickets"),":"),(0,o.kt)("h2",{id:"check-ticket"},"Check ",(0,o.kt)("em",{parentName:"h2"},"ticket")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'ServiceConfig config = new ServiceConfig.Builder()\n    .url("https://e-beta.sunat.gob.pe/ol-ti-itcpfegem-beta/billService")\n    .username("12345678959MODDATOS")\n    .password("MODDATOS")\n    .build();\n\nBillServiceModel result = BillServiceManager.getStatus("miTicket", config);\n')))}s.isMDXComponent=!0}}]);