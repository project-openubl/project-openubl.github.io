(self.webpackChunkproject_openubl=self.webpackChunkproject_openubl||[]).push([[6882],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>b});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,b=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(b,l(l({ref:t},u),{},{components:n})):r.createElement(b,l({ref:t},u))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:a,l[1]=s;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(7294),a=n(6010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:n},t)}},5488:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var r=n(7462),a=n(7294),o=n(6010),l=n(2389),s=n(7392),i=n(7094),c=n(2466);const u="tabList__CuJ",p="tabItem_LNqP";function d(e){const{lazy:t,block:n,defaultValue:l,values:d,groupId:m,className:b}=e,h=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=d??h.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),v=(0,s.l)(f,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===l?l:l??h.find((e=>e.props.default))?.props.value??h[0].props.value;if(null!==y&&!f.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:k}=(0,i.U)(),[T,E]=(0,a.useState)(y),O=[],{blockElementScrollPositionUntilNextRender:C}=(0,c.o5)();if(null!=m){const e=g[m];null!=e&&e!==T&&f.some((t=>t.value===e))&&E(e)}const N=e=>{const t=e.currentTarget,n=O.indexOf(t),r=f[n].value;r!==T&&(C(t),E(r),null!=m&&k(m,String(r)))},P=e=>{let t=null;switch(e.key){case"Enter":N(e);break;case"ArrowRight":{const n=O.indexOf(e.currentTarget)+1;t=O[n]??O[0];break}case"ArrowLeft":{const n=O.indexOf(e.currentTarget)-1;t=O[n]??O[O.length-1];break}}t?.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},b)},f.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>O.push(e),onKeyDown:P,onClick:N},l,{className:(0,o.Z)("tabs__item",p,l?.className,{"tabs__item--active":T===t})}),n??t)}))),t?(0,a.cloneElement)(h.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function m(e){const t=(0,l.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}},6317:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>v,default:()=>E,frontMatter:()=>f,metadata:()=>y,toc:()=>k});var r=n(7462),a=n(7294),o=n(3905),l=n(5488),s=n(5162),i=n(6010),c=n(9521),u=(n(1793),n(2933)),p=n(9009),d=n(8084);function m(e){const t=(0,d.OD)("docusaurus-plugin-redoc");return e?t?.[e]:Object.values(t??{})?.[0]}const b=e=>{let{id:t,example:n,pointer:o,...l}=e;const s=m(t),{store:d}=(0,p.U)(s);return(0,a.useEffect)((()=>{d.menu.dispose()}),[d]),a.createElement(c.ThemeProvider,{theme:d.options.theme},a.createElement("div",{className:(0,i.Z)(["redocusaurus","redocusaurus-schema",n?null:"hide-example"])},a.createElement(u.SchemaDefinition,(0,r.Z)({parser:d.spec.parser,options:d.options,schemaRef:o},l))))};b.defaultProps={example:!1};const h=b,f={title:"Integraci\xf3n API"},v=void 0,y={unversionedId:"searchpe/api-integration",id:"searchpe/api-integration",title:"Integraci\xf3n API",description:"Cualquier software puede consumir Searchpe a trav\xe9z de REST.",source:"@site/docs/06-searchpe/06-api-integration.mdx",sourceDirName:"06-searchpe",slug:"/searchpe/api-integration",permalink:"/docs/searchpe/api-integration",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/06-searchpe/06-api-integration.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Integraci\xf3n API"},sidebar:"tutorialSidebar",previous:{title:"Seguridad",permalink:"/docs/searchpe/security"}},g={},k=[{value:"API",id:"api",level:2},{value:"Consumo del API",id:"consumo-del-api",level:2},{value:"Consulta DNI/RUC",id:"consulta-dniruc",level:3}],T={toc:k};function E(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},T,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Cualquier software puede consumir Searchpe a trav\xe9z de REST."),(0,o.kt)("h2",{id:"api"},"API"),(0,o.kt)("p",null,"Puedes ver todos los REST endpoint disponibles en:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{href:"/api/searchpe",target:"_blank"},"Openapi"))),(0,o.kt)("h2",{id:"consumo-del-api"},"Consumo del API"),(0,o.kt)("p",null,"Puedes utilizar cualquier lenguage de programaci\xf3n para consumir el API de Searchpe lo \xfanico que necesitas tener en cuenta es siempre enviar tus credenciales en cada petici\xf3n tal y como se explica en la secci\xf3n ",(0,o.kt)("a",{parentName:"p",href:"./security"},"Seguridad"),"."),(0,o.kt)("h3",{id:"consulta-dniruc"},"Consulta DNI/RUC"),(0,o.kt)("p",null,"Probablemente el endpoint m\xe1s importante es ",(0,o.kt)("inlineCode",{parentName:"p"},"/api/contribuyentes/{numeroDocumento}")," ya que este es usado para consultar personas natural o jur\xeddicas a trav\xe9z de su n\xfamero de DNI o RUC."),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"javascript",label:"Javascript",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'fetch(\'http://localhost:8180/api/contribuyentes/{numeroDocumento}\', {\n  method: "GET",\n  headers: {\n    "Content-type": "application/json",\n    "Authorization": "Basic bXlVc2VybmFtZTpteVBhc3N3b3Jk",\n  }\n})\n.then(response => console.log(response));\n.catch(error => console.log(error));\n'))),(0,o.kt)(s.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'HttpClient client = HttpClients.custom().build();\nHttpUriRequest request = RequestBuilder.get()\n  .setUri("http://localhost:8180/api/contribuyentes/{numeroDocumento}")\n  .setHeader("Content-type", "application/json")\n  .setHeader("Authorization", "Basic bXlVc2VybmFtZTpteVBhc3N3b3Jk")\n  .build();\nclient.execute(request);\n'))),(0,o.kt)(s.Z,{value:"php",label:"PHP",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"$httpClient = HttpClient::create();\n$response = $httpClient->request('GET', 'http://localhost:8180/api/contribuyentes/{numeroDocumento}', [\n    'headers' => [\n        'Content-type' => 'application/json',\n        'Authorization' => 'Basic bXlVc2VybmFtZTpteVBhc3N3b3Jk'\n    ]\n]);\n")))),(0,o.kt)(h,{id:"searchpe",pointer:"#/components/schemas/ContribuyenteDto",example:!0,mdxType:"ApiSchema"}))}E.isMDXComponent=!0},6242:()=>{},1314:()=>{},7251:()=>{},9018:()=>{},3044:()=>{},3408:()=>{},5126:()=>{}}]);