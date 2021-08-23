(self.webpackChunkproject_openubl=self.webpackChunkproject_openubl||[]).push([[6962],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||s[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},86096:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),i=["components"],l={title:"Conceptos b\xe1sicos",description:"XBuilder conceptos b\xe1sicos"},c=void 0,u={unversionedId:"xbuilder/concepts",id:"xbuilder/concepts",isDocsHomePage:!1,title:"Conceptos b\xe1sicos",description:"XBuilder conceptos b\xe1sicos",source:"@site/docs/04-xbuilder/03-concepts.md",sourceDirName:"04-xbuilder",slug:"/xbuilder/concepts",permalink:"/docs/xbuilder/concepts",editUrl:"https://github.com/project-openubl/website/edit/master/docs/04-xbuilder/03-concepts.md",version:"current",sidebarPosition:3,frontMatter:{title:"Conceptos b\xe1sicos",description:"XBuilder conceptos b\xe1sicos"},sidebar:"tutorialSidebar",previous:{title:"Instalaci\xf3n",permalink:"/docs/xbuilder/installation"},next:{title:"Crear XML",permalink:"/docs/xbuilder/create-xml"}},p=[{value:"POJO",id:"pojo",children:[]},{value:"Config",id:"config",children:[]},{value:"SystemClock",id:"systemclock",children:[]}],s={toc:p};function d(e){var t=e.components,l=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"XBuilder crea archivos XMLs basados en 3 objetos:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"POJO"),"- El objeto que contiene los datos del XML a crear."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Config")," - Incluye informaci\xf3n como los valores de impuestos y valores por defecto a aplicar."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"System clock")," - Reloj que genera la hora actual del sistema, incluyendo la zona horaria.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img",src:n(87593).Z,title:"XBuilder concept equation"})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"DocumentWrapper<InvoiceOutputModel> result = DocumentManager.createXML(pojo, config, systemClock);\n")),(0,o.kt)("h2",{id:"pojo"},"POJO"),(0,o.kt)("p",null,"El POJO es la informaci\xf3n de entrada que ser\xe1 usada para crear el archivo XML. El POJO contiene informaci\xf3n como serie, n\xfamero, precios, detalle del comprobante, etc."),(0,o.kt)("p",null,"Dependiendo del tipo de XML que quieras crear deber\xe1s usar un POJO distinto. Por ejemplo:"),(0,o.kt)("p",null,"Si quieres crear una factura (Invoice):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"InvoiceInputModel pojo = InvoiceInputModel.Builder.anInvoiceInputModel().build();\n")),(0,o.kt)("p",null,"Si quieres crear una nota de c\u0155edito (Credit note):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"CreditNoteInputModel pojo = CreditNoteInputModel.Builder.aCreditNoteInputModel()\n")),(0,o.kt)("p",null,"Te familiarizar\xe1s con los POJOs a medida que vayas usando XBuilder."),(0,o.kt)("h2",{id:"config"},"Config"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Config")," es una interfaz que debe de ser implementada por cada software que usa ",(0,o.kt)("inlineCode",{parentName:"p"},"XBuilder"),". En ella definir\xe1z valores como el valor del IGV, ICB, etc. Por ejemplo:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'public class MyCustomConfig implements Config {\n\n    private BigDecimal igv;\n    private BigDecimal ivap;\n    private String defaultMoneda;\n    private String defaultUnidadMedida;\n    private Catalog9 defaultTipoNotaCredito;\n    private Catalog10 defaultTipoNotaDebito;\n    private BigDecimal defaultIcb;\n    private Catalog7 defaultTipoIgv;\n\n    public DefaultConfig() {\n        this.defaultMoneda = "PEN";\n        this.defaultUnidadMedida = "NIU";\n        this.igv = new BigDecimal("0.18");\n        this.ivap = new BigDecimal("0.04");\n        this.defaultIcb = new BigDecimal("0.2");\n        ...\n    }\n}\n')),(0,o.kt)("h2",{id:"systemclock"},"SystemClock"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"SystemClock")," es una interfaz que debe de ser implementada por cada software que usa ",(0,o.kt)("inlineCode",{parentName:"p"},"XBuilder")," por ejemplo:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},' public class MyCustomClock implements SystemClock {\n    @Override\n    public TimeZone getTimeZone() {\n        return TimeZone.getTimeZone("America/Lima");\n    }\n\n    @Override\n    public Calendar getCalendarInstance() {\n        return Calendar.getInstance();\n    }\n}\n')))}d.isMDXComponent=!0},87593:function(e,t,n){"use strict";t.Z=n.p+"assets/images/concepts-equation-72f76f9c8fa662735cb81335cb29f3aa.svg"}}]);