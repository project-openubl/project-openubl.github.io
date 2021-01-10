(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{123:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),b=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=b(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(n),m=r,u=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return n?a.a.createElement(u,o(o({ref:t},s),{},{components:n})):a.a.createElement(u,o({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var s=2;s<i;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},86:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(2),a=n(7),i=(n(0),n(123)),c={title:"Firmar XML",description:"Fimar XML",keywords:["certificado digital",".pfx","signatureID"]},o={unversionedId:"xbuilder/signXml",id:"xbuilder/signXml",isDocsHomePage:!1,title:"Firmar XML",description:"Fimar XML",source:"@site/docs/xbuilder/signXml.md",slug:"/xbuilder/signXml",permalink:"/docs/xbuilder/signXml",editUrl:"https://github.com/project-openubl/website/edit/master/docs/xbuilder/signXml.md",version:"current",sidebar:"xbuilder",previous:{title:"Crear XML",permalink:"/docs/xbuilder/createXml"},next:{title:"Invoice (Boleta/Factura)",permalink:"/docs/xbuilder/ejemplos/invoice"}},l=[{value:"Cargar certificado",id:"cargar-certificado",children:[{value:"Usar .pfx",id:"usar-pfx",children:[]}]},{value:"Firmar XML",id:"firmar-xml",children:[]}],s={rightToc:l};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Para firmar un XML necesitas tener dos objetos:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"X509Certificate")," y"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"PrivateKey"))),Object(i.b)("p",null,"Puedes cargar esos objetos con los m\xe9todos y c\xf3digo que creas conveniente."),Object(i.b)("h2",{id:"cargar-certificado"},"Cargar certificado"),Object(i.b)("h3",{id:"usar-pfx"},"Usar .pfx"),Object(i.b)("p",null,"Puedes cargar ",Object(i.b)("inlineCode",{parentName:"p"},"X509Certificate")," y ",Object(i.b)("inlineCode",{parentName:"p"},"PrivateKey")," desde un archivo .pfx usando:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'InputStream ksInputStream = new FileInputStream(new File("myCertificate.pfx"));\nCertificateDetails certificate = CertificateDetailsFactory.create(ksInputStream, "myCertificatePassword");\n\nX509Certificate certificate = certificate.getX509Certificate();\nPrivateKey privateKey = certificate.getPrivateKey();\n')),Object(i.b)("h2",{id:"firmar-xml"},"Firmar XML"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java",metastring:"{8}","{8}":!0}),'String xml; // See docs to create an XML\nString signatureID = "mySignID"; // Your Signature ID\n\n// Get your certificate using the method of your preference\nX509Certificate certificate;\nPrivateKey privateKey;\n\nDocument signedXML = XMLSigner.signXML(xml, signatureID, certificate, privateKey);\n')),Object(i.b)("p",null,"\xa1Eso es todo, ya tienes tu XML firmado!"),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},Object(i.b)("inlineCode",{parentName:"p"},"signedXML")," es un objeto de la clase ",Object(i.b)("inlineCode",{parentName:"p"},"org.w3c.dom.Document")," por lo tanto no debes de usar ",Object(i.b)("inlineCode",{parentName:"p"},"System.out.println")," para ver su contenido; intenta escribir el documento al disco duro."))),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},Object(i.b)("inlineCode",{parentName:"p"},"signatureID")," Es el valor de ",Object(i.b)("inlineCode",{parentName:"p"},"cbc:URI")," dentro del XML, por ejemplo:"),Object(i.b)("pre",{parentName:"div"},Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-xml",metastring:"{4}","{4}":!0}),"<cac:Signature>\n    <cac:DigitalSignatureAttachment>\n        <cac:ExternalReference>\n            <cbc:URI>#PROJECT-OPENUBL-SIGN</cbc:URI>\n        </cac:ExternalReference>\n    </cac:DigitalSignatureAttachment>\n</cac:Signature>\n")))))}b.isMDXComponent=!0}}]);