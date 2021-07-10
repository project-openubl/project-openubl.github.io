(self.webpackChunkproject_openubl=self.webpackChunkproject_openubl||[]).push([[8292],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=i,b=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(b,o(o({ref:t},u),{},{components:n})):r.createElement(b,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},75455:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var r=n(22122),i=n(19756),a=(n(67294),n(3905)),o=["components"],l={title:"Introduction",description:"Creates UBL-based XMLs (electronic vouchers) as required by the SUNAT",keywords:["create xml","ubl","ubl 2.1","Sunat invoice","electronic invoicing"],image:"img/xbuilder.svg",slug:"/xbuilder"},c=void 0,s={unversionedId:"xbuilder/introduction",id:"xbuilder/introduction",isDocsHomePage:!1,title:"Introduction",description:"Creates UBL-based XMLs (electronic vouchers) as required by the SUNAT",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/04-xbuilder/01-introduction.md",sourceDirName:"04-xbuilder",slug:"/xbuilder",permalink:"/en/docs/xbuilder",editUrl:"https://github.com/project-openubl/website/edit/master/docs/04-xbuilder/01-introduction.md",version:"current",sidebarPosition:1,frontMatter:{title:"Introduction",description:"Creates UBL-based XMLs (electronic vouchers) as required by the SUNAT",keywords:["create xml","ubl","ubl 2.1","Sunat invoice","electronic invoicing"],image:"img/xbuilder.svg",slug:"/xbuilder"},sidebar:"tutorialSidebar",previous:{title:"Contribute",permalink:"/en/docs/contributing"},next:{title:"Installation",permalink:"/en/docs/xbuilder/installation"}},u=[{value:"Design principles",id:"design-principles",children:[]},{value:"Supported documents",id:"supported-documents",children:[]}],p={toc:u};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"XBuilder is a Java library that can create and sign Universal Bussiness Language (UBL)-based XMLs according to the standards set by the SUNAT."),(0,a.kt)("h2",{id:"design-principles"},"Design principles"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Do not want knowledge of the standard UBL")," - XBuilder exposes a set of POJOs that, internally, are transformed into XMLs files following the standards and specifications of UBL."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Mathematical Calculations are automatically made")," - XBuilder runs all the required operations to generate certain values within the XML files, for example: taxes, totals, discounts, etc."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Apply default values whenever possible")," -XBuilder populates information not mirrored by the user using default values. XBuilder always requires minimal information.")),(0,a.kt)("h2",{id:"supported-documents"},"Supported documents"),(0,a.kt)("ul",{className:"contains-task-list"},(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Boleta (InvoiceType)"),(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Factura (InvoiceType)"),(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Nota de cr\xe9dito (CreditNoteType)"),(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Nota de d\xe9bito (DebitNoteType)"),(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Baja (VoidedDocumentType)"),(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Resumen diario (SummaryDocumentType)"),(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Percepci\xf3n (PerceptionType)"),(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Retenci\xf3n (RetentionType)"),(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Gu\xeda de remisi\xf3n (DespatchDocumentType)")))}d.isMDXComponent=!0}}]);