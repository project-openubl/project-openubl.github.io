"use strict";(self.webpackChunkproject_openubl=self.webpackChunkproject_openubl||[]).push([[367],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),s=c(n),m=i,b=s["".concat(u,".").concat(m)]||s[m]||d[m]||o;return n?r.createElement(b,l(l({ref:t},p),{},{components:n})):r.createElement(b,l({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=s;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},9530:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return s}});var r=n(83117),i=n(80102),o=(n(67294),n(3905)),l=["components"],a={title:"ICB"},u=void 0,c={unversionedId:"xbuilder/examples/icb",id:"xbuilder/examples/icb",isDocsHomePage:!1,title:"ICB",description:"Inpost to Consumer Plastic Bags (BCI) is a tax applied to each product or service sold and may be present in ballot, invoice, credit note, or debit note.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/04-xbuilder/07-examples/07-icb.md",sourceDirName:"04-xbuilder/07-examples",slug:"/xbuilder/examples/icb",permalink:"/en/docs/xbuilder/examples/icb",editUrl:"https://github.com/project-openubl/website/edit/master/docs/04-xbuilder/07-examples/07-icb.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"ICB"},sidebar:"tutorialSidebar",previous:{title:"IGV",permalink:"/en/docs/xbuilder/examples/igv"},next:{title:"Price",permalink:"/en/docs/xbuilder/examples/selling-price"}},p=[{value:"Value of <em>ICB</em>",id:"value-of-icb",children:[],level:2},{value:"Default value of <em>ICB</em>",id:"default-value-of-icb",children:[],level:2},{value:"Examples",id:"examples",children:[{value:"<em>Invoice (bolet/invoice)</em>",id:"invoice-boletinvoice",children:[],level:3},{value:"<em>CreditNote (credit note)</em>",id:"creditnote-credit-note",children:[],level:3},{value:"<em>DebitNote (debit note)</em>",id:"debitnote-debit-note",children:[],level:3}],level:2}],d={toc:p};function s(e){var t=e.components,n=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Inpost to Consumer Plastic Bags (BCI)")," is a tax applied to each product or service sold and may be present in ",(0,o.kt)("strong",{parentName:"p"},"ballot, invoice, credit note, or debit note"),"."),(0,o.kt)("p",null,"The current value of ",(0,o.kt)("em",{parentName:"p"},"ICB")," is ",(0,o.kt)("em",{parentName:"p"},"0.3 Soles")," but this value can change over time. You can configure the value of the BCI in ",(0,o.kt)("a",{parentName:"p",href:"../concepts#config"},"Basic concepts"),"."),(0,o.kt)("h2",{id:"value-of-icb"},"Value of ",(0,o.kt)("em",{parentName:"h2"},"ICB")),(0,o.kt)("p",null,"The value of ",(0,o.kt)("em",{parentName:"p"},"ICB")," is defined in ",(0,o.kt)("inlineCode",{parentName:"p"},"Config"),". You can read sonbre ",(0,o.kt)("inlineCode",{parentName:"p"},"Config")," in ",(0,o.kt)("a",{parentName:"p",href:"../concepts#config"},"Basic concepts"),"."),(0,o.kt)("h2",{id:"default-value-of-icb"},"Default value of ",(0,o.kt)("em",{parentName:"h2"},"ICB")),(0,o.kt)("p",null,"By default the ICB is not applied to products or services sold."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("h3",{id:"invoice-boletinvoice"},(0,o.kt)("em",{parentName:"h3"},"Invoice (bolet/invoice)")),(0,o.kt)("p",null,"Use field ",(0,o.kt)("inlineCode",{parentName:"p"},"icb")," in each item:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:"{4,7}","{4,7}":!0},"InvoiceInputModel input = InvoiceInputModel.Builder.anInvoiceInputModel()\n        .withDetalle(Arrays.asList(\n                DocumentLineInputModel.Builder.aDocumentLineInputModel ()\n                        .withIcb (true)\n                        .build (),\n                DocumentLineInputModel.Builder.aDocumentLineInputModel()\n                        .withIcb(true)\n                        .build())\n        )\n        .build();\n")),(0,o.kt)("h3",{id:"creditnote-credit-note"},(0,o.kt)("em",{parentName:"h3"},"CreditNote (credit note)")),(0,o.kt)("p",null,"Use field ",(0,o.kt)("inlineCode",{parentName:"p"},"icb")," in each item:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:"{4,7}","{4,7}":!0},"CreditNoteInputModel pojo = CreditNoteInputModel.Builder.aCreditNoteInputModel()\n        .withDetalle(Arrays.asList(\n                DocumentLineInputModel.Builder.aDocumentLineInputModel()\n                        .withIcb(true)\n                        .build(),\n                DocumentLineInputModel.Builder.aDocumentLineInputModel()\n                        .withIcb(true)\n                        .build())\n        )\n        .build();\n")),(0,o.kt)("h3",{id:"debitnote-debit-note"},(0,o.kt)("em",{parentName:"h3"},"DebitNote (debit note)")),(0,o.kt)("p",null,"Use field ",(0,o.kt)("inlineCode",{parentName:"p"},"icb")," in each item:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:"{4,7}","{4,7}":!0},"DebitNoteInputModel pojo = DebitNoteInputModel.Builder.aDebitNoteInputModel()\n        .withDetalle(Arrays.asList(\n                DocumentLineInputModel.Builder.aDocumentLineInputModel()\n                        .withIcb(true)\n                        .build(),\n                DocumentLineInputModel.Builder.aDocumentLineInputModel()\n                        .withIcb(true)\n                        .build())\n        )\n        .build();\n")))}s.isMDXComponent=!0}}]);