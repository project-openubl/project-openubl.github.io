(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{155:function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var o=t(0),r=t.n(o);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=r.a.createContext({}),u=function(e){var n=r.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),m=u(t),s=o,b=m["".concat(a,".").concat(s)]||m[s]||l[s]||i;return t?r.a.createElement(b,c(c({ref:n},p),{},{components:t})):r.a.createElement(b,c({ref:n},p))}));function s(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var c={};for(var d in n)hasOwnProperty.call(n,d)&&(c[d]=n[d]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=t[p];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},99:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return d})),t.d(n,"default",(function(){return u}));var o=t(3),r=t(8),i=(t(0),t(155)),a={title:"Create XMLs"},c={unversionedId:"xbuilder/server/createXml",id:"xbuilder/server/createXml",isDocsHomePage:!1,title:"Create XMLs",description:"For creating XML files you need to interact with the set of REST endpoints XBuilder Server exposes to you. For more information about the REST API documentation visit OpenAPI",source:"@site/docs/xbuilder/server/createXml.md",slug:"/xbuilder/server/createXml",permalink:"/docs/xbuilder/server/createXml",editUrl:"https://github.com/project-openubl/website/edit/master/docs/xbuilder/server/createXml.md",version:"current"},d=[{value:"Invoice",id:"invoice",children:[]},{value:"CreditNote",id:"creditnote",children:[]},{value:"DebitNote",id:"debitnote",children:[]},{value:"VoidedDocument",id:"voideddocument",children:[]},{value:"SummaryDocument",id:"summarydocument",children:[]}],p={toc:d};function u(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.a)("wrapper",Object(o.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(i.a)("p",null,"For creating XML files you need to interact with the set of REST endpoints ",Object(i.a)("em",{parentName:"p"},"XBuilder Server")," exposes to you. For more information about the REST API documentation visit ",Object(i.a)("a",Object(o.a)({parentName:"p"},{href:"./api"}),"OpenAPI")),Object(i.a)("p",null,"For executing the next set of examples you need to have ",Object(i.a)("em",{parentName:"p"},"XBuilder Server")," running."),Object(i.a)("h2",{id:"invoice"},"Invoice"),Object(i.a)("pre",null,Object(i.a)("code",Object(o.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),'curl -X POST \\\n-H "Content-Type: application/json" \\\n-d \'{\n  "serie": "F001",\n  "numero": 1,\n  "proveedor": {\n    "ruc": "12345678912",\n    "razonSocial": "Project OpenUBL"\n  },\n  "cliente": {\n    "tipoDocumentoIdentidad": "RUC",\n    "numeroDocumentoIdentidad": "12312312312",\n    "nombre": "Nombre de mi cliente"\n  },\n  "detalle": [\n    {\n      "descripcion": "Nombre de producto o servicio",\n      "precioUnitario": 1,\n      "cantidad": 1,\n      "tipoIgv": "GRAVADO_OPERACION_ONEROSA"\n    }\n  ]\n}\' \\\nhttp://localhost:8080/api/documents/invoice/create\n')),Object(i.a)("h2",{id:"creditnote"},"CreditNote"),Object(i.a)("pre",null,Object(i.a)("code",Object(o.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),'curl -X POST \\\n-H "Content-Type: application/json" \\\n-d \'{\n  "serie": "F001",\n  "numero": 1,\n  "descripcionSustentoDeNota": "mi motivo",\n  "serieNumeroComprobanteAfectado": "F001-1",\n  "proveedor": {\n    "ruc": "12345678912",\n    "razonSocial": "Project OpenUBL"\n  },\n  "cliente": {\n    "tipoDocumentoIdentidad": "RUC",\n    "numeroDocumentoIdentidad": "12312312312",\n    "nombre": "Nombre de mi cliente"\n  },\n  "detalle": [\n    {\n      "descripcion": "Nombre de producto o servicio",\n      "precioUnitario": 1,\n      "cantidad": 1\n    }\n  ]\n}\' \\\nhttp://localhost:8080/api/documents/credit-note/create\n')),Object(i.a)("h2",{id:"debitnote"},"DebitNote"),Object(i.a)("pre",null,Object(i.a)("code",Object(o.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),'curl -X POST \\\n-H "Content-Type: application/json" \\\n-d \'{\n  "serie": "F001",\n  "numero": 1,\n  "descripcionSustentoDeNota": "mi motivo",\n  "serieNumeroComprobanteAfectado": "F001-1",\n  "proveedor": {\n    "ruc": "12345678912",\n    "razonSocial": "Project OpenUBL"\n  },\n  "cliente": {\n    "tipoDocumentoIdentidad": "RUC",\n    "numeroDocumentoIdentidad": "12312312312",\n    "nombre": "Nombre de mi cliente"\n  },\n  "detalle": [\n    {\n      "descripcion": "Nombre de producto o servicio",\n      "precioUnitario": 1,\n      "cantidad": 1\n    }\n  ]\n}\' \\\nhttp://localhost:8080/api/documents/debit-note/create\n')),Object(i.a)("h2",{id:"voideddocument"},"VoidedDocument"),Object(i.a)("pre",null,Object(i.a)("code",Object(o.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),'curl -X POST \\\n-H "Content-Type: application/json" \\\n-d \'{\n  "numero": 1,\n  "descripcionSustento": "mi motivo de baja",\n  "proveedor": {\n    "ruc": "12345678912",\n    "razonSocial": "Project OpenUBL"\n  },\n  "comprobante": {\n    "serieNumero": "F001-1",\n    "tipoComprobante": "FACTURA",\n    "fechaEmision": 1585398109198\n  }\n}\' \\\nhttp://localhost:8080/api/documents/voided-document/create\n')),Object(i.a)("h2",{id:"summarydocument"},"SummaryDocument"),Object(i.a)("pre",null,Object(i.a)("code",Object(o.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),'curl -X POST \\\n-H "Content-Type: application/json" \\\n-d \'{\n  "numero": 1,\n  "fechaEmisionDeComprobantesAsociados": 1585398109198,\n  "proveedor": {\n    "ruc": "12345678912",\n    "razonSocial": "Project OpenUBL"\n  },\n  "detalle": [{\n    "tipoOperacion": "ADICIONAR",\n    "comprobante": {\n        "tipo": "FACTURA",\n        "serieNumero": "F001-1",\n        "cliente": {\n            "tipoDocumentoIdentidad": "RUC",\n            "numeroDocumentoIdentidad": "12121212121",\n            "nombre": "nombre de mi cliente"\n        },\n        "valorVenta": {\n            "importeTotal": 100,\n            "gravado": 100,\n            "exonerado": 0,\n            "inafecto": "0",\n            "gratuito": "0"\n        },\n\n        "impuestos": {\n            "igv": 22,\n            "icb": 0\n        }\n    }\n  }, {\n    "tipoOperacion": "ADICIONAR",\n    "comprobante": {\n        "tipo": "NOTA_CREDITO",\n        "serieNumero": "BC01-1",\n        "cliente": {\n            "tipoDocumentoIdentidad": "DNI",\n            "numeroDocumentoIdentidad": "12121212",\n            "nombre": "nombre de mi cliente"\n        },\n        "valorVenta": {\n            "importeTotal": 100,\n            "gravado": 100,\n            "exonerado": 0,\n            "inafecto": "0",\n            "gratuito": "0"\n        },\n\n        "impuestos": {\n            "igv": 22,\n            "icb": 0\n        }\n    },\n    "comprobanteAfectado": {\n        "tipo": "BOLETA",\n        "serieNumero": "B001-1"\n    }\n  }]\n}\' \\\nhttp://localhost:8080/api/documents/summary-document/create\n')))}u.isMDXComponent=!0}}]);