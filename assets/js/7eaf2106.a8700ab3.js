(self.webpackChunkproject_openubl=self.webpackChunkproject_openubl||[]).push([[6882],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,u(u({ref:t},s),{},{components:n})):r.createElement(f,u({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,u=new Array(o);u[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,u[1]=i;for(var c=2;c<o;c++)u[c]=n[c];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(67294),a=n(86010),o="tabItem_Ymn6";function u(e){var t=e.children,n=e.hidden,u=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,u),hidden:n},t)}},65488:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r=n(83117),a=n(67294),o=n(86010),u=n(72389),i=n(67392),l=n(7094),c=n(12466),s="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,n,u=e.lazy,d=e.block,m=e.defaultValue,f=e.values,v=e.groupId,b=e.className,h=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=f?f:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,i.l)(y,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===m?m:null!=(t=null!=m?m:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:h[0].props.value;if(null!==k&&!y.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var T=(0,l.U)(),E=T.tabGroupChoices,O=T.setTabGroupChoices,C=(0,a.useState)(k),N=C[0],P=C[1],j=[],w=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var x=E[v];null!=x&&x!==N&&y.some((function(e){return e.value===x}))&&P(x)}var I=function(e){var t=e.currentTarget,n=j.indexOf(t),r=y[n].value;r!==N&&(w(t),P(r),null!=v&&O(v,String(r)))},Z=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,a=j.indexOf(e.currentTarget)+1;n=null!=(r=j[a])?r:j[0];break;case"ArrowLeft":var o,u=j.indexOf(e.currentTarget)-1;n=null!=(o=j[u])?o:j[j.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",s)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},b)},y.map((function(e){var t=e.value,n=e.label,u=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:function(e){return j.push(e)},onKeyDown:Z,onFocus:I,onClick:I},u,{className:(0,o.Z)("tabs__item",p,null==u?void 0:u.className,{"tabs__item--active":N===t})}),null!=n?n:t)}))),u?(0,a.cloneElement)(h.filter((function(e){return e.props.value===N}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},h.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function m(e){var t=(0,u.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}},46300:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r=n(83117),a=n(80102),o=n(67294),u=n(86010),i=n(32125),l=(n(61793),n(72933)),c=n(49009),s=n(28084);function p(e){var t,n=(0,s.OD)("docusaurus-plugin-redoc");return e?null==n?void 0:n[e]:null==(t=Object.values(null!=n?n:{}))?void 0:t[0]}var d=["id","example","pointer"],m=function(e){var t=e.id,n=e.example,s=e.pointer,m=(0,a.Z)(e,d),f=p(t),v=(0,c.U)(f),b=v.store,h=v.darkStore,y=v.lightStore;return(0,o.useEffect)((function(){y.menu.dispose(),h.menu.dispose()}),[y,h]),o.createElement(i.ThemeProvider,{theme:b.options.theme},o.createElement("div",{className:(0,u.Z)(["redocusaurus","redocusaurus-schema",n?null:"hide-example"])},o.createElement(l.SchemaDefinition,(0,r.Z)({parser:b.spec.parser,options:b.options,schemaRef:s},m))))};m.defaultProps={example:!1};var f=m},38174:function(e,t,n){"use strict";n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return b},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return f}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),u=n(65488),i=n(85162),l=n(46300),c=["components"],s={title:"Integraci\xf3n API"},p=void 0,d={unversionedId:"searchpe/api-integration",id:"searchpe/api-integration",title:"Integraci\xf3n API",description:"Cualquier software puede consumir Searchpe a trav\xe9z de REST.",source:"@site/docs/06-searchpe/06-api-integration.mdx",sourceDirName:"06-searchpe",slug:"/searchpe/api-integration",permalink:"/docs/searchpe/api-integration",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/06-searchpe/06-api-integration.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Integraci\xf3n API"},sidebar:"tutorialSidebar",previous:{title:"Seguridad",permalink:"/docs/searchpe/security"}},m={},f=[{value:"API",id:"api",level:2},{value:"Consumo del API",id:"consumo-del-api",level:2},{value:"Consulta DNI/RUC",id:"consulta-dniruc",level:3}],v={toc:f};function b(e){var t=e.components,n=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Cualquier software puede consumir Searchpe a trav\xe9z de REST."),(0,o.kt)("h2",{id:"api"},"API"),(0,o.kt)("p",null,"Puedes ver todos los REST endpoint disponibles en:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{href:"/api/searchpe",target:"_blank"},"Openapi"))),(0,o.kt)("h2",{id:"consumo-del-api"},"Consumo del API"),(0,o.kt)("p",null,"Puedes utilizar cualquier lenguage de programaci\xf3n para consumir el API de Searchpe lo \xfanico que necesitas tener en cuenta es siempre enviar tus credenciales en cada petici\xf3n tal y como se explica en la secci\xf3n ",(0,o.kt)("a",{parentName:"p",href:"./security"},"Seguridad"),"."),(0,o.kt)("h3",{id:"consulta-dniruc"},"Consulta DNI/RUC"),(0,o.kt)("p",null,"Probablemente el endpoint m\xe1s importante es ",(0,o.kt)("inlineCode",{parentName:"p"},"/api/contribuyentes/{numeroDocumento}")," ya que este es usado para consultar personas natural o jur\xeddicas a trav\xe9z de su n\xfamero de DNI o RUC."),(0,o.kt)(u.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"javascript",label:"Javascript",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'fetch(\'http://localhost:8180/api/contribuyentes/{numeroDocumento}\', {\n  method: "GET",\n  headers: {\n    "Content-type": "application/json",\n    "Authorization": "Basic bXlVc2VybmFtZTpteVBhc3N3b3Jk",\n  }\n})\n.then(response => console.log(response));\n.catch(error => console.log(error));\n'))),(0,o.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'HttpClient client = HttpClients.custom().build();\nHttpUriRequest request = RequestBuilder.get()\n  .setUri("http://localhost:8180/api/contribuyentes/{numeroDocumento}")\n  .setHeader("Content-type", "application/json")\n  .setHeader("Authorization", "Basic bXlVc2VybmFtZTpteVBhc3N3b3Jk")\n  .build();\nclient.execute(request);\n'))),(0,o.kt)(i.Z,{value:"php",label:"PHP",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"$httpClient = HttpClient::create();\n$response = $httpClient->request('GET', 'http://localhost:8180/api/contribuyentes/{numeroDocumento}', [\n    'headers' => [\n        'Content-type' => 'application/json',\n        'Authorization' => 'Basic bXlVc2VybmFtZTpteVBhc3N3b3Jk'\n    ]\n]);\n")))),(0,o.kt)(l.Z,{pointer:"#/components/schemas/ContribuyenteDto",example:!0,mdxType:"ApiSchema"}))}b.isMDXComponent=!0},26242:function(){},11314:function(){},67251:function(){},99018:function(){},3408:function(){},35126:function(){}}]);