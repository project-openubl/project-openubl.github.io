(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{175:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return u}));var a=t(4),r=t(11),i=(t(0),t(188)),l={title:"XBuilder 1.1.9.Final",author:"carlosthe19916",author_title:"Core Team",author_url:"https://github.com/carlosthe19916",author_image_url:"https://avatars3.githubusercontent.com/u/2582866?s=460&u=8567bb6bedfdc35830b70ce661e3c93cf3edd68a&v=4",tags:["xbuilder"]},o={permalink:"/blog/2021/04/06/xbuilder-1.1.9.Final",editUrl:"https://github.com/project-openubl/website/edit/master/blog/blog/2021-04-06-xbuilder-1.1.9.Final.md",source:"@site/blog/2021-04-06-xbuilder-1.1.9.Final.md",title:"XBuilder 1.1.9.Final",description:"\xa1XBuilder 1.1.9.Final fue lanzado!",date:"2021-04-06T00:00:00.000Z",formattedDate:"April 6, 2021",tags:[{label:"xbuilder",permalink:"/blog/tags/xbuilder"}],readingTime:2.32,truncated:!0,prevItem:{title:"Searchpe 2.0.1",permalink:"/blog/2021/04/14/searchpe-2.0.1"},nextItem:{title:"XBuilder 1.1.7.Final",permalink:"/blog/2021/03/28/xbuilder-1.1.7.Final"}},c=[{value:"\xbfQu\xe9 incluye esta versi\xf3n?",id:"\xbfqu\xe9-incluye-esta-versi\xf3n",children:[{value:"Error a resolver",id:"error-a-resolver",children:[]},{value:"Definici\xf3n del XML afectado",id:"definici\xf3n-del-xml-afectado",children:[]},{value:"Validaci\xf3n SUNAT",id:"validaci\xf3n-sunat",children:[]}]},{value:"\xbfC\xf3mo defino mi c\xf3digo de local si no quiero usar el valor por defecto <code>0000</code>?",id:"\xbfc\xf3mo-defino-mi-c\xf3digo-de-local-si-no-quiero-usar-el-valor-por-defecto-0000",children:[]}],d={toc:c};function u(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"\xa1XBuilder 1.1.9.Final fue lanzado!"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Esta versi\xf3n exige cero cambios en tu software."),Object(i.b)("li",{parentName:"ul"},"Si tienes el c\xf3digo de error ",Object(i.b)("inlineCode",{parentName:"li"},"El XML no contiene el tag o no existe informaci\xf3n del c\xf3digo de local anexo del emisor")," entonces esta es una actualizaci\xf3n recomendada para ti.")),Object(i.b)("h2",{id:"\xbfqu\xe9-incluye-esta-versi\xf3n"},"\xbfQu\xe9 incluye esta versi\xf3n?"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Si el usuario no define el ",Object(i.b)("strong",{parentName:"li"},"C\xf3digo del domicilio fiscal o de local anexo del emisor")," entonces XBuilder utilizar\xe1 por defecto el c\xf3digo ",Object(i.b)("inlineCode",{parentName:"li"},"0000")," tal y como se especifica en las nuevas reglas de validaci\xf3n de la SUNAT."),Object(i.b)("li",{parentName:"ul"},"Si el usuario no quiere usar el c\xf3digo por defecto ",Object(i.b)("inlineCode",{parentName:"li"},"0000")," entonces este puede definir su valor al crear el XML.")),Object(i.b)("h3",{id:"error-a-resolver"},"Error a resolver"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"3030 - El XML no contiene el tag o no existe informaci\xf3n del c\xf3digo de local anexo del emisor.")),Object(i.b)("h3",{id:"definici\xf3n-del-xml-afectado"},"Definici\xf3n del XML afectado"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-xml"},"<cac:AccountingSupplierParty>\n    <cac:Party>\n        <cac:PartyLegalEntity>\n            <cac:RegistrationAddress>\n                <cbc:AddressTypeCode>0000</cbc:AddressTypeCode>\n            </cac:RegistrationAddress>\n        </cac:PartyLegalEntity>\n    </cac:Party>\n</cac:AccountingSupplierParty>\n")),Object(i.b)("h3",{id:"validaci\xf3n-sunat"},"Validaci\xf3n SUNAT"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Si Serie del documento no inicia con n\xfamero, no existe el Tag UBL o es vac\xedo"),Object(i.b)("th",{parentName:"tr",align:null},"ERROR"),Object(i.b)("th",{parentName:"tr",align:null},"3030"),Object(i.b)("th",{parentName:"tr",align:null},"El XML no contiene el tag o no existe informaci\xf3n del c\xf3digo de local anexo del emisor"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Si Serie del documento inicia con n\xfamero, no existe el Tag UBL o es vac\xedo"),Object(i.b)("td",{parentName:"tr",align:null},"OBSERV"),Object(i.b)("td",{parentName:"tr",align:null},"4198"),Object(i.b)("td",{parentName:"tr",align:null},"El XML no contiene el tag o no existe informaci\xf3n del c\xf3digo de local anexo del emisor")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Si Serie del documento no inicia con n\xfamero y el Tag UBL es diferente de '0000', el valor del Tag UBL no est\xe1 en el listado"),Object(i.b)("td",{parentName:"tr",align:null},"ERROR"),Object(i.b)("td",{parentName:"tr",align:null},"3239"),Object(i.b)("td",{parentName:"tr",align:null},"El c\xf3digo de local anexo consignado no se encuentra declarado en el RUC")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Si el Tag UBL existe y es diferente de vac\xedo y es diferente de '0000' y Serie del documento inicia con n\xfamero, el valor del Tag UBL no est\xe1 en el listado"),Object(i.b)("td",{parentName:"tr",align:null},"OBSERV"),Object(i.b)("td",{parentName:"tr",align:null},"4199"),Object(i.b)("td",{parentName:"tr",align:null},"El c\xf3digo de local anexo consignado no se encuentra declarado en el RUC")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Si el Tag UBL existe y es diferente de vac\xedo, el valor del Tag es diferente a num\xe9rico de 4 d\xedgitos."),Object(i.b)("td",{parentName:"tr",align:null},"OBSERV"),Object(i.b)("td",{parentName:"tr",align:null},"4242"),Object(i.b)("td",{parentName:"tr",align:null},"El dato ingresado como local anexo no cumple con el formato establecido")))),Object(i.b)("h2",{id:"\xbfc\xf3mo-defino-mi-c\xf3digo-de-local-si-no-quiero-usar-el-valor-por-defecto-0000"},"\xbfC\xf3mo defino mi c\xf3digo de local si no quiero usar el valor por defecto ",Object(i.b)("inlineCode",{parentName:"h2"},"0000"),"?"),Object(i.b)("p",null,"El c\xf3digo ",Object(i.b)("inlineCode",{parentName:"p"},"0000")," ser\xe1 usado solamente si el usuario no define su valor; si quieres usar un valor definido por ti entonces puedes usar:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java",metastring:"{8}","{8}":!0},'InvoiceInputModel input = InvoiceInputModel.Builder.anInvoiceInputModel()\n        .withSerie("F001")\n        .withNumero(1)\n        .withProveedor(ProveedorInputModel.Builder.aProveedorInputModel()\n                .withRuc("12345678912")\n                .withRazonSocial("Project OpenUBL S.A.C.")\n                .withDireccion(DireccionInputModel.Builder.aDireccionInputModel()\n                        .withCodigoLocal("1234")\n                        .build()\n                )\n                .build()\n        )\n        .withCliente(ClienteInputModel.Builder.aClienteInputModel()\n                .withNombre("Carlos Feria")\n                .withNumeroDocumentoIdentidad("12121212121")\n                .withTipoDocumentoIdentidad(Catalog6.RUC.toString())\n                .build()\n        )\n        .withDetalle(Arrays.asList(\n                DocumentLineInputModel.Builder.aDocumentLineInputModel()\n                        .withDescripcion("Item1")\n                        .withCantidad(new BigDecimal(10))\n                        .withPrecioUnitario(new BigDecimal(100))\n                        .build(),\n                DocumentLineInputModel.Builder.aDocumentLineInputModel()\n                        .withDescripcion("Item2")\n                        .withCantidad(new BigDecimal(10))\n                        .withPrecioUnitario(new BigDecimal(100))\n                        .build())\n        )\n        .build();\n')))}u.isMDXComponent=!0},188:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=r.a.createContext({}),u=function(e){var n=r.a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},b=function(e){var n=u(e.components);return r.a.createElement(d.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},p=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),b=u(t),p=a,m=b["".concat(l,".").concat(p)]||b[p]||s[p]||i;return t?r.a.createElement(m,o(o({ref:n},d),{},{components:t})):r.a.createElement(m,o({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=p;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var d=2;d<i;d++)l[d]=t[d];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);