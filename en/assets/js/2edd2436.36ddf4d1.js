(self.webpackChunkproject_openubl=self.webpackChunkproject_openubl||[]).push([[2108],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},19719:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return s},toc:function(){return l},default:function(){return c}});var r=n(22122),i=n(19756),o=(n(67294),n(3905)),a={title:"Frequently asked questions"},s={unversionedId:"xbuilder/qa",id:"xbuilder/qa",isDocsHomePage:!1,title:"Frequently asked questions",description:"What is the SignatureID?",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/04-xbuilder/06-qa.md",sourceDirName:"04-xbuilder",slug:"/xbuilder/qa",permalink:"/en/docs/xbuilder/qa",editUrl:"https://github.com/project-openubl/website/edit/master/docs/04-xbuilder/06-qa.md",version:"current",sidebarPosition:6,frontMatter:{title:"Frequently asked questions"},sidebar:"tutorialSidebar",previous:{title:"Sign XML",permalink:"/en/docs/xbuilder/sign-xml"},next:{title:"Invoice (Bolet/Invoice)",permalink:"/en/docs/xbuilder/examples/invoice"}},l=[{value:"What is the SignatureID?",id:"what-is-the-signatureid",children:[]},{value:"How do I view the content of the signed XML?",id:"how-do-i-view-the-content-of-the-signed-xml",children:[]}],u={toc:l};function c(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"what-is-the-signatureid"},"What is the SignatureID?"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"signatureID")," Is the value of ",(0,o.kt)("inlineCode",{parentName:"p"},'ds: Signature Id="mySignID "')," inside the XML, for example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml",metastring:"{4}","{4}":!0},'<ext:UBLExtensions>\n    <ext:UBLExtension>\n        <ext:ExtensionContent>\n            <ds:Signature Id="mySignID" xmlns:ds="http://www.w3.org/2000/09/xmldsig#">                              \n            </ds:Signature>\n        </ext:ExtensionContent>\n    </ext:UBLExtension>\n</ext:UBLExtensions>\n')),(0,o.kt)("p",null,"Selects a good signatureID; the signatureID must not contain numbers or blanks. SUNAT rejects signatureIDs as ",(0,o.kt)("inlineCode",{parentName:"p"},"12345678912")," but does accept securities as ",(0,o.kt)("inlineCode",{parentName:"p"},"MyCompany"),"."),(0,o.kt)("p",null,"In case of defining invalid signatureIDs you will probably have the error ",(0,o.kt)("inlineCode",{parentName:"p"},"Cannot read (parsear) the XML file when sending the XML to the SUNAT"),"."),(0,o.kt)("h3",{id:"how-do-i-view-the-content-of-the-signed-xml"},"How do I view the content of the signed XML?"),(0,o.kt)("p",null,"The signed XML is obtained in an object of the form:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"Document signedXML = XMLSigner.signXML(xml, signatureID, certificate, privateKey);\n")),(0,o.kt)("p",null,"Note that the signed XML is not a ",(0,o.kt)("inlineCode",{parentName:"p"},"String")," but a ",(0,o.kt)("inlineCode",{parentName:"p"},"org.w3c.dom.Document")," therefore you should not attempt to print it using ",(0,o.kt)("inlineCode",{parentName:"p"},"System.out.println (signedXML)"),". What you should do is try writing it on a hard drive or convert it to ",(0,o.kt)("inlineCode",{parentName:"p"},"bytes []")," so you can start using it."),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'DOMSource source = new DOMSource(signedDocument);\nFileWriter writer = new FileWriter(new File("D:/sunat/operaciones/12345678959-01-F001-00000001.xml"));\nStreamResult resultXml = new StreamResult(writer);\n\nTransformerFactory transformerFactory = TransformerFactory.newInstance();\nTransformer transformer = transformerFactory.newTransformer();\ntransformer.transform(source, resultXml);\n\nFile file = new File("D:/sunat/operaciones/12345678959-01-F001-00000001.xml"); // Este archivo contiene el XML firmado\n')))}c.isMDXComponent=!0}}]);