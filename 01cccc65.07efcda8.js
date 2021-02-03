(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{143:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),b=r,m=s["".concat(i,".").concat(b)]||s[b]||d[b]||o;return n?a.a.createElement(m,c(c({ref:t},u),{},{components:n})):a.a.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},201:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/concepts-equation-72f76f9c8fa662735cb81335cb29f3aa.svg"},66:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(7),o=(n(0),n(143)),i={title:"Conceptos b\xe1sicos",description:"XBuilder conceptos b\xe1sicos"},c={unversionedId:"xbuilder/concepts",id:"xbuilder/concepts",isDocsHomePage:!1,title:"Conceptos b\xe1sicos",description:"XBuilder conceptos b\xe1sicos",source:"@site/docs/xbuilder/concepts.md",slug:"/xbuilder/concepts",permalink:"/docs/xbuilder/concepts",editUrl:"https://github.com/project-openubl/website/edit/master/docs/xbuilder/concepts.md",version:"current",sidebar:"xbuilder",previous:{title:"Instalaci\xf3n",permalink:"/docs/xbuilder/installation"},next:{title:"Crear XML",permalink:"/docs/xbuilder/createXml"}},l=[{value:"POJO",id:"pojo",children:[]},{value:"Config",id:"config",children:[]},{value:"SystemClock",id:"systemclock",children:[]}],u={rightToc:l};function p(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"XBuilder crea archivos XMLs basados en 3 objetos:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"POJO"),"- El objeto que contiene los datos del XML a crear."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Config")," - Incluye informaci\xf3n como los valores de impuestos y valores por defecto a aplicar."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"System clock")," - Reloj que genera la hora actual del sistema, incluyendo la zona horaria.")),Object(o.b)("p",null,Object(o.b)("img",{alt:"img",src:n(201).default,title:"XBuilder concept equation"})),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"DocumentWrapper<InvoiceOutputModel> result = DocumentManager.createXML(pojo, config, systemClock);\n")),Object(o.b)("h2",{id:"pojo"},"POJO"),Object(o.b)("p",null,"El POJO es la informaci\xf3n de entrada que ser\xe1 usada para crear el archivo XML. El POJO contiene informaci\xf3n como serie, n\xfamero, precios, detalle del comprobante, etc."),Object(o.b)("p",null,"Dependiendo del tipo de XML que quieras crear deber\xe1s usar un POJO distinto. Por ejemplo:"),Object(o.b)("p",null,"Si quieres crear una factura (Invoice):"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"InvoiceInputModel pojo = InvoiceInputModel.Builder.anInvoiceInputModel().build();\n")),Object(o.b)("p",null,"Si quieres crear una nota de c\u0155edito (Credit note):"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"CreditNoteInputModel pojo = CreditNoteInputModel.Builder.aCreditNoteInputModel()\n")),Object(o.b)("p",null,"Te familiarizar\xe1s con los POJOs a medida que vayas usando XBuilder."),Object(o.b)("h2",{id:"config"},"Config"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Config")," es una interfaz que debe de ser implementada por cada software que usa ",Object(o.b)("inlineCode",{parentName:"p"},"XBuilder"),". En ella definir\xe1z valores como el valor del IGV, ICB, etc. Por ejemplo:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'public class MyCustomConfig implements Config {\n\n    private BigDecimal igv;\n    private BigDecimal ivap;\n    private String defaultMoneda;\n    private String defaultUnidadMedida;\n    private Catalog9 defaultTipoNotaCredito;\n    private Catalog10 defaultTipoNotaDebito;\n    private BigDecimal defaultIcb;\n    private Catalog7 defaultTipoIgv;\n\n    public DefaultConfig() {\n        this.defaultMoneda = "PEN";\n        this.defaultUnidadMedida = "NIU";\n        this.igv = new BigDecimal("0.18");\n        this.ivap = new BigDecimal("0.04");\n        this.defaultIcb = new BigDecimal("0.2");\n        ...\n    }\n}\n')),Object(o.b)("h2",{id:"systemclock"},"SystemClock"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"SystemClock")," es una interfaz que debe de ser implementada por cada software que usa ",Object(o.b)("inlineCode",{parentName:"p"},"XBuilder")," por ejemplo:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),' public class MyCustomClock implements SystemClock {\n    @Override\n    public TimeZone getTimeZone() {\n        return TimeZone.getTimeZone("America/Lima");\n    }\n\n    @Override\n    public Calendar getCalendarInstance() {\n        return Calendar.getInstance();\n    }\n}\n')))}p.isMDXComponent=!0}}]);