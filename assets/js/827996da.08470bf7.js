(self.webpackChunkproject_openubl=self.webpackChunkproject_openubl||[]).push([[2959],{3905:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=s(r),b=a,m=p["".concat(i,".").concat(b)]||p[b]||d[b]||o;return r?n.createElement(m,l(l({ref:t},c),{},{components:r})):n.createElement(m,l({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=b;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u[p]="string"==typeof e?e:a,l[1]=u;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},5162:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var n=r(7294),a=r(6010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:r,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:r},t)}},5488:(e,t,r)=>{"use strict";r.d(t,{Z:()=>b});var n=r(7462),a=r(7294),o=r(6010),l=r(2389),u=r(7392),i=r(7094),s=r(2466);const c="tabList__CuJ",p="tabItem_LNqP";function d(e){const{lazy:t,block:r,defaultValue:l,values:d,groupId:b,className:m}=e,f=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=d??f.map((e=>{let{props:{value:t,label:r,attributes:n}}=e;return{value:t,label:r,attributes:n}})),h=(0,u.l)(v,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===l?l:l??f.find((e=>e.props.default))?.props.value??f[0].props.value;if(null!==g&&!v.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:O}=(0,i.U)(),[w,E]=(0,a.useState)(g),k=[],{blockElementScrollPositionUntilNextRender:P}=(0,s.o5)();if(null!=b){const e=y[b];null!=e&&e!==w&&v.some((t=>t.value===e))&&E(e)}const T=e=>{const t=e.currentTarget,r=k.indexOf(t),n=v[r].value;n!==w&&(P(t),E(n),null!=b&&O(b,String(n)))},j=e=>{let t=null;switch(e.key){case"Enter":T(e);break;case"ArrowRight":{const r=k.indexOf(e.currentTarget)+1;t=k[r]??k[0];break}case"ArrowLeft":{const r=k.indexOf(e.currentTarget)-1;t=k[r]??k[k.length-1];break}}t?.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},m)},v.map((e=>{let{value:t,label:r,attributes:l}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>k.push(e),onKeyDown:j,onClick:T},l,{className:(0,o.Z)("tabs__item",p,l?.className,{"tabs__item--active":w===t})}),r??t)}))),t?(0,a.cloneElement)(f.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function b(e){const t=(0,l.Z)();return a.createElement(d,(0,n.Z)({key:String(t)},e))}},6300:(e,t,r)=>{"use strict";r.d(t,{Z:()=>d});var n=r(7462),a=r(7294),o=r(6010),l=r(9521),u=(r(1793),r(2933)),i=r(9009),s=r(8084);function c(e){const t=(0,s.OD)("docusaurus-plugin-redoc");return e?t?.[e]:Object.values(t??{})?.[0]}const p=e=>{let{id:t,example:r,pointer:s,...p}=e;const d=c(t),{store:b}=(0,i.U)(d);return(0,a.useEffect)((()=>{b.menu.dispose()}),[b]),a.createElement(l.ThemeProvider,{theme:b.options.theme},a.createElement("div",{className:(0,o.Z)(["redocusaurus","redocusaurus-schema",r?null:"hide-example"])},a.createElement(u.SchemaDefinition,(0,n.Z)({parser:b.spec.parser,options:b.options,schemaRef:s},p))))};p.defaultProps={example:!1};const d=p},800:(e,t,r)=>{"use strict";r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>u,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));r(5488),r(5162),r(6300);const o={title:"Integraci\xf3n API"},l=void 0,u={unversionedId:"ublhub/api-integration",id:"ublhub/api-integration",title:"Integraci\xf3n API",description:"Cualquier software puede consumir Ublhub a trav\xe9z de REST.",source:"@site/docs/07-ublhub/06-api-integration.mdx",sourceDirName:"07-ublhub",slug:"/ublhub/api-integration",permalink:"/docs/ublhub/api-integration",draft:!1,editUrl:"https://github.com/project-openubl/website/tree/master/docs/07-ublhub/06-api-integration.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Integraci\xf3n API"},sidebar:"tutorialSidebar",previous:{title:"Consola web",permalink:"/docs/ublhub/web-console"}},i={},s=[{value:"API",id:"api",level:2},{value:"Consumo del API",id:"consumo-del-api",level:2}],c={toc:s};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Cualquier software puede consumir Ublhub a trav\xe9z de REST."),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)("p",null,"Puedes ver todos los REST endpoint disponibles en:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{href:"/api/ublhub",target:"_blank"},"Openapi"))),(0,a.kt)("h2",{id:"consumo-del-api"},"Consumo del API"),(0,a.kt)("p",null,"Puedes utilizar cualquier lenguage de programaci\xf3n para consumir el API de Ublhub."))}p.isMDXComponent=!0},6242:()=>{},1314:()=>{},7251:()=>{},9018:()=>{},3044:()=>{},3408:()=>{},5126:()=>{}}]);