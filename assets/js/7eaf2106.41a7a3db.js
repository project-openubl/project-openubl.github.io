(self.webpackChunkproject_openubl=self.webpackChunkproject_openubl||[]).push([[6882],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>b});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,b=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(b,l(l({ref:t},u),{},{components:n})):r.createElement(b,l({ref:t},u))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(67294),a=n(86010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,l),hidden:n},t)}},65488:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var r=n(87462),a=n(67294),o=n(86010),l=n(72389),i=n(67392),s=n(7094),c=n(12466);const u={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function p(e){const{lazy:t,block:n,defaultValue:l,values:p,groupId:d,className:m}=e,b=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=p??b.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),f=(0,i.l)(h,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===l?l:l??b.find((e=>e.props.default))?.props.value??b[0].props.value;if(null!==v&&!h.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:g}=(0,s.U)(),[k,T]=(0,a.useState)(v),E=[],{blockElementScrollPositionUntilNextRender:O}=(0,c.o5)();if(null!=d){const e=y[d];null!=e&&e!==k&&h.some((t=>t.value===e))&&T(e)}const C=e=>{const t=e.currentTarget,n=E.indexOf(t),r=h[n].value;r!==k&&(O(t),T(r),null!=d&&g(d,String(r)))},I=e=>{let t=null;switch(e.key){case"Enter":C(e);break;case"ArrowRight":{const n=E.indexOf(e.currentTarget)+1;t=E[n]??E[0];break}case"ArrowLeft":{const n=E.indexOf(e.currentTarget)-1;t=E[n]??E[E.length-1];break}}t?.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",u.tabList)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},m)},h.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,key:t,ref:e=>E.push(e),onKeyDown:I,onClick:C},l,{className:(0,o.Z)("tabs__item",u.tabItem,l?.className,{"tabs__item--active":k===t})}),n??t)}))),t?(0,a.cloneElement)(b.filter((e=>e.props.value===k))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==k})))))}function d(e){const t=(0,l.Z)();return a.createElement(p,(0,r.Z)({key:String(t)},e))}},46300:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var r=n(87462),a=n(67294),o=n(86010),l=n(19521),i=(n(61793),n(72933)),s=n(49009),c=n(28084);function u(e){const t=(0,c.OD)("docusaurus-plugin-redoc");return e?t?.[e]:Object.values(t??{})?.[0]}const p=e=>{let{id:t,example:n,pointer:c,...p}=e;const d=u(t),{store:m}=(0,s.U)(d);return(0,a.useEffect)((()=>{m.menu.dispose()}),[m]),a.createElement(l.ThemeProvider,{theme:m.options.theme},a.createElement("div",{className:(0,o.Z)(["redocusaurus","redocusaurus-schema",n?null:"hide-example"])},a.createElement(i.SchemaDefinition,(0,r.Z)({parser:m.spec.parser,options:m.options,schemaRef:c},p))))};p.defaultProps={example:!1};const d=p},38174:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var r=n(87462),a=(n(67294),n(3905)),o=n(65488),l=n(85162),i=n(46300);const s={title:"Integraci\xf3n API"},c=void 0,u={unversionedId:"searchpe/api-integration",id:"searchpe/api-integration",title:"Integraci\xf3n API",description:"Cualquier software puede consumir Searchpe a trav\xe9z de REST.",source:"@site/docs/06-searchpe/06-api-integration.mdx",sourceDirName:"06-searchpe",slug:"/searchpe/api-integration",permalink:"/docs/searchpe/api-integration",draft:!1,editUrl:"https://github.com/project-openubl/website/tree/master/docs/06-searchpe/06-api-integration.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Integraci\xf3n API"},sidebar:"tutorialSidebar",previous:{title:"Seguridad",permalink:"/docs/searchpe/security"},next:{title:"Introducci\xf3n",permalink:"/docs/ublhub"}},p={},d=[{value:"API",id:"api",level:2},{value:"Consumo del API",id:"consumo-del-api",level:2},{value:"Consulta DNI/RUC",id:"consulta-dniruc",level:3}],m={toc:d},b="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(b,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Cualquier software puede consumir Searchpe a trav\xe9z de REST."),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)("p",null,"Puedes ver todos los REST endpoint disponibles en:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{href:"/api/searchpe",target:"_blank"},"Openapi"))),(0,a.kt)("h2",{id:"consumo-del-api"},"Consumo del API"),(0,a.kt)("p",null,"Puedes utilizar cualquier lenguage de programaci\xf3n para consumir el API de Searchpe lo \xfanico que necesitas tener en cuenta es siempre enviar tus credenciales en cada petici\xf3n tal y como se explica en la secci\xf3n ",(0,a.kt)("a",{parentName:"p",href:"./security"},"Seguridad"),"."),(0,a.kt)("h3",{id:"consulta-dniruc"},"Consulta DNI/RUC"),(0,a.kt)("p",null,"Probablemente el endpoint m\xe1s importante es ",(0,a.kt)("inlineCode",{parentName:"p"},"/api/contribuyentes/{numeroDocumento}")," ya que este es usado para consultar personas natural o jur\xeddicas a trav\xe9z de su n\xfamero de DNI o RUC."),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"javascript",label:"Javascript",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'fetch(\'http://localhost:8180/api/contribuyentes/{numeroDocumento}\', {\n  method: "GET",\n  headers: {\n    "Content-type": "application/json",\n    "Authorization": "Basic bXlVc2VybmFtZTpteVBhc3N3b3Jk",\n  }\n})\n.then(response => console.log(response));\n.catch(error => console.log(error));\n'))),(0,a.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'HttpClient client = HttpClients.custom().build();\nHttpUriRequest request = RequestBuilder.get()\n  .setUri("http://localhost:8180/api/contribuyentes/{numeroDocumento}")\n  .setHeader("Content-type", "application/json")\n  .setHeader("Authorization", "Basic bXlVc2VybmFtZTpteVBhc3N3b3Jk")\n  .build();\nclient.execute(request);\n'))),(0,a.kt)(l.Z,{value:"php",label:"PHP",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"$httpClient = HttpClient::create();\n$response = $httpClient->request('GET', 'http://localhost:8180/api/contribuyentes/{numeroDocumento}', [\n    'headers' => [\n        'Content-type' => 'application/json',\n        'Authorization' => 'Basic bXlVc2VybmFtZTpteVBhc3N3b3Jk'\n    ]\n]);\n")))),(0,a.kt)(i.Z,{id:"searchpe",pointer:"#/components/schemas/ContribuyenteDto",example:!0,mdxType:"ApiSchema"}))}h.isMDXComponent=!0},26242:()=>{},11314:()=>{},67251:()=>{},99018:()=>{},43044:()=>{},3408:()=>{},35126:()=>{}}]);