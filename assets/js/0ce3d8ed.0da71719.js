(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{103:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return d}));var a=t(4),o=t(11),i=(t(0),t(188)),r={title:"Pago contado/credito"},c={unversionedId:"xbuilder/ejemplos/formaPago",id:"xbuilder/ejemplos/formaPago",isDocsHomePage:!1,title:"Pago contado/credito",description:"Es posible que una boleta/factura o nota de cr\xe9dito contenga pagos al cr\xe9dito o al contado.",source:"@site/docs/xbuilder/ejemplos/formaPago.md",sourceDirName:"xbuilder/ejemplos",slug:"/xbuilder/ejemplos/formaPago",permalink:"/docs/xbuilder/ejemplos/formaPago",editUrl:"https://github.com/project-openubl/website/edit/master/docs/xbuilder/ejemplos/formaPago.md",version:"current",frontMatter:{title:"Pago contado/credito"},sidebar:"xbuilder",previous:{title:"Precio",permalink:"/docs/xbuilder/ejemplos/sellingPrice"},next:{title:"Preguntas frecuentes",permalink:"/docs/xbuilder/qa"}},l=[{value:"Venta al cr\xe9dito",id:"venta-al-cr\xe9dito",children:[{value:"Cuotas porcentuales",id:"cuotas-porcentuales",children:[]},{value:"Cuotas con monto fijo",id:"cuotas-con-monto-fijo",children:[]}]},{value:"Venta al contado",id:"venta-al-contado",children:[]},{value:"\xbfC\xf3mo se refleja en el XML?",id:"\xbfc\xf3mo-se-refleja-en-el-xml",children:[]}],u={toc:l};function d(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Es posible que una boleta/factura o nota de cr\xe9dito contenga pagos al cr\xe9dito o al contado."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Pago al cr\xe9dito"),": el cliente paga el total del importe de venta en ",Object(i.b)("inlineCode",{parentName:"li"},"N")," cuotas."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Pago al contado"),": el cliente paga el total del importe de venta inmediatamente.")),Object(i.b)("p",null,"Aplica a :"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Boletas/Facturas."),Object(i.b)("li",{parentName:"ul"},"Notas de cr\xe9dito.")),Object(i.b)("h2",{id:"venta-al-cr\xe9dito"},"Venta al cr\xe9dito"),Object(i.b)("p",null,"Si el comprobante ser\xe1 pagado en cuotas (al cr\xe9dito) entonces se debe de usar los atributos ",Object(i.b)("inlineCode",{parentName:"p"},"withCuotasDePago"),"."),Object(i.b)("h3",{id:"cuotas-porcentuales"},"Cuotas porcentuales"),Object(i.b)("p",null,"Si el el pago ser\xe1 en cuotas porcentuales de dos cuotas:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Primera cuota el 40% del importe total."),Object(i.b)("li",{parentName:"ul"},"Segunda cuota el 60%.")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java",metastring:"{27-36}","{27-36}":!0},'InvoiceInputModel input = InvoiceInputModel.Builder.anInvoiceInputModel()\n                .withSerie("F001")\n                .withNumero(1)\n                .withProveedor(ProveedorInputModel.Builder.aProveedorInputModel()\n                        .withRuc("12345678912")\n                        .withRazonSocial("Softgreen S.A.C.")\n                        .build()\n                )\n                .withCliente(ClienteInputModel.Builder.aClienteInputModel()\n                        .withNombre("Carlos Feria")\n                        .withNumeroDocumentoIdentidad("12121212121")\n                        .withTipoDocumentoIdentidad(Catalog6.RUC.toString())\n                        .build()\n                )\n                .withDetalle(Arrays.asList(\n                        DocumentLineInputModel.Builder.aDocumentLineInputModel()\n                                .withDescripcion("Item1")\n                                .withCantidad(new BigDecimal(10))\n                                .withPrecioUnitario(new BigDecimal(100))\n                                .build(),\n                        DocumentLineInputModel.Builder.aDocumentLineInputModel()\n                                .withDescripcion("Item2")\n                                .withCantidad(new BigDecimal(10))\n                                .withPrecioUnitario(new BigDecimal(100))\n                                .build())\n                )\n                .withCuotasDePago(Arrays.asList(\n                        CuotaDePagoInputModel.Builder.aFormaPagoCuotaInputModel()\n                                .withPorcentaje(new BigDecimal(40))\n                                .withFechaPago(new Date().getTime())\n                                .build(),\n                        CuotaDePagoInputModel.Builder.aFormaPagoCuotaInputModel()\n                                .withPorcentaje(new BigDecimal(60))\n                                .withFechaPago(new Date().getTime())\n                                .build()\n                ))\n                .build();\n')),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Porcentaje = 100")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"La sumatoria de los valores del porcentaje siempre debe de ser 100."))),Object(i.b)("h3",{id:"cuotas-con-monto-fijo"},"Cuotas con monto fijo"),Object(i.b)("p",null,"Si deseas poner montos fijos a cada cuota puedes hacerlo usando ",Object(i.b)("inlineCode",{parentName:"p"},"withMonto"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java",metastring:"{27-36}","{27-36}":!0},'InvoiceInputModel input = InvoiceInputModel.Builder.anInvoiceInputModel()\n                .withSerie("F001")\n                .withNumero(1)\n                .withProveedor(ProveedorInputModel.Builder.aProveedorInputModel()\n                        .withRuc("12345678912")\n                        .withRazonSocial("Softgreen S.A.C.")\n                        .build()\n                )\n                .withCliente(ClienteInputModel.Builder.aClienteInputModel()\n                        .withNombre("Carlos Feria")\n                        .withNumeroDocumentoIdentidad("12121212121")\n                        .withTipoDocumentoIdentidad(Catalog6.RUC.toString())\n                        .build()\n                )\n                .withDetalle(Arrays.asList(\n                        DocumentLineInputModel.Builder.aDocumentLineInputModel()\n                                .withDescripcion("Item1")\n                                .withCantidad(new BigDecimal(10))\n                                .withPrecioUnitario(new BigDecimal(100))\n                                .build(),\n                        DocumentLineInputModel.Builder.aDocumentLineInputModel()\n                                .withDescripcion("Item2")\n                                .withCantidad(new BigDecimal(10))\n                                .withPrecioUnitario(new BigDecimal(100))\n                                .build())\n                )\n                .withCuotasDePago(Arrays.asList(\n                        CuotaDePagoInputModel.Builder.aFormaPagoCuotaInputModel()\n                                .withMonto(new BigDecimal(2000))\n                                .withFechaPago(new Date().getTime())\n                                .build(),\n                        CuotaDePagoInputModel.Builder.aFormaPagoCuotaInputModel()\n                                .withMonto(new BigDecimal(360))\n                                .withFechaPago(new Date().getTime())\n                                .build()\n                ))\n                .build();\n')),Object(i.b)("h2",{id:"venta-al-contado"},"Venta al contado"),Object(i.b)("p",null,"Este es el m\xe9todo por defecto de ",Object(i.b)("inlineCode",{parentName:"p"},"XBuilder")," as\xed que no necesitas indicar ning\xfan campo en especial. Crea tus comprobantes como normalmente lo haces."),Object(i.b)("h2",{id:"\xbfc\xf3mo-se-refleja-en-el-xml"},"\xbfC\xf3mo se refleja en el XML?"),Object(i.b)("p",null,"La venta al cr\xe9dito/contado se refleja en el XML de la siguiente forma:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-xml"},'<cac:PaymentTerms>\n    <cbc:ID>FormaPago</cbc:ID>\n    <cbc:PaymentMeansID>Credito</cbc:PaymentMeansID>\n    <cbc:Amount currencyID="PEN">2360</cbc:Amount>\n</cac:PaymentTerms>\n<cac:PaymentTerms>\n    <cbc:ID>FormaPago</cbc:ID>\n    <cbc:PaymentMeansID>Cuota000</cbc:PaymentMeansID>\n    <cbc:Amount currencyID="PEN">2000</cbc:Amount>\n    <cbc:PaymentDueDate>2019-01-07</cbc:PaymentDueDate>\n</cac:PaymentTerms>\n<cac:PaymentTerms>\n    <cbc:ID>FormaPago</cbc:ID>\n    <cbc:PaymentMeansID>Cuota001</cbc:PaymentMeansID>\n    <cbc:Amount currencyID="PEN">360</cbc:Amount>\n    <cbc:PaymentDueDate>2019-01-08</cbc:PaymentDueDate>\n</cac:PaymentTerms>\n')))}d.isMDXComponent=!0},188:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return b}));var a=t(0),o=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),d=function(e){var n=o.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},m=function(e){var n=d(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},p=o.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=d(t),p=a,b=m["".concat(r,".").concat(p)]||m[p]||s[p]||i;return t?o.a.createElement(b,c(c({ref:n},u),{},{components:t})):o.a.createElement(b,c({ref:n},u))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,r=new Array(i);r[0]=p;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var u=2;u<i;u++)r[u]=t[u];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);