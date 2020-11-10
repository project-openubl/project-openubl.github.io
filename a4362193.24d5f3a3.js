(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{123:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},b=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),b=p(r),s=n,m=b["".concat(o,".").concat(s)]||b[s]||d[s]||l;return r?a.a.createElement(m,i(i({ref:t},u),{},{components:r})):a.a.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=s;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},88:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(2),a=r(7),l=(r(0),r(123)),o={title:"Create XML"},i={unversionedId:"xbuilder/library/createXml",id:"xbuilder/library/createXml",isDocsHomePage:!1,title:"Create XML",description:"Before creating an XML you need to decide which type of XML you will create; there are multiple types of XML files like:",source:"@site/docs/xbuilder/library/createXml.md",slug:"/xbuilder/library/createXml",permalink:"/docs/xbuilder/library/createXml",editUrl:"https://github.com/project-openubl/website/edit/master/docs/xbuilder/library/createXml.md",version:"current",sidebar:"xbuilder",previous:{title:"Concepts",permalink:"/docs/xbuilder/library/concepts"},next:{title:"Sign XML",permalink:"/docs/xbuilder/library/signXml"}},c=[{value:"A fully working example",id:"a-fully-working-example",children:[]}],u={rightToc:c};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Before creating an XML you need to decide which type of XML you will create; there are multiple types of XML files like:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Invoices"),Object(l.b)("li",{parentName:"ul"},"Credit notes"),Object(l.b)("li",{parentName:"ul"},"Debit notes, etc.")),Object(l.b)("p",null,"Once you decided which type of document you want to create:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Create your input POJO"),Object(l.b)("li",{parentName:"ul"},"Send your POJO to ",Object(l.b)("inlineCode",{parentName:"li"},"DocumentManager"))),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"// Create Invoice\nDocumentWrapper<InvoiceOutputModel> result = DocumentManager.createXML(input, config, systemClock);\n\nInvoiceOutputModel output = result.getOutput(); // XML Var values\nString xml = result.getXml(); // XML content\n")),Object(l.b)("h2",{id:"a-fully-working-example"},"A fully working example"),Object(l.b)("p",null,"A fully working example of how to create an XML file is located in:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"./gettingStarted"}),"gettingStarted"))))}p.isMDXComponent=!0}}]);