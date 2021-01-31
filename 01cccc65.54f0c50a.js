(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{155:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=r.a.createContext({}),p=function(e){var t=r.a.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(a),m=n,b=d["".concat(i,".").concat(m)]||d[m]||s[m]||o;return a?r.a.createElement(b,c(c({ref:t},u),{},{components:a})):r.a.createElement(b,c({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var u=2;u<o;u++)i[u]=a[u];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},211:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/concepts-equation-72f76f9c8fa662735cb81335cb29f3aa.svg"},78:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(8),o=(a(0),a(155)),i={title:"Conceptos b\xe1sicos",description:"XBuilder conceptos b\xe1sicos"},c={unversionedId:"xbuilder/concepts",id:"xbuilder/concepts",isDocsHomePage:!1,title:"Conceptos b\xe1sicos",description:"XBuilder conceptos b\xe1sicos",source:"@site/docs/xbuilder/concepts.md",slug:"/xbuilder/concepts",permalink:"/docs/xbuilder/concepts",editUrl:"https://github.com/project-openubl/website/edit/master/docs/xbuilder/concepts.md",version:"current",sidebar:"xbuilder",previous:{title:"Instalaci\xf3n",permalink:"/docs/xbuilder/installation"},next:{title:"Crear XML",permalink:"/docs/xbuilder/createXml"}},l=[{value:"POJO",id:"pojo",children:[]},{value:"Config",id:"config",children:[]},{value:"SystemClock",id:"systemclock",children:[]}],u={toc:l};function p(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(o.a)("wrapper",Object(n.a)({},u,i,{components:t,mdxType:"MDXLayout"}),Object(o.a)("p",null,"XBuilder crea archivos XMLs basados en 3 objetos:"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)("strong",{parentName:"li"},"POJO"),"- El objeto que contiene los datos del XML a crear."),Object(o.a)("li",{parentName:"ul"},Object(o.a)("strong",{parentName:"li"},"Config")," - Incluye informaci\xf3n como los valores de impuestos y valores por defecto a aplicar."),Object(o.a)("li",{parentName:"ul"},Object(o.a)("strong",{parentName:"li"},"System clock")," - Reloj que genera la hora actual del sistema, incluyendo la zona horaria.")),Object(o.a)("p",null,Object(o.a)("img",{alt:"img",src:a(211).default,title:"XBuilder concept equation"})),Object(o.a)("pre",null,Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"DocumentWrapper<InvoiceOutputModel> result = DocumentManager.createXML(pojo, config, systemClock);\n")),Object(o.a)("h2",{id:"pojo"},"POJO"),Object(o.a)("p",null,"El POJO es la informaci\xf3n de entrada que ser\xe1 usada para crear el archivo XML. El POJO contiene informaci\xf3n como serie, n\xfamero, precios, detalle del comprobante, etc."),Object(o.a)("p",null,"Dependiendo del tipo de XML que quieras crear deber\xe1s usar un POJO distinto. Por ejemplo:"),Object(o.a)("p",null,"Si quieres crear una factura (Invoice):"),Object(o.a)("pre",null,Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"InvoiceInputModel pojo = InvoiceInputModel.Builder.anInvoiceInputModel().build();\n")),Object(o.a)("p",null,"Si quieres crear una nota de c\u0155edito (Credit note):"),Object(o.a)("pre",null,Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"CreditNoteInputModel pojo = CreditNoteInputModel.Builder.aCreditNoteInputModel()\n")),Object(o.a)("p",null,"Te familiarizar\xe1s con los POJOs a medida que vayas usando XBuilder."),Object(o.a)("h2",{id:"config"},"Config"),Object(o.a)("p",null,Object(o.a)("inlineCode",{parentName:"p"},"Config")," es una interfaz que debe de ser implementada por cada software que usa ",Object(o.a)("inlineCode",{parentName:"p"},"XBuilder"),". En ella definir\xe1z valores como el valor del IGV, ICB, etc. Por ejemplo:"),Object(o.a)("pre",null,Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'public class MyCustomConfig implements Config {\n\n    private BigDecimal igv;\n    private BigDecimal ivap;\n    private String defaultMoneda;\n    private String defaultUnidadMedida;\n    private Catalog9 defaultTipoNotaCredito;\n    private Catalog10 defaultTipoNotaDebito;\n    private BigDecimal defaultIcb;\n    private Catalog7 defaultTipoIgv;\n\n    public DefaultConfig() {\n        this.defaultMoneda = "PEN";\n        this.defaultUnidadMedida = "NIU";\n        this.igv = new BigDecimal("0.18");\n        this.ivap = new BigDecimal("0.04");\n        this.defaultIcb = new BigDecimal("0.2");\n        ...\n    }\n}\n')),Object(o.a)("h2",{id:"systemclock"},"SystemClock"),Object(o.a)("p",null,Object(o.a)("inlineCode",{parentName:"p"},"SystemClock")," es una interfaz que debe de ser implementada por cada software que usa ",Object(o.a)("inlineCode",{parentName:"p"},"XBuilder")," por ejemplo:"),Object(o.a)("pre",null,Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),' public class MyCustomClock implements SystemClock {\n    @Override\n    public TimeZone getTimeZone() {\n        return TimeZone.getTimeZone("America/Lima");\n    }\n\n    @Override\n    public Calendar getCalendarInstance() {\n        return Calendar.getInstance();\n    }\n}\n')))}p.isMDXComponent=!0}}]);