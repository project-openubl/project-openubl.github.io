(self.webpackChunkproject_openubl=self.webpackChunkproject_openubl||[]).push([[5371],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),u=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),f=o,m=d["".concat(a,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(m,c(c({ref:t},l),{},{components:n})):r.createElement(m,c({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=d;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s.mdxType="string"==typeof e?e:o,c[1]=s;for(var u=2;u<i;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},26750:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return s},toc:function(){return a},default:function(){return l}});var r=n(22122),o=n(19756),i=(n(67294),n(3905)),c={title:"Introduction",description:"Send your XMLs (electronic vouchers) to the SUNAT through your Web Services",keywords:["send xml to SUNAT","web service SUNAT","obtaining CDR from SUNAT","consult SUNAT ticket","electronic invoicing"],image:"img/xsender.svg",slug:"/xsender"},s={unversionedId:"xsender/introduction",id:"xsender/introduction",isDocsHomePage:!1,title:"Introduction",description:"Send your XMLs (electronic vouchers) to the SUNAT through your Web Services",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/05-xsender/01-introduction.md",sourceDirName:"05-xsender",slug:"/xsender",permalink:"/en/docs/xsender",editUrl:"https://github.com/project-openubl/website/edit/master/docs/05-xsender/01-introduction.md",version:"current",sidebarPosition:1,frontMatter:{title:"Introduction",description:"Send your XMLs (electronic vouchers) to the SUNAT through your Web Services",keywords:["send xml to SUNAT","web service SUNAT","obtaining CDR from SUNAT","consult SUNAT ticket","electronic invoicing"],image:"img/xsender.svg",slug:"/xsender"},sidebar:"tutorialSidebar",previous:{title:"Spot payment/credit",permalink:"/en/docs/xbuilder/examples/forma-pago"},next:{title:"Installation",permalink:"/en/docs/xsender/installation"}},a=[{value:"Design principles",id:"design-principles",children:[]}],u={toc:a};function l(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"XSender is a library that serves to send files, XML based on UBL (Universal Bussiness Language), to SUNAT (Peru)."),(0,i.kt)("h2",{id:"design-principles"},"Design principles"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Non-required SOAP Knowledge"),".-XSender exposes a set of Java classes/methods to make it easy to interact with SOAP services."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Easy to integrate"),".-Only with a few steps will you be able to integrate XSender into your own software.")))}l.isMDXComponent=!0}}]);