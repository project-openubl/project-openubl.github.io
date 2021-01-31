(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{141:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(8),a=(n(0),n(155)),i={title:"Getting started"},c={unversionedId:"xbuilder/server/gettingStarted",id:"xbuilder/server/gettingStarted",isDocsHomePage:!1,title:"Getting started",description:"Once you started XBuilder Server following any of the methods described in installation you should be able to:",source:"@site/docs/xbuilder/server/gettingStarted.md",slug:"/xbuilder/server/gettingStarted",permalink:"/docs/xbuilder/server/gettingStarted",editUrl:"https://github.com/project-openubl/website/edit/master/docs/xbuilder/server/gettingStarted.md",version:"current"},l=[{value:"Create XML",id:"create-xml",children:[]},{value:"Sign XML",id:"sign-xml",children:[]}],u={toc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.a)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.a)("p",null,"Once you started ",Object(a.a)("em",{parentName:"p"},"XBuilder Server")," following any of the methods described in ",Object(a.a)("a",Object(r.a)({parentName:"p"},{href:"./installation"}),"installation")," you should be able to:"),Object(a.a)("ul",null,Object(a.a)("li",{parentName:"ul"},"Create XML files based on UBL"),Object(a.a)("li",{parentName:"ul"},"Sign XML files")),Object(a.a)("h2",{id:"create-xml"},"Create XML"),Object(a.a)("p",null,"Open a terminal or the tool of your preference and execute:"),Object(a.a)("pre",null,Object(a.a)("code",Object(r.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),'curl -X POST \\\n-H "Content-Type: application/json" \\\n-d \'{\n    "serie": "F001",\n    "numero": 1,\n    "proveedor": {\n        "ruc": "12345678912",\n        "razonSocial": "Project OpenUBL"\n    },\n    "cliente": {\n        "tipoDocumentoIdentidad": "RUC",\n        "numeroDocumentoIdentidad": "12312312312",\n        "nombre": "Nombre de mi cliente"\n    },\n    "detalle": [\n        {\n        "descripcion": "Nombre de producto o servicio",\n        "precioUnitario": 1,\n        "cantidad": 1,\n        "tipoIgv": "GRAVADO_OPERACION_ONEROSA"\n        }\n    ]\n}\' \\\nhttp://localhost:8080/api/documents/invoice/create\n')),Object(a.a)("h2",{id:"sign-xml"},"Sign XML"),Object(a.a)("p",null,"For creating an XML and also sign it you need to provide 3 things:"),Object(a.a)("ul",null,Object(a.a)("li",{parentName:"ul"},Object(a.a)("strong",{parentName:"li"},"JSON input")," - The body of the request which contains info about the document you are about to create."),Object(a.a)("li",{parentName:"ul"},Object(a.a)("strong",{parentName:"li"},"X-OPENBUL-PRIVATEKEY")," - The header which contains the PEM encoded version of your private key."),Object(a.a)("li",{parentName:"ul"},Object(a.a)("strong",{parentName:"li"},"X-OPENUBL-CERTIFICATEKEY")," - The header which contains the PEM encoded version of your certificate.")),Object(a.a)("pre",null,Object(a.a)("code",Object(r.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),'curl -X POST \\\n-H "Content-Type: application/json" \\\n-H "X-OPENBUL-PRIVATEKEY: MIIEowIBAAKCAQEArhO3H48lGkRNcPNhA6uTd804NnMxBkXKKTgR8DldX8vTmrf0JqNGMLxUlqSG1KlRelHQXvIz7GWO0NgE0DZ9eMEULS7S8YMuj6RZFCudDb/aasxHyCvjVfdKJUF4BIPPKN2dvjFBAQz4fI/3/PceptIqzwzl+8SryXEbJgAUmjaS2POE65RePRIINOV1Vi7lwvLzH0Zl1sr+oytOnXAI1YRlKZhgcS5v5XeX/qfRpbIQdqxcloVAQX/voN8QsLT6chZr/gEZbUnDs2HD286/Xzg27Rw8Bwy7HIbhhKYPK2TsFanpMhsTVtC3gxp6umLb3Fuala7RBC76nDZC9A+95QIDAQABAoIBABhHrbIcMCuivT504+I0K0R5fk6x8HOUhmcLaA0eozR6ZJBe+hHtkhu4GQBOAHRnDXNHOA4WMEHXxHzCtKEqCIQwQhUvQ8Ll7jegz7/teWFykg91YMm9vV6/ODtMD2Zp0Bo+FwNxMUTpPzt4hTlmaoMQK2JnxShBvUhCm2vIdRcxLHV63HjRWqHu98vKYxQ5ByQX3nVBP757zRI2rhC5g0yzQucGj2GMeD3t8W/NozNaUx9qXq2YaqhIYfhbzKZH41ZeIpE0Au7aNS4WBTpWkO1patCpSZHhTV9RIbBCG7al0ukLs3FfbWoHCAJAHUyuEvG4htSb0WqudlJn/rPNdP0CgYEA4SK8NgON4wvdi42dr43NdcOVbWes4HM4M8f1pi7W9RSracuAXj7oeyirKPnUMJchRNOlF/aTghbgtbgAYBFxYYfFbc12BURiAgo6firu6ILD7696V/uxiQPSg/chVrBkN1rYYf1sTgcJB9N7uuiBQZAh8NJWJNvviPVxNfFhoO8CgYEAxfEMCnEBiiOiKi72eclGGAAQr/JAdoaCXZPi1lmbAkWULtyqoo3MzyuyJ3GDwb1j8e2JqPEvqAW8w993Z5vqk/N9MA7rlSE6UPxTHs8ZKNWcdci0rReurG+evrGRRJmKuvqK0/7Nqr/f039VuRqvgtWxJeFoBNZVpwGG/LeCJmsCgYAVcjyhnJcQkNnK6HOj/Isc88OxR1YFj5REAoFZEk8xy4VEr7kLwUxeJxKe9aWL92mY59xrOvb0Rn+jb+LBRAgb9VYOTqs2dzwq25SU3jwh9Ar8MyghZ32TAsU0Av+vBWCWkVXZh82gZTUsBK5dsLZXa4aALVk9a6IW1uKw88yMCwKBgFk3e2jdZIdB5l7DCh78ZFZ++QaE1x9VIz9QX8ajXqWYfODeXx6jcTPTixoSJQPW/ExX91spUoSWCW3ztBsEAKgs8DkQEIkIEAPepwxU5g8ssLe5/g2ihf181f03hbV4yznZoWdKCqMyloz6cMXczEzZSl47iancfYCnxJL1l3j/AoGBAIQDUua/Ia2LLJE24kamiLmdtECHsXg/Wrp++YaGc2btHblAN5TNQfy3S4yvQIOzaVp7AQMXq/AUdua1YcLS1Op/CsocgVMzpckZ7FVS8BFuQnQx8ltnAcqbnCo6UzUdOPKNRw2EDyk9yK83wEtvkvlHOVdRsOlYN5ZSrkq1X92A" \\\n-H "X-OPENUBL-CERTIFICATEKEY: MIIE+DCCA+CgAwIBAgIJALURz7AYmJ5+MA0GCSqGSIb3DQEBBQUAMIIBDTEbMBkGCgmSJomT8ixkARkWC0xMQU1BLlBFIFNBMQswCQYDVQQGEwJQRTENMAsGA1UECAwETElNQTENMAsGA1UEBwwETElNQTEYMBYGA1UECgwPVFUgRU1QUkVTQSBTLkEuMUUwQwYDVQQLDDxETkkgOTk5OTk5OSBSVUMgMTA0Njc3OTM1NDkgLSBDRVJUSUZJQ0FETyBQQVJBIERFTU9TVFJBQ0nDk04xRDBCBgNVBAMMO05PTUJSRSBSRVBSRVNFTlRBTlRFIExFR0FMIC0gQ0VSVElGSUNBRE8gUEFSQSBERU1PU1RSQUNJw5NOMRwwGgYJKoZIhvcNAQkBFg1kZW1vQGxsYW1hLnBlMB4XDTE5MTEwODEyNTY1MFoXDTIxMTEwNzEyNTY1MFowggENMRswGQYKCZImiZPyLGQBGRYLTExBTUEuUEUgU0ExCzAJBgNVBAYTAlBFMQ0wCwYDVQQIDARMSU1BMQ0wCwYDVQQHDARMSU1BMRgwFgYDVQQKDA9UVSBFTVBSRVNBIFMuQS4xRTBDBgNVBAsMPEROSSA5OTk5OTk5IFJVQyAxMDQ2Nzc5MzU0OSAtIENFUlRJRklDQURPIFBBUkEgREVNT1NUUkFDScOTTjFEMEIGA1UEAww7Tk9NQlJFIFJFUFJFU0VOVEFOVEUgTEVHQUwgLSBDRVJUSUZJQ0FETyBQQVJBIERFTU9TVFJBQ0nDk04xHDAaBgkqhkiG9w0BCQEWDWRlbW9AbGxhbWEucGUwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCuE7cfjyUaRE1w82EDq5N3zTg2czEGRcopOBHwOV1fy9Oat/Qmo0YwvFSWpIbUqVF6UdBe8jPsZY7Q2ATQNn14wRQtLtLxgy6PpFkUK50Nv9pqzEfIK+NV90olQXgEg88o3Z2+MUEBDPh8j/f89x6m0irPDOX7xKvJcRsmABSaNpLY84TrlF49Egg05XVWLuXC8vMfRmXWyv6jK06dcAjVhGUpmGBxLm/ld5f+p9GlshB2rFyWhUBBf++g3xCwtPpyFmv+ARltScOzYcPbzr9fODbtHDwHDLschuGEpg8rZOwVqekyGxNW0LeDGnq6YtvcW5qVrtEELvqcNkL0D73lAgMBAAGjVzBVMB0GA1UdDgQWBBTe18LHVKkeRrWs3Bxp1ikK50l96jAfBgNVHSMEGDAWgBTe18LHVKkeRrWs3Bxp1ikK50l96jATBgNVHSUEDDAKBggrBgEFBQcDATANBgkqhkiG9w0BAQUFAAOCAQEASBWcP4AiqUUZSG2/Z3RU3BgvOVV3if8xYAaZT99n5PsvyBiZ3Gh6VpAW9ezoe25ZNSqGMmGfq+R4mEuiqK4h6jDJp0fN47IwRhWjttB9dwpxIDEkWW7zPdueGx+BY8EuyfNDWR/C7GPfu6azSHiapzeKC57AAZ8xo8kDdhXxDy8hTqNGolkqnc6QutW8cYPeonqyhi2THN163lZ3Cx5OV8vGFQ3ou2msF0klY9qXopI9i8wQjEeOG6bCvVxdID9ZjTbuGbO9pAN9hH7hZ41XEG/CspSWbFf1/Wbnlfusne9v9NgRj0MM+LAHM7AO5/7j1XwRq4x+U9TSVPgpoU9l5Q==" \\\n-d \'{\n    "serie": "F001",\n    "numero": 1,\n    "proveedor": {\n        "ruc": "12345678912",\n        "razonSocial": "Project OpenUBL"\n    },\n    "cliente": {\n        "tipoDocumentoIdentidad": "RUC",\n        "numeroDocumentoIdentidad": "12312312312",\n        "nombre": "Nombre de mi cliente"\n    },\n    "detalle": [\n        {\n        "descripcion": "Nombre de producto o servicio",\n        "precioUnitario": 1,\n        "cantidad": 1,\n        "tipoIgv": "GRAVADO_OPERACION_ONEROSA"\n        }\n    ]\n}\' \\\nhttp://localhost:8080/api/documents/invoice/create\n')))}p.isMDXComponent=!0},155:function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),g=r,E=d["".concat(i,".").concat(g)]||d[g]||s[g]||a;return n?o.a.createElement(E,c(c({ref:t},u),{},{components:n})):o.a.createElement(E,c({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);