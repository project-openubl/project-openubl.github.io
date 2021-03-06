(self.webpackChunkproject_openubl=self.webpackChunkproject_openubl||[]).push([[2970],{3905:function(e,n,r){"use strict";r.d(n,{Zo:function(){return c},kt:function(){return m}});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=t.createContext({}),s=function(e){var n=t.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},c=function(e){var n=s(e.components);return t.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=o,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||a;return r?t.createElement(f,i(i({ref:n},c),{},{components:r})):t.createElement(f,i({ref:n},c))}));function m(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},26101:function(e,n,r){"use strict";r.r(n),r.d(n,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var t=r(22122),o=r(19756),a=(r(67294),r(3905)),i=["components"],l={title:"Preguntas frecuentes"},u=void 0,s={unversionedId:"xbuilder/qa",id:"xbuilder/qa",isDocsHomePage:!1,title:"Preguntas frecuentes",description:"\xbfQu\xe9 es el SignatureID?",source:"@site/docs/04-xbuilder/06-qa.md",sourceDirName:"04-xbuilder",slug:"/xbuilder/qa",permalink:"/docs/xbuilder/qa",editUrl:"https://github.com/project-openubl/website/edit/master/docs/04-xbuilder/06-qa.md",version:"current",sidebarPosition:6,frontMatter:{title:"Preguntas frecuentes"},sidebar:"tutorialSidebar",previous:{title:"Firmar XML",permalink:"/docs/xbuilder/sign-xml"},next:{title:"Invoice (Boleta/Factura)",permalink:"/docs/xbuilder/examples/invoice"}},c=[{value:"\xbfQu\xe9 es el SignatureID?",id:"\xbfqu\xe9-es-el-signatureid",children:[]},{value:"\xbfC\xf3mo ver el contenido del XML firmado?",id:"\xbfc\xf3mo-ver-el-contenido-del-xml-firmado",children:[]}],p={toc:c};function d(e){var n=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"\xbfqu\xe9-es-el-signatureid"},"\xbfQu\xe9 es el SignatureID?"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"signatureID")," Es el valor de ",(0,a.kt)("inlineCode",{parentName:"p"},'ds:Signature Id="mySignID"')," dentro del XML, por ejemplo:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml",metastring:"{4}","{4}":!0},'<ext:UBLExtensions>\n    <ext:UBLExtension>\n        <ext:ExtensionContent>\n            <ds:Signature Id="mySignID" xmlns:ds="http://www.w3.org/2000/09/xmldsig#">                              \n            </ds:Signature>\n        </ext:ExtensionContent>\n    </ext:UBLExtension>\n</ext:UBLExtensions>\n')),(0,a.kt)("p",null,"Selecciona un buen signatureID; el signatureID no debe de contener n\xfameros ni espacios en blanco. La SUNAT rechaza signatureIDs como ",(0,a.kt)("inlineCode",{parentName:"p"},"12345678912")," pero si acepta valores como ",(0,a.kt)("inlineCode",{parentName:"p"},"MiEmpresa"),"."),(0,a.kt)("p",null,"En caso de definir signatureIDs inv\xe1lidos probablemente tendr\xe1s el error ",(0,a.kt)("inlineCode",{parentName:"p"},"No se puede leer (parsear) el archivo XML al momento de enviar el XML a la SUNAT"),"."),(0,a.kt)("h3",{id:"\xbfc\xf3mo-ver-el-contenido-del-xml-firmado"},"\xbfC\xf3mo ver el contenido del XML firmado?"),(0,a.kt)("p",null,"El XML firmado es obtenido en un objeto de la forma:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"Document signedXML = XMLSigner.signXML(xml, signatureID, certificate, privateKey);\n")),(0,a.kt)("p",null,"N\xf3tese que el XML firmado no es un ",(0,a.kt)("inlineCode",{parentName:"p"},"String")," sino un ",(0,a.kt)("inlineCode",{parentName:"p"},"org.w3c.dom.Document")," por lo tanto no debes de intentar imprimirlo usando ",(0,a.kt)("inlineCode",{parentName:"p"},"System.out.println(signedXML)"),". Lo que debes de hacer es intentar escribirlo en un disco duro o convertirlo a ",(0,a.kt)("inlineCode",{parentName:"p"},"bytes[]")," para que puedas empezar a usarlo."),(0,a.kt)("p",null,"Por ejemplo:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'DOMSource source = new DOMSource(signedDocument);\nFileWriter writer = new FileWriter(new File("D:/sunat/operaciones/12345678959-01-F001-00000001.xml"));\nStreamResult resultXml = new StreamResult(writer);\n\nTransformerFactory transformerFactory = TransformerFactory.newInstance();\nTransformer transformer = transformerFactory.newTransformer();\ntransformer.transform(source, resultXml);\n\nFile file = new File("D:/sunat/operaciones/12345678959-01-F001-00000001.xml"); // Este archivo contiene el XML firmado\n')))}d.isMDXComponent=!0}}]);