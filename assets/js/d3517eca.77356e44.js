"use strict";(self.webpackChunkproject_openubl=self.webpackChunkproject_openubl||[]).push([[8196],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),d=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=d(e.components);return a.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(t),m=r,v=u["".concat(c,".").concat(m)]||u[m]||s[m]||i;return t?a.createElement(v,o(o({ref:n},p),{},{components:t})):a.createElement(v,o({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=t[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},77200:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return p},default:function(){return u}});var a=t(83117),r=t(80102),i=(t(67294),t(3905)),o=["components"],l={title:"Instalaci\xf3n"},c=void 0,d={unversionedId:"xbuilder/installation",id:"xbuilder/installation",isDocsHomePage:!1,title:"Instalaci\xf3n",description:"XBuilder puede ser usado y descargado desde el repositorio central de Maven. Las versiones pueden ser consultadas en:",source:"@site/docs/04-xbuilder/02-installation.md",sourceDirName:"04-xbuilder",slug:"/xbuilder/installation",permalink:"/docs/xbuilder/installation",editUrl:"https://github.com/project-openubl/website/edit/master/docs/04-xbuilder/02-installation.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Instalaci\xf3n"},sidebar:"tutorialSidebar",previous:{title:"Introducci\xf3n",permalink:"/docs/xbuilder"},next:{title:"Conceptos b\xe1sicos",permalink:"/docs/xbuilder/concepts"}},p=[{value:"Maven",id:"maven",children:[],level:2},{value:"Gradle",id:"gradle",children:[],level:2},{value:"No uso Maven ni Gradle \xbfC\xf3mo instalar XBuilder?",id:"no-uso-maven-ni-gradle-c\xf3mo-instalar-xbuilder",children:[{value:"Ejemplo",id:"ejemplo",children:[],level:3}],level:2}],s={toc:p};function u(e){var n=e.components,t=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"XBuilder puede ser usado y descargado desde el repositorio central de Maven. Las versiones pueden ser consultadas en:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://search.maven.org/artifact/io.github.project-openubl/xbuilder/"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/maven-central/v/io.github.project-openubl/xbuilder",alt:"Maven Central"}))),(0,i.kt)("h2",{id:"maven"},"Maven"),(0,i.kt)("p",null,"Si usas Maven: en tu archivo ",(0,i.kt)("inlineCode",{parentName:"p"},"pom.xml")," agrega:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>io.github.project-openubl</groupId>\n    <artifactId>xbuilder</artifactId>\n    <version>version</version>\n</dependency>\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Reemplaze ",(0,i.kt)("inlineCode",{parentName:"p"},"version")," por una versi\xf3n v\xe1lida."))),(0,i.kt)("h2",{id:"gradle"},"Gradle"),(0,i.kt)("p",null,"Si usas Gradle: en tu archivo ",(0,i.kt)("inlineCode",{parentName:"p"},"build.gradle")," agrega:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"compile group: 'io.github.project-openubl', name: 'xbuilder', version: 'version'\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Reemplaze ",(0,i.kt)("inlineCode",{parentName:"p"},"version")," por una versi\xf3n v\xe1lida."))),(0,i.kt)("h2",{id:"no-uso-maven-ni-gradle-c\xf3mo-instalar-xbuilder"},"No uso Maven ni Gradle \xbfC\xf3mo instalar XBuilder?"),(0,i.kt)("p",null,"Se recomienda que todo proyecto est\xe9 hecho usando Maven o Gradle ya que facilita y automatiza el proceso de descarga de dependencias. Te recomendamos:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Evaluar cambiar tu c\xf3digo y empezar a Maven o Gradle.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Si despu\xe9s de evaluar tu c\xf3digo llegas a la conclusi\xf3n de que no puedes usar Maven o Gradle entonces debes de descargar todas las dependencias de la libreria e incluirlas en tu proyecto.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Crea un archivo ",(0,i.kt)("inlineCode",{parentName:"p"},"pom.xml")," con el siguiente contenido:"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">\n    <modelVersion>4.0.0</modelVersion>\n\n    <groupId>mygroup</groupId>\n    <artifactId>myartifact</artifactId>\n    <version>1.0.0-SNAPSHOT</version>\n    <packaging>jar</packaging>\n\n    <name>My app</name>\n\n    <dependencies>\n        <dependency>\n            <groupId>io.github.project-openubl</groupId>\n            <artifactId>xbuilder</artifactId>\n            <version>UltimaVersion</version>\n        </dependency>\n    </dependencies>\n</project>\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Abre un terminal y ub\xedcate en la carpeta donde creaste el ",(0,i.kt)("inlineCode",{parentName:"li"},"pom.xml")),(0,i.kt)("li",{parentName:"ul"},"Ejecuta el comando:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"mvn dependency:copy-dependencies\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Se crear\xe1 una carpeta ",(0,i.kt)("inlineCode",{parentName:"li"},"target")," al costado de ",(0,i.kt)("inlineCode",{parentName:"li"},"pom.xml"),". Lo \xfanico que tienes que hacer es copiar todas las dependencias dentro de la carpeta ",(0,i.kt)("inlineCode",{parentName:"li"},"target/dependency")," a tu proyecto.")),(0,i.kt)("h3",{id:"ejemplo"},"Ejemplo"),(0,i.kt)("p",null,"Este ejemplo muestra c\xf3mo usar las dependencias sin Maven o Gradle en ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/xxsolracxx/project-xbuilder-xsender-NO-MAVEN-GRADLE"},"project-xbuilder-xsender-NO-MAVEN-GRADLE")))}u.isMDXComponent=!0}}]);