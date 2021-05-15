(self.webpackChunkproject_openubl=self.webpackChunkproject_openubl||[]).push([[3054],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return s},kt:function(){return f}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,c=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=u(t),f=i,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||l;return t?r.createElement(m,o(o({ref:n},s),{},{components:t})):r.createElement(m,o({ref:n},s))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,o=new Array(l);o[0]=d;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var u=2;u<l;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},91820:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return o},metadata:function(){return a},toc:function(){return c},default:function(){return s}});var r=t(22122),i=t(19756),l=(t(67294),t(3905)),o={title:"SendBill"},a={unversionedId:"xsender/billService/sendBill",id:"xsender/billService/sendBill",isDocsHomePage:!1,title:"SendBill",description:"Used to send:",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/05-xsender/06-billService/sendBill.md",sourceDirName:"05-xsender/06-billService",slug:"/xsender/billService/sendBill",permalink:"/en/docs/xsender/billService/sendBill",editUrl:"https://github.com/project-openubl/website/edit/master/docs/05-xsender/06-billService/sendBill.md",version:"current",frontMatter:{title:"SendBill"},sidebar:"tutorialSidebar",previous:{title:"GetStatus",permalink:"/en/docs/xsender/billService/getStatus"},next:{title:"SendSummary",permalink:"/en/docs/xsender/billService/sendSummary"}},c=[{value:"Send File",id:"send-file",children:[]},{value:"Send byte []",id:"send-byte-",children:[]}],u={toc:c};function s(e){var n=e.components,t=(0,i.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Used to send:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Invoices (bolet/invoice)."),(0,l.kt)("li",{parentName:"ul"},"Credit notes (credit notes)."),(0,l.kt)("li",{parentName:"ul"},"Debit notes (debit notes)."),(0,l.kt)("li",{parentName:"ul"},"Despatch documents (referral guides)."),(0,l.kt)("li",{parentName:"ul"},"Perceptions (perceptions)."),(0,l.kt)("li",{parentName:"ul"},"Retentions (holds).")),(0,l.kt)("h2",{id:"send-file"},"Send File"),(0,l.kt)("p",null,"Define your URL and send the file:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'ServiceConfig config = new ServiceConfig.Builder ()\n    .url("https: //e-beta.sunat.gob.pe/ol-ti-itcpfegem-beta/billService ")\n    .username (" 12345678959MODDATOS")\n    .password ("MODDATA")\n    .build ();\n\nFile file = new File ("12345678959-01-F001-00000001.xml");\nBillServiceModel result = BillServiceManager.sendBill (file, config);\n')),(0,l.kt)("h2",{id:"send-byte-"},"Send byte []"),(0,l.kt)("p",null,"Define your URL and send the file:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'ServiceConfig config = new ServiceConfig.Builder ()\n    .url("https: //e-beta.sunat.gob.pe/ol-ti-itcpfegem-beta/billService ")\n    .username (" 12345678959MODDATOS")\n    .password ("MODDATA")\n    .build ();\n\nbyte [] file; // define your file here;\nString fileName = "12345678959-01-F001-00000001.xml";\nBillServiceModel result = BillServiceManager.sendBill (fileName, file, config);\n')),(0,l.kt)("p",null,":::tip Remember that the name of your file must follow the pattern ",(0,l.kt)("inlineCode",{parentName:"p"},"ruc-codesComprobante-serie-number.xml")," :::"))}s.isMDXComponent=!0}}]);