(self.webpackChunkproject_openubl=self.webpackChunkproject_openubl||[]).push([[5518],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return p}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),u=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),p=i,h=d["".concat(c,".").concat(p)]||d[p]||m[p]||o;return n?a.createElement(h,r(r({ref:t},s),{},{components:n})):a.createElement(h,r({ref:t},s))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var u=2;u<o;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},35130:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return r},metadata:function(){return l},toc:function(){return c},default:function(){return s}});var a=n(22122),i=n(19756),o=(n(67294),n(3905)),r={title:"Spot payment/credit"},l={unversionedId:"xbuilder/examples/forma-pago",id:"xbuilder/examples/forma-pago",isDocsHomePage:!1,title:"Spot payment/credit",description:"A ticket/invoice or credit note may contain payments to the credit or spot.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/04-xbuilder/07-examples/09-forma-pago.md",sourceDirName:"04-xbuilder/07-examples",slug:"/xbuilder/examples/forma-pago",permalink:"/en/docs/xbuilder/examples/forma-pago",editUrl:"https://github.com/project-openubl/website/edit/master/docs/04-xbuilder/07-examples/09-forma-pago.md",version:"current",sidebarPosition:9,frontMatter:{title:"Spot payment/credit"},sidebar:"tutorialSidebar",previous:{title:"Price",permalink:"/en/docs/xbuilder/examples/selling-price"},next:{title:"Introduction",permalink:"/en/docs/xsender"}},c=[{value:"Sale to credit",id:"sale-to-credit",children:[{value:"Percentage shares",id:"percentage-shares",children:[]},{value:"Fixed-amount quotas",id:"fixed-amount-quotas",children:[]}]},{value:"Spot sales",id:"spot-sales",children:[]},{value:"How is it reflected in the XML?",id:"how-is-it-reflected-in-the-xml",children:[]}],u={toc:c};function s(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A ticket/invoice or credit note may contain payments to the credit or spot."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Payment to credit"),": the customer pays the total of the sale amount at ",(0,o.kt)("inlineCode",{parentName:"li"},"N")," shares."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Spot payment"),": the customer pays the full amount of the sale immediately.")),(0,o.kt)("p",null,"Applies to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Ballots/Invoices."),(0,o.kt)("li",{parentName:"ul"},"Credit Notes.")),(0,o.kt)("h2",{id:"sale-to-credit"},"Sale to credit"),(0,o.kt)("p",null,"If the voucher will be paid in installments (to the credit) then the attributes ",(0,o.kt)("inlineCode",{parentName:"p"},"withCuotasDePago")," must be used."),(0,o.kt)("h3",{id:"percentage-shares"},"Percentage shares"),(0,o.kt)("p",null,"If the payment is in percentage shares of two quotas:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"First quota 40% of the total amount."),(0,o.kt)("li",{parentName:"ul"},"The second quota is 60%.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:"{27-36}","{27-36}":!0},'InvoiceInputModel input = InvoiceInputModel.Builder.anInvoiceInputModel ()\n                .withString ("F001 ")\n                .withNumber (1)\n                .withProvider (ProveedorInputModel.Builder.aProveedorInputModel ()\n                        .withRuc ("12345678912")\n                        .withRazonSocial (" Softgreen S.A.C. ")\n                        .build ()\n                )\n                .withCustomer (ClientInputModel.Builder.aClientInputModel ()\n                        .withName ("Carlos Feria")\n                        .withNumberDocumentIdentity ("12121212121")\n                        .withtheDocumentIdentity (Catalog6.RUC.toString ())\n                        .build ()\n                )\n                .withDetail (Arrays.asList (\n                        DocumentLineInputModel.Builder.aDocumentLineInputModel ()\n                                .withDescription ("Item1 ")\n                                .withQuantity (new BigDecimal (10))\n                                .withPreUnitario (new BigDecimal (100))\n                                .build (),\n                        DocumentLineInputModel.Builder.aDocumentLineInputModel ()\n                                .withDescription ("Item2 ")\n                                .withQuantity (new BigDecimal (10))\n                                .withPreUnitarium (new BigDecimal (100))\n                                .build ())\n                )\n                .withCuotasDePago (Arrays.asList (\n                        CuotaDePagoInputModel.Builder.aFormaPagoCuotaInputModel ()\n                                .withPercentage (new BigDecimal (40))\n                                .withFechaPago (new Date ().getTime ())\n                                .build (),\n                        CuotaDePagoInputModel.Builder.aFormaPagoCuotaInputModel ()\n                                .withPercentage (new BigDecimal (60))\n                                .withFechaPago (new Date ().getTime ())\n                                .build ()\n                ))\n                .build ();\n')),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Percentage = 100")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The sum of the percentage values must always be 100."))),(0,o.kt)("h3",{id:"fixed-amount-quotas"},"Fixed-amount quotas"),(0,o.kt)("p",null,"If you want to put fixed amounts at each quota you can do so using ",(0,o.kt)("inlineCode",{parentName:"p"},"withMonto"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:"{27-36}","{27-36}":!0},'InvoiceInputModel input = InvoiceInputModel.Builder.anInvoiceInputModel ()\n                .withString ("F001 ")\n                .withNumber (1)\n                .withProvider (ProveedorInputModel.Builder.aProveedorInputModel ()\n                        .withRuc ("12345678912")\n                        .withRazonSocial (" Softgreen S.A.C. ")\n                        .build ()\n                )\n                .withCustomer (ClientInputModel.Builder.aClientInputModel ()\n                        .withName ("Carlos Feria")\n                        .withNumberDocumentIdentity ("12121212121")\n                        .withtheDocumentIdentity (Catalog6.RUC.toString ())\n                        .build ()\n                )\n                .withDetail (Arrays.asList (\n                        DocumentLineInputModel.Builder.aDocumentLineInputModel ()\n                                .withDescription ("Item1 ")\n                                .withQuantity (new BigDecimal (10))\n                                .withPreUnitario (new BigDecimal (100))\n                                .build (),\n                        DocumentLineInputModel.Builder.aDocumentLineInputModel ()\n                                .withDescription ("Item2 ")\n                                .withQuantity (new BigDecimal (10))\n                                .withPreUnitarium (new BigDecimal (100))\n                                .build ())\n                )\n                .withCuotasDePago (Arrays.asList (\n                        CuotaDePagoInputModel.Builder.aFormaPagoCuotaInputModel ()\n                                .withMonto (new BigDecimal (2000))\n                                .withFechaPago (new Date ().getTime ())\n                                .build (),\n                        CuotaDePagoInputModel.Builder.aFormaPagoCuotaInputModel ()\n                                .withMonto (new BigDecimal (360))\n                                .withFechaPago (new Date ().getTime ())\n                                .build ()\n                ))\n                .build ();\n')),(0,o.kt)("h2",{id:"spot-sales"},"Spot sales"),(0,o.kt)("p",null,"This is the default method of ",(0,o.kt)("inlineCode",{parentName:"p"},"XBuilder")," so you don't need to indicate any field in special. Create your vouchers as you normally do."),(0,o.kt)("h2",{id:"how-is-it-reflected-in-the-xml"},"How is it reflected in the XML?"),(0,o.kt)("p",null,"The sale to the credit/spot is reflected in the XML as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<cac:PaymentTerms>\n    <cbc:ID>FormaPago</cbc:ID>\n    <cbc:PaymentMeansID>Credito</cbc:PaymentMeansID>\n    <cbc:Amount currencyID="PEN">2360</cbc:Amount>\n</cac:PaymentTerms>\n<cac:PaymentTerms>\n    <cbc:ID>FormaPago</cbc:ID>\n    <cbc:PaymentMeansID>Cuota000</cbc:PaymentMeansID>\n    <cbc:Amount currencyID="PEN">2000</cbc:Amount>\n    <cbc:PaymentDueDate>2019-01-07</cbc:PaymentDueDate>\n</cac:PaymentTerms>\n<cac:PaymentTerms>\n    <cbc:ID>FormaPago</cbc:ID>\n    <cbc:PaymentMeansID>Cuota001</cbc:PaymentMeansID>\n    <cbc:Amount currencyID="PEN">360</cbc:Amount>\n    <cbc:PaymentDueDate>2019-01-08</cbc:PaymentDueDate>\n</cac:PaymentTerms>\n')))}s.isMDXComponent=!0}}]);