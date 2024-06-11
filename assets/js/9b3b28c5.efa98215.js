"use strict";(self.webpackChunkproject_openubl=self.webpackChunkproject_openubl||[]).push([[1003],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>g});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),c=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(o.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=r,g=d["".concat(o,".").concat(m)]||d[m]||u[m]||i;return t?a.createElement(g,s(s({ref:n},p),{},{components:t})):a.createElement(g,s({ref:n},p))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=m;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l[d]="string"==typeof e?e:r,s[1]=l;for(var c=2;c<i;c++)s[c]=t[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2206:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=t(58168),r=(t(96540),t(15680));const i={title:"Enviar XML",description:"Envia XMLs a la SUNAT"},s=void 0,l={unversionedId:"xsender/send-xml",id:"xsender/send-xml",title:"Enviar XML",description:"Envia XMLs a la SUNAT",source:"@site/docs/05-xsender/03-send-xml.md",sourceDirName:"05-xsender",slug:"/xsender/send-xml",permalink:"/docs/xsender/send-xml",draft:!1,editUrl:"https://github.com/project-openubl/website/tree/master/docs/05-xsender/03-send-xml.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Enviar XML",description:"Envia XMLs a la SUNAT"},sidebar:"tutorialSidebar",previous:{title:"Instalaci\xf3n",permalink:"/docs/xsender/installation"},next:{title:"Valida y consulta",permalink:"/docs/xsender/validate-and-check"}},o={},c=[{value:"Configura URLs y credenciales",id:"configura-urls-y-credenciales",level:2},{value:"Analiza el XML que deseas enviar",id:"analiza-el-xml-que-deseas-enviar",level:2},{value:"Enviar XML",id:"enviar-xml",level:2},{value:"Consultar Ticket",id:"consultar-ticket",level:3},{value:"Obtener access token para el env\xedo de guias de remisi\xf3n",id:"obtener-access-token-para-el-env\xedo-de-guias-de-remisi\xf3n",level:2}],p={toc:c},d="wrapper";function u(e){let{components:n,...t}=e;return(0,r.yg)(d,(0,a.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Este tutorial sirve para enviar los siguientes comprobantes de pago:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Factura, Boleta"),(0,r.yg)("li",{parentName:"ul"},"Notas de cr\xe9dito y d\xe9bito"),(0,r.yg)("li",{parentName:"ul"},"Bajas y res\xfamenes diarios"),(0,r.yg)("li",{parentName:"ul"},"Percepciones y retenciones"),(0,r.yg)("li",{parentName:"ul"},"Guias de remision")),(0,r.yg)("h2",{id:"configura-urls-y-credenciales"},"Configura URLs y credenciales"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},'CompanyURLs companyURLs = CompanyURLs.builder()\n    .invoice("https://e-beta.sunat.gob.pe/ol-ti-itcpfegem-beta/billService")\n    .perceptionRetention("https://e-beta.sunat.gob.pe/ol-ti-itemision-otroscpe-gem-beta/billService")\n    .despatch("https://api-cpe.sunat.gob.pe/v1/contribuyente/gem")\n    .build();\n\nCompanyCredentials credentials = CompanyCredentials.builder()\n    .username("12345678959MODDATOS")\n    .password("MODDATOS")\n    .token("accessTokenParaGuiasDeRemision")\n    .build();\n')),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("p",{parentName:"admonition"},"XSender soporta el env\xedo de guias de remisi\xf3n. El ",(0,r.yg)("inlineCode",{parentName:"p"},"token")," descrito en la clase ",(0,r.yg)("inlineCode",{parentName:"p"},"CompanyCredentials")," representa el access token para el envio de guias de remisi\xf3n. Lee ",(0,r.yg)("a",{parentName:"p",href:"#obtener-access-token-para-el-env%C3%ADo-de-guias-de-remisi%C3%B3n"},"Obtener access token"))),(0,r.yg)("h2",{id:"analiza-el-xml-que-deseas-enviar"},"Analiza el XML que deseas enviar"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},'Path miXML = Paths.get("/home/mi_archivo_xml"); // El XML puede ser "Path, InputStream, o bytes[]"\nBillServiceFileAnalyzer fileAnalyzer = new BillServiceXMLFileAnalyzer(miXML, companyURLs);\n\n// Archivo ZIP\nZipFile zipFile = fileAnalyzer.getZipFile();\n\n// Configuraci\xf3n para enviar xml y Configuraci\xf3n para consultar ticket\nBillServiceDestination fileDestination = fileAnalyzer.getSendFileDestination();\nBillServiceDestination ticketDestination = fileAnalyzer.getVerifyTicketDestination();\n')),(0,r.yg)("h2",{id:"enviar-xml"},"Enviar XML"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"CamelContext camelContext = StandaloneCamel.getInstance()\n    .getMainCamel()\n    .getCamelContext();\n\nCamelData camelData = CamelUtils.getBillServiceCamelData(zipFile, fileDestination, credentials);\n\nSunatResponse sendFileSunatResponse = camelContext.createProducerTemplate()\n    .requestBodyAndHeaders(\n        Constants.XSENDER_BILL_SERVICE_URI,\n        camelData.getBody(),\n        camelData.getHeaders(),\n        SunatResponse.class\n    );\n")),(0,r.yg)("h3",{id:"consultar-ticket"},"Consultar Ticket"),(0,r.yg)("p",null,"Si enviaste una baja, resumen diario, o guia de remisi\xf3n, entonces puedes consultar el estado de tu ticket."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"String ticket = sendFileSunatResponse.getSunat().getTicket();\nCamelData camelTicketData = CamelUtils.getBillServiceCamelData(ticket, ticketDestination, credentials);\n\nSunatResponse verifyTicketSunatResponse = camelContext.createProducerTemplate()\n    .requestBodyAndHeaders(\n        Constants.XSENDER_BILL_SERVICE_URI,\n        camelTicketData.getBody(),\n        camelTicketData.getHeaders(),\n        SunatResponse.class\n    );\n")),(0,r.yg)("h2",{id:"obtener-access-token-para-el-env\xedo-de-guias-de-remisi\xf3n"},"Obtener access token para el env\xedo de guias de remisi\xf3n"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},'// Access token creado anteriormente (NULL si es la primera vez que generas el token).\n// Si el token previo expir\xf3 entonces se genera uno nuevo.\n// Si el token no expir\xf3 se devuelve el token previo.\nResponseAccessTokenSuccessDto prevToken = null;\n\nString clientId = "myClientId";\n\nMap<String, Object> headers = Map.of(\n    HttpConstants.HTTP_URI, "https://api-cpe.sunat.gob.pe",\n    HttpConstants.HTTP_PATH, "/v1/clientessol/" + clientId + "/oauth2/token/"\n);\nObject body = List.of(prevToken, Map.of(\n    "grant_type", "password",\n    "scope", "https://api-cpe.sunat.gob.pe",\n    "client_id", clientId,\n    "client_secret", "mySecret",\n    "username", "12345678959MODDATOS",\n    "password", "MODDATOS"\n));\n\nResponseAccessTokenSuccessDto newToken = camelContext.createProducerTemplate()\n    .requestBodyAndHeaders(Constants.XSENDER_CREDENTIALS_API_URI, body, headers, ResponseAccessTokenSuccessDto.class);\n')))}u.isMDXComponent=!0}}]);