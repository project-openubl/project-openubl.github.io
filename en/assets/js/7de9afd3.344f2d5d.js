(self.webpackChunkproject_openubl=self.webpackChunkproject_openubl||[]).push([[9594],{3905:function(e,n,a){"use strict";a.d(n,{Zo:function(){return p},kt:function(){return m}});var t=a(67294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=t.createContext({}),d=function(e){var n=t.useContext(c),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},p=function(e){var n=d(e.components);return t.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(a),m=r,v=u["".concat(c,".").concat(m)]||u[m]||s[m]||i;return a?t.createElement(v,o(o({ref:n},p),{},{components:a})):t.createElement(v,o({ref:n},p))}));function m(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=a[d];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4063:function(e,n,a){"use strict";a.r(n),a.d(n,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var t=a(22122),r=a(19756),i=(a(67294),a(3905)),o={title:"Instalaci\xf3n"},l={unversionedId:"xbuilder/installation",id:"xbuilder/installation",isDocsHomePage:!1,title:"Instalaci\xf3n",description:"XBuilder puede ser usado y descargado desde el repositorio central de Maven. Las versiones pueden ser consultadas en:",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/04-xbuilder/02-installation.md",sourceDirName:"04-xbuilder",slug:"/xbuilder/installation",permalink:"/en/docs/xbuilder/installation",editUrl:"https://github.com/project-openubl/website/edit/master/docs/04-xbuilder/02-installation.md",version:"current",sidebarPosition:2,frontMatter:{title:"Instalaci\xf3n"},sidebar:"tutorialSidebar",previous:{title:"Introducci\xf3n",permalink:"/en/docs/xbuilder"},next:{title:"Conceptos b\xe1sicos",permalink:"/en/docs/xbuilder/concepts"}},c=[{value:"Maven",id:"maven",children:[]},{value:"Gradle",id:"gradle",children:[]},{value:"No uso Maven ni Gradle \xbfC\xf3mo instalar XBuilder?",id:"no-uso-maven-ni-gradle-\xbfc\xf3mo-instalar-xbuilder",children:[{value:"Ejemplo",id:"ejemplo",children:[]}]}],d={toc:c};function p(e){var n=e.components,a=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,t.Z)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"XBuilder puede ser usado y descargado desde el repositorio central de Maven. Las versiones pueden ser consultadas en:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://search.maven.org/artifact/io.github.project-openubl/xbuilder/"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/maven-central/v/io.github.project-openubl/xbuilder",alt:"Maven Central"}))),(0,i.kt)("h2",{id:"maven"},"Maven"),(0,i.kt)("p",null,"Si usas Maven: en tu archivo ",(0,i.kt)("inlineCode",{parentName:"p"},"pom.xml")," agrega:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>io.github.project-openubl</groupId>\n    <artifactId>xbuilder</artifactId>\n    <version>version</version>\n</dependency>\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Reemplaze ",(0,i.kt)("inlineCode",{parentName:"p"},"version")," por una versi\xf3n v\xe1lida."))),(0,i.kt)("h2",{id:"gradle"},"Gradle"),(0,i.kt)("p",null,"Si usas Gradle: en tu archivo ",(0,i.kt)("inlineCode",{parentName:"p"},"build.gradle")," agrega:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"compile group: 'io.github.project-openubl', name: 'xbuilder', version: 'version'\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Reemplaze ",(0,i.kt)("inlineCode",{parentName:"p"},"version")," por una versi\xf3n v\xe1lida."))),(0,i.kt)("h2",{id:"no-uso-maven-ni-gradle-\xbfc\xf3mo-instalar-xbuilder"},"No uso Maven ni Gradle \xbfC\xf3mo instalar XBuilder?"),(0,i.kt)("p",null,"Se recomienda que todo proyecto est\xe9 hecho usando Maven o Gradle ya que facilita y automatiza el proceso de descarga de dependencias. Te recomendamos:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Evaluar cambiar tu c\xf3digo y empezar a Maven o Gradle.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Si despu\xe9s de evaluar tu c\xf3digo llegas a la conclusi\xf3n de que no puedes usar Maven o Gradle entonces debes de descargar todas las dependencias de la libreria e incluirlas en tu proyecto.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Crea un archivo ",(0,i.kt)("inlineCode",{parentName:"p"},"pom.xml")," con el siguiente contenido:"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">\n    <modelVersion>4.0.0</modelVersion>\n\n    <groupId>mygroup</groupId>\n    <artifactId>myartifact</artifactId>\n    <version>1.0.0-SNAPSHOT</version>\n    <packaging>jar</packaging>\n\n    <name>My app</name>\n\n    <dependencies>\n        <dependency>\n            <groupId>io.github.project-openubl</groupId>\n            <artifactId>xbuilder</artifactId>\n            <version>UltimaVersion</version>\n        </dependency>\n    </dependencies>\n</project>\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Abre un terminal y ub\xedcate en la carpeta donde creaste el ",(0,i.kt)("inlineCode",{parentName:"li"},"pom.xml")),(0,i.kt)("li",{parentName:"ul"},"Ejecuta el comando:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"mvn dependency:copy-dependencies\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Se crear\xe1 una carpeta ",(0,i.kt)("inlineCode",{parentName:"li"},"target")," al costado de ",(0,i.kt)("inlineCode",{parentName:"li"},"pom.xml"),". Lo \xfanico que tienes que hacer es copiar todas las dependencias dentro de la carpeta ",(0,i.kt)("inlineCode",{parentName:"li"},"target/dependency")," a tu proyecto.")),(0,i.kt)("h3",{id:"ejemplo"},"Ejemplo"),(0,i.kt)("p",null,"Este ejemplo muestra c\xf3mo usar las dependencias sin Maven o Gradle en ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/xxsolracxx/project-xbuilder-xsender-NO-MAVEN-GRADLE"},"project-xbuilder-xsender-NO-MAVEN-GRADLE")))}p.isMDXComponent=!0}}]);