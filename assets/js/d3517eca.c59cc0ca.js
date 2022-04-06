"use strict";(self.webpackChunkproject_openubl=self.webpackChunkproject_openubl||[]).push([[8196],{3905:function(e,n,a){a.d(n,{Zo:function(){return p},kt:function(){return m}});var t=a(7294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=t.createContext({}),d=function(e){var n=t.useContext(c),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},p=function(e){var n=d(e.components);return t.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(a),m=r,v=u["".concat(c,".").concat(m)]||u[m]||s[m]||o;return a?t.createElement(v,i(i({ref:n},p),{},{components:a})):t.createElement(v,i({ref:n},p))}));function m(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=a[d];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7200:function(e,n,a){a.r(n),a.d(n,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return s}});var t=a(7462),r=a(3366),o=(a(7294),a(3905)),i=["components"],l={title:"Instalaci\xf3n"},c=void 0,d={unversionedId:"xbuilder/installation",id:"xbuilder/installation",title:"Instalaci\xf3n",description:"XBuilder puede ser usado y descargado desde el repositorio central de Maven. Las versiones pueden ser consultadas en:",source:"@site/docs/04-xbuilder/02-installation.md",sourceDirName:"04-xbuilder",slug:"/xbuilder/installation",permalink:"/docs/xbuilder/installation",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04-xbuilder/02-installation.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Instalaci\xf3n"},sidebar:"tutorialSidebar",previous:{title:"Introducci\xf3n",permalink:"/docs/xbuilder"},next:{title:"Conceptos b\xe1sicos",permalink:"/docs/xbuilder/concepts"}},p={},s=[{value:"Maven",id:"maven",level:2},{value:"Gradle",id:"gradle",level:2},{value:"No uso Maven ni Gradle \xbfC\xf3mo instalar XBuilder?",id:"no-uso-maven-ni-gradle-c\xf3mo-instalar-xbuilder",level:2},{value:"Ejemplo",id:"ejemplo",level:3}],u={toc:s};function m(e){var n=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,t.Z)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"XBuilder puede ser usado y descargado desde el repositorio central de Maven. Las versiones pueden ser consultadas en:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://search.maven.org/artifact/io.github.project-openubl/xbuilder/"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/maven-central/v/io.github.project-openubl/xbuilder",alt:"Maven Central"}))),(0,o.kt)("h2",{id:"maven"},"Maven"),(0,o.kt)("p",null,"Si usas Maven: en tu archivo ",(0,o.kt)("inlineCode",{parentName:"p"},"pom.xml")," agrega:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>io.github.project-openubl</groupId>\n    <artifactId>xbuilder</artifactId>\n    <version>version</version>\n</dependency>\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Reemplaze ",(0,o.kt)("inlineCode",{parentName:"p"},"version")," por una versi\xf3n v\xe1lida."))),(0,o.kt)("h2",{id:"gradle"},"Gradle"),(0,o.kt)("p",null,"Si usas Gradle: en tu archivo ",(0,o.kt)("inlineCode",{parentName:"p"},"build.gradle")," agrega:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"compile group: 'io.github.project-openubl', name: 'xbuilder', version: 'version'\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Reemplaze ",(0,o.kt)("inlineCode",{parentName:"p"},"version")," por una versi\xf3n v\xe1lida."))),(0,o.kt)("h2",{id:"no-uso-maven-ni-gradle-c\xf3mo-instalar-xbuilder"},"No uso Maven ni Gradle \xbfC\xf3mo instalar XBuilder?"),(0,o.kt)("p",null,"Se recomienda que todo proyecto est\xe9 hecho usando Maven o Gradle ya que facilita y automatiza el proceso de descarga de dependencias. Te recomendamos:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Evaluar cambiar tu c\xf3digo y empezar a Maven o Gradle.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Si despu\xe9s de evaluar tu c\xf3digo llegas a la conclusi\xf3n de que no puedes usar Maven o Gradle entonces debes de descargar todas las dependencias de la libreria e incluirlas en tu proyecto.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Crea un archivo ",(0,o.kt)("inlineCode",{parentName:"p"},"pom.xml")," con el siguiente contenido:"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">\n    <modelVersion>4.0.0</modelVersion>\n\n    <groupId>mygroup</groupId>\n    <artifactId>myartifact</artifactId>\n    <version>1.0.0-SNAPSHOT</version>\n    <packaging>jar</packaging>\n\n    <name>My app</name>\n\n    <dependencies>\n        <dependency>\n            <groupId>io.github.project-openubl</groupId>\n            <artifactId>xbuilder</artifactId>\n            <version>UltimaVersion</version>\n        </dependency>\n    </dependencies>\n</project>\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Abre un terminal y ub\xedcate en la carpeta donde creaste el ",(0,o.kt)("inlineCode",{parentName:"li"},"pom.xml")),(0,o.kt)("li",{parentName:"ul"},"Ejecuta el comando:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mvn dependency:copy-dependencies\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Se crear\xe1 una carpeta ",(0,o.kt)("inlineCode",{parentName:"li"},"target")," al costado de ",(0,o.kt)("inlineCode",{parentName:"li"},"pom.xml"),". Lo \xfanico que tienes que hacer es copiar todas las dependencias dentro de la carpeta ",(0,o.kt)("inlineCode",{parentName:"li"},"target/dependency")," a tu proyecto.")),(0,o.kt)("h3",{id:"ejemplo"},"Ejemplo"),(0,o.kt)("p",null,"Este ejemplo muestra c\xf3mo usar las dependencias sin Maven o Gradle en ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/xxsolracxx/project-xbuilder-xsender-NO-MAVEN-GRADLE"},"project-xbuilder-xsender-NO-MAVEN-GRADLE")))}m.isMDXComponent=!0}}]);