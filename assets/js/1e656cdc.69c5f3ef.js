"use strict";(self.webpackChunkproject_openubl=self.webpackChunkproject_openubl||[]).push([[6425],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,b=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(b,c(c({ref:t},u),{},{components:n})):r.createElement(b,c({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var s=2;s<i;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5077:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return p}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),c=["components"],o={title:"Kubernetes"},l=void 0,s={unversionedId:"searchpe/installation/kubernetes",id:"searchpe/installation/kubernetes",title:"Kubernetes",description:"Para poder desplegar Searchpe, puedes cualquier distribuci\xf3n de Kubernetes como por ejemplo Minikube, Openshift, etc.",source:"@site/docs/06-searchpe/03-installation/kubernetes.md",sourceDirName:"06-searchpe/03-installation",slug:"/searchpe/installation/kubernetes",permalink:"/docs/searchpe/installation/kubernetes",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/06-searchpe/03-installation/kubernetes.md",tags:[],version:"current",frontMatter:{title:"Kubernetes"},sidebar:"tutorialSidebar",previous:{title:"Java",permalink:"/docs/searchpe/installation/java"},next:{title:"Consola web",permalink:"/docs/searchpe/web-console"}},u={},p=[{value:"Requisitos",id:"requisitos",level:2},{value:"Inicia Minikube",id:"inicia-minikube",level:2},{value:"Crea un Namespace",id:"crea-un-namespace",level:2},{value:"Instala Searchpe",id:"instala-searchpe",level:2},{value:"Verifica tus pods",id:"verifica-tus-pods",level:2},{value:"Accede a Searchpe",id:"accede-a-searchpe",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Para poder desplegar Searchpe, puedes cualquier distribuci\xf3n de Kubernetes como por ejemplo ",(0,i.kt)("a",{parentName:"p",href:"https://minikube.sigs.k8s.io/docs/start/"},"Minikube"),", ",(0,i.kt)("a",{parentName:"p",href:"https://docs.openshift.com/"},"Openshift"),", etc."),(0,i.kt)("p",null,"Para este ejemplo usaremos Minikube aunque tambien aplica a cualquier distribuci\xf3n de Kubernetes que tengas."),(0,i.kt)("h2",{id:"requisitos"},"Requisitos"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://minikube.sigs.k8s.io/docs/start/"},"Minikube")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/"},"Kubectl"))),(0,i.kt)("h2",{id:"inicia-minikube"},"Inicia Minikube"),(0,i.kt)("p",null,"Ejecuta el comando:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"minikube start\n")),(0,i.kt)("h2",{id:"crea-un-namespace"},"Crea un Namespace"),(0,i.kt)("p",null,"Crea un namespace donde se instalar\xe1 Searchpe:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl create ns openubl\n")),(0,i.kt)("h2",{id:"instala-searchpe"},"Instala Searchpe"),(0,i.kt)("p",null,"Utiliza un archivo .yaml pre configurado para instalar Searchpe:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -n openubl -f https://raw.githubusercontent.com/project-openubl/searchpe/master/src/main/kubernetes/searchpe.yml\n")),(0,i.kt)("h2",{id:"verifica-tus-pods"},"Verifica tus pods"),(0,i.kt)("p",null,"Verifica que todos tus Pods funcionen correctamente:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get pods -n openubl\n")),(0,i.kt)("h2",{id:"accede-a-searchpe"},"Accede a Searchpe"),(0,i.kt)("p",null,"Expone el Service de Searchpe en tu computador local:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"minikube service searchpe -n openubl\n")))}m.isMDXComponent=!0}}]);