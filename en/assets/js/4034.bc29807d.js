(self.webpackChunkproject_openubl=self.webpackChunkproject_openubl||[]).push([[4034],{36742:function(e,n,t){"use strict";t.d(n,{Z:function(){return v}});var r=t(19756),o=t(67294),u=t(73727),i=t(52263),a=t(13919),l=t(10412),c=(0,o.createContext)({collectLink:function(){}}),s=t(44996),f=t(18780),d=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];var v=function(e){var n,t,v=e.isNavLink,p=e.to,m=e.href,g=e.activeClassName,h=e.isActive,b=e["data-noBrokenLinkCheck"],w=e.autoAddBaseUrl,y=void 0===w||w,E=(0,r.Z)(e,d),C=(0,i.Z)().siteConfig,P=C.trailingSlash,k=C.baseUrl,S=(0,s.C)().withBaseUrl,Z=(0,o.useContext)(c),O=p||m,I=(0,a.Z)(O),M=null==O?void 0:O.replace("pathname://",""),A=void 0!==M?(t=M,y&&function(e){return e.startsWith("/")}(t)?S(t):t):void 0;A&&I&&(A=(0,f.applyTrailingSlash)(A,{trailingSlash:P,baseUrl:k}));var D,R=(0,o.useRef)(!1),j=v?u.OL:u.rU,x=l.Z.canUseIntersectionObserver;(0,o.useEffect)((function(){return!x&&I&&null!=A&&window.docusaurus.prefetch(A),function(){x&&D&&D.disconnect()}}),[A,x,I]);var L=null!==(n=null==A?void 0:A.startsWith("#"))&&void 0!==n&&n,U=!A||!I||L;return A&&I&&!L&&!b&&Z.collectLink(A),U?o.createElement("a",Object.assign({href:A},O&&!I&&{target:"_blank",rel:"noopener noreferrer"},E)):o.createElement(j,Object.assign({},E,{onMouseEnter:function(){R.current||null==A||(window.docusaurus.preload(A),R.current=!0)},innerRef:function(e){var n,t;x&&e&&I&&(n=e,t=function(){null!=A&&window.docusaurus.prefetch(A)},(D=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(D.unobserve(n),D.disconnect(),t())}))}))).observe(n))},to:A||""},v&&{isActive:h,activeClassName:g}))}},24973:function(e,n,t){"use strict";t.d(n,{Z:function(){return v},I:function(){return d}});var r=t(67294),o=t(25108),u=/{\w+}/g,i="{}";function a(e,n){var t=[],o=e.replace(u,(function(e){var o=e.substr(1,e.length-2),u=null==n?void 0:n[o];if(void 0!==u){var a=r.isValidElement(u)?u:String(u);return t.push(a),i}return e}));return 0===t.length?e:t.every((function(e){return"string"==typeof e}))?o.split(i).reduce((function(e,n,r){var o;return e.concat(n).concat(null!==(o=t[r])&&void 0!==o?o:"")}),""):o.split(i).reduce((function(e,n,o){return[].concat(e,[r.createElement(r.Fragment,{key:o},n,t[o])])}),[])}function l(e){var n=e.children,t=e.values;if("string"!=typeof n)throw o.warn("Illegal <Interpolate> children",n),new Error("The Docusaurus <Interpolate> component only accept simple string values");return a(n,t)}var c=t(64644),s=t(25108);function f(e){var n,t=e.id,r=e.message;return null!==(n=c[null!=t?t:r])&&void 0!==n?n:r}function d(e,n){var t,r=e.message;return a(null!==(t=f({message:r,id:e.id}))&&void 0!==t?t:r,n)}function v(e){var n,t=e.children,o=e.id,u=e.values;if("string"!=typeof t)throw s.warn("Illegal <Translate> children",t),new Error("The Docusaurus <Translate> component only accept simple string values");var i=null!==(n=f({message:t,id:o}))&&void 0!==n?n:t;return r.createElement(l,{values:u},i)}},13919:function(e,n,t){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}t.d(n,{b:function(){return r},Z:function(){return o}})},44996:function(e,n,t){"use strict";t.d(n,{C:function(){return u},Z:function(){return i}});var r=t(52263),o=t(13919);function u(){var e=(0,r.Z)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,t=void 0===n?"/":n,u=e.url;return{withBaseUrl:function(e,n){return function(e,n,t,r){var u=void 0===r?{}:r,i=u.forcePrependBaseUrl,a=void 0!==i&&i,l=u.absolute,c=void 0!==l&&l;if(!t)return t;if(t.startsWith("#"))return t;if((0,o.b)(t))return t;if(a)return n+t;var s=t.startsWith(n)?t:n+t.replace(/^\//,"");return c?e+s:s}(u,t,e,n)}}}function i(e,n){return void 0===n&&(n={}),(0,u().withBaseUrl)(e,n)}},41217:function(e,n,t){"use strict";t.d(n,{Z:function(){return a}});var r=t(67294),o=t(99105),u=t(95840),i=t(44996);function a(e){var n=e.title,t=e.description,a=e.keywords,l=e.image,c=(0,u.LU)().image,s=(0,u.pe)(n),f=(0,i.Z)(l||c,{absolute:!0});return r.createElement(o.Z,null,n&&r.createElement("title",null,s),n&&r.createElement("meta",{property:"og:title",content:s}),t&&r.createElement("meta",{name:"description",content:t}),t&&r.createElement("meta",{property:"og:description",content:t}),a&&r.createElement("meta",{name:"keywords",content:Array.isArray(a)?a.join(","):a}),f&&r.createElement("meta",{property:"og:image",content:f}),f&&r.createElement("meta",{name:"twitter:image",content:f}))}},93783:function(e,n,t){"use strict";var r=t(67294),o=t(10412),u="desktop",i="mobile",a="ssr";function l(){return o.Z.canUseDOM?window.innerWidth>996?u:i:a}n.Z=function(){var e=(0,r.useState)((function(){return l()})),n=e[0],t=e[1];return(0,r.useEffect)((function(){if(o.Z.canUseDOM){return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e),clearTimeout(undefined)}}function e(){t(l())}}),[]),n}},95840:function(e,n,t){"use strict";t.d(n,{pl:function(){return we},zF:function(){return W},HX:function(){return g},PO:function(){return G},L5:function(){return le},Cv:function(){return te},Cn:function(){return $},kM:function(){return ve},WA:function(){return s},os:function(){return h},Mg:function(){return y},_f:function(){return f},bc:function(){return m},l5:function(){return v},nT:function(){return ye},uR:function(){return L},J:function(){return fe},Oh:function(){return de},be:function(){return Ee},SL:function(){return A},g8:function(){return ne},c2:function(){return I},D9:function(){return M},LU:function(){return o},pe:function(){return E}});var r=t(52263);function o(){return(0,r.Z)().siteConfig.themeConfig}var u=t(25108),i="localStorage";function a(e){if(void 0===e&&(e=i),"undefined"==typeof window)throw new Error("Browser storage is not available on Node.js/Docusaurus SSR process.");if("none"===e)return null;try{return window[e]}catch(t){return n=t,l||(u.warn("Docusaurus browser storage is not available.\nPossible reasons: running Docusaurus in an iframe, in an incognito browser session, or using too strict browser privacy settings.",n),l=!0),null}var n}var l=!1;var c={get:function(){return null},set:function(){},del:function(){}};var s=function(e,n){if("undefined"==typeof window)return function(e){function n(){throw new Error('Illegal storage API usage for storage key "'+e+'".\nDocusaurus storage APIs are not supposed to be called on the server-rendering process.\nPlease only call storage APIs in effects and event handlers.')}return{get:n,set:n,del:n}}(e);var t=a(null==n?void 0:n.persistence);return null===t?c:{get:function(){return t.getItem(e)},set:function(n){return t.setItem(e,n)},del:function(){return t.removeItem(e)}}};function f(e){void 0===e&&(e=i);var n=a(e);if(!n)return[];for(var t=[],r=0;r<n.length;r+=1){var o=n.key(r);null!==o&&t.push(o)}return t}var d=t(5977);function v(){var e=(0,r.Z)(),n=e.siteConfig,t=n.baseUrl,o=n.url,u=e.i18n,i=u.defaultLocale,a=u.currentLocale,l=(0,d.TH)().pathname,c=a===i?t:t.replace("/"+a+"/","/"),s=l.replace(t,"");return{createUrl:function(e){var n=e.locale;return""+(e.fullyQualified?o:"")+function(e){return e===i?""+c:""+c+e+"/"}(n)+s}}}var p=/title=(["'])(.*?)\1/;function m(e){var n,t;return null!==(t=null===(n=null==e?void 0:e.match(p))||void 0===n?void 0:n[2])&&void 0!==t?t:""}var g="default";function h(e,n){return"docs-"+e+"-"+n}var b=t(80907),w=!!b._r,y=function(e,n){var t=function(e){return!e||(null==e?void 0:e.endsWith("/"))?e:e+"/"};return t(e)===t(n)},E=function(e){var n=(0,r.Z)().siteConfig,t=void 0===n?{}:n,o=t.title,u=t.titleDelimiter,i=void 0===u?"|":u;return e&&e.trim().length?e.trim()+" "+i+" "+o:o},C=t(67294),P=t(25108),k=["zero","one","two","few","many","other"];function S(e){return k.filter((function(n){return e.includes(n)}))}var Z={locale:"en",pluralForms:S(["one","other"]),select:function(e){return 1===e?"one":"other"}};function O(){var e=(0,r.Z)().i18n.currentLocale;return(0,C.useMemo)((function(){if(!Intl.PluralRules)return P.error("Intl.PluralRules not available!\nDocusaurus will fallback to a default/fallback (English) Intl.PluralRules implementation.\n        "),Z;try{return n=e,t=new Intl.PluralRules(n),{locale:n,pluralForms:S(t.resolvedOptions().pluralCategories),select:function(e){return t.select(e)}}}catch(r){return P.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to a default/fallback (English) Intl.PluralRules implementation.\n'),Z}var n,t}),[e])}function I(){var e=O();return{selectMessage:function(n,t){return function(e,n,t){var r=e.split("|");if(1===r.length)return r[0];r.length>t.pluralForms.length&&P.error("For locale="+t.locale+", a maximum of "+t.pluralForms.length+" plural forms are expected ("+t.pluralForms+"), but the message contains "+r.length+" plural forms: "+e+" ");var o=t.select(n),u=t.pluralForms.indexOf(o);return r[Math.min(u,r.length-1)]}(t,n,e)}}}function M(e){var n=(0,C.useRef)();return(0,C.useEffect)((function(){n.current=e})),n.current}function A(e){var n=(0,d.TH)(),t=M(n),r=(0,C.useRef)(!0);(0,C.useEffect)((function(){r.current?r.current=!1:e({location:n,previousLocation:t})}),[n])}var D=t(19756),R=t(10412),j=["collapsed"],x=["lazy"];function L(e){var n=e.initialState,t=(0,C.useState)(null!=n&&n),r=t[0],o=t[1],u=(0,C.useCallback)((function(){o((function(e){return!e}))}),[]);return{collapsed:r,setCollapsed:o,toggleCollapsed:u}}var U={display:"none",overflow:"hidden",height:"0px"},_={display:"block",overflow:"visible",height:"auto"};function N(e,n){var t=n?U:_;e.style.display=t.display,e.style.overflow=t.overflow,e.style.height=t.height}function T(e){var n=e.collapsibleRef,t=e.collapsed,r=e.animation,o=(0,C.useRef)(!1);(0,C.useEffect)((function(){var e,u=n.current;function i(){var e,n,t=u.scrollHeight;return{transition:"height "+(null!==(e=null==r?void 0:r.duration)&&void 0!==e?e:function(e){var n=e/36;return Math.round(10*(4+15*Math.pow(n,.25)+n/5))}(t))+"ms "+(null!==(n=null==r?void 0:r.easing)&&void 0!==n?n:"ease-in-out"),height:t+"px"}}function a(){var e=i();u.style.transition=e.transition,u.style.height=e.height}if(!o.current)return N(u,t),void(o.current=!0);return u.style.willChange="height",e=requestAnimationFrame((function(){t?(a(),requestAnimationFrame((function(){u.style.height=U.height,u.style.overflow=U.overflow}))):(u.style.display="block",requestAnimationFrame((function(){a()})))})),function(){return cancelAnimationFrame(e)}}),[n,t,r])}function F(e){if(!R.Z.canUseDOM)return e?U:_}function B(e){var n=e.as,t=void 0===n?"div":n,r=e.collapsed,o=e.children,u=e.animation,i=e.onCollapseTransitionEnd,a=e.className,l=e.disableSSRStyle,c=(0,C.useRef)(null);return T({collapsibleRef:c,collapsed:r,animation:u}),C.createElement(t,{ref:c,style:l?void 0:F(r),onTransitionEnd:function(e){if("height"===e.propertyName){var n=c.current,t=n.style.height;r||parseInt(t,10)!==n.scrollHeight||(N(n,!1),null==i||i(!1)),t===U.height&&(N(n,!0),null==i||i(!0))}},className:a},o)}function V(e){var n=e.collapsed,t=(0,D.Z)(e,j),r=(0,C.useState)(!n),o=r[0],u=r[1];(0,C.useLayoutEffect)((function(){n||u(!0)}),[n]);var i=(0,C.useState)(n),a=i[0],l=i[1];return(0,C.useLayoutEffect)((function(){o&&l(n)}),[o,n]),o?C.createElement(B,Object.assign({},t,{collapsed:a})):null}function W(e){var n=e.lazy,t=(0,D.Z)(e,x),r=n?V:B;return C.createElement(r,Object.assign({},t))}var z=t(86010),H="details_2_CP",q="isClient_2YO5",Y="collapsibleContent_Ceeu",J=["summary","children"];function Q(e){return!!e&&("SUMMARY"===e.tagName||Q(e.parentElement))}function X(e,n){return!!e&&(e===n||X(e.parentElement,n))}var G=function(e){var n,t=e.summary,o=e.children,u=(0,D.Z)(e,J),i=(0,r.Z)().isClient,a=(0,C.useRef)(null),l=L({initialState:!u.open}),c=l.collapsed,s=l.setCollapsed,f=(0,C.useState)(u.open),d=f[0],v=f[1];return C.createElement("details",Object.assign({},u,{ref:a,open:d,"data-collapsed":c,className:(0,z.Z)(H,(n={},n[q]=i,n),u.className),onMouseDown:function(e){Q(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var n=e.target;Q(n)&&X(n,a.current)&&(e.preventDefault(),c?(s(!1),v(!0)):s(!0))}}),t,C.createElement(W,{lazy:!1,collapsed:c,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){s(e),v(!e)}},C.createElement("div",{className:Y},o)))};var K=(0,C.createContext)(null);function $(e){var n=e.children;return C.createElement(K.Provider,{value:(0,C.useState)(null)},n)}function ee(){var e=(0,C.useContext)(K);if(null===e)throw new Error("MobileSecondaryMenuProvider was not used correctly, context value is null");return e}function ne(){var e=ee()[0];if(e){var n=e.component;return function(t){return C.createElement(n,Object.assign({},e.props,t))}}return function(){}}function te(e){var n,t=e.component,r=e.props,o=ee()[1],u=(n=r,(0,C.useMemo)((function(){return n}),[].concat(Object.keys(n),Object.values(n))));return(0,C.useEffect)((function(){o({component:t,props:u})}),[o,t,u]),(0,C.useEffect)((function(){return function(){return o(null)}}),[o]),null}var re=function(e){return"docs-preferred-version-"+e},oe={save:function(e,n,t){s(re(e),{persistence:n}).set(t)},read:function(e,n){return s(re(e),{persistence:n}).get()},clear:function(e,n){s(re(e),{persistence:n}).del()}};function ue(e){var n=e.pluginIds,t=e.versionPersistence,r=e.allDocsData;var o={};return n.forEach((function(e){o[e]=function(e){var n=oe.read(e,t);return r[e].versions.some((function(e){return e.name===n}))?{preferredVersionName:n}:(oe.clear(e,t),{preferredVersionName:null})}(e)})),o}function ie(){var e=(0,b._r)(),n=o().docs.versionPersistence,t=(0,C.useMemo)((function(){return Object.keys(e)}),[e]),r=(0,C.useState)((function(){return function(e){var n={};return e.forEach((function(e){n[e]={preferredVersionName:null}})),n}(t)})),u=r[0],i=r[1];return(0,C.useEffect)((function(){i(ue({allDocsData:e,versionPersistence:n,pluginIds:t}))}),[e,n,t]),[u,(0,C.useMemo)((function(){return{savePreferredVersion:function(e,t){oe.save(e,n,t),i((function(n){var r;return Object.assign({},n,((r={})[e]={preferredVersionName:t},r))}))}}}),[i])]}var ae=(0,C.createContext)(null);function le(e){var n=e.children;return w?C.createElement(ce,null,n):C.createElement(C.Fragment,null,n)}function ce(e){var n=e.children,t=ie();return C.createElement(ae.Provider,{value:t},n)}function se(){var e=(0,C.useContext)(ae);if(!e)throw new Error('Can\'t find docs preferred context, maybe you forgot to use the "DocsPreferredVersionContextProvider"?');return e}function fe(e){void 0===e&&(e="default");var n=(0,b.zh)(e),t=se(),r=t[0],o=t[1],u=r[e].preferredVersionName;return{preferredVersion:u?n.versions.find((function(e){return e.name===u})):null,savePreferredVersionName:(0,C.useCallback)((function(n){o.savePreferredVersion(e,n)}),[o])}}function de(){var e=(0,b._r)(),n=se()[0];var t=Object.keys(e),r={};return t.forEach((function(t){r[t]=function(t){var r=e[t],o=n[t].preferredVersionName;return o?r.versions.find((function(e){return e.name===o})):null}(t)})),r}var ve={page:{blogListPage:"blog-list-page",blogPostPage:"blog-post-page",blogTagsListPage:"blog-tags-list-page",blogTagsPostPage:"blog-tags-post-page",docPage:"doc-page",mdxPage:"mdx-page"},wrapper:{main:"main-wrapper",blogPages:"blog-wrapper",docPages:"docs-wrapper",mdxPages:"mdx-wrapper"}},pe=s("docusaurus.announcement.dismiss"),me=s("docusaurus.announcement.id"),ge=function(){return"true"===pe.get()},he=function(e){return pe.set(String(e))},be=(0,C.createContext)(null),we=function(e){var n=e.children,t=function(){var e=o().announcementBar,n=(0,r.Z)().isClient,t=(0,C.useState)((function(){return!!n&&ge()})),u=t[0],i=t[1];(0,C.useEffect)((function(){i(ge())}),[]);var a=(0,C.useCallback)((function(){he(!0),i(!0)}),[]);return(0,C.useEffect)((function(){if(e){var n=e.id,t=me.get();"annoucement-bar"===t&&(t="announcement-bar");var r=n!==t;me.set(n),r&&he(!1),!r&&ge()||i(!1)}}),[]),(0,C.useMemo)((function(){return{isClosed:u,close:a}}),[u])}();return C.createElement(be.Provider,{value:t},n)},ye=function(){var e=(0,C.useContext)(be);if(!e)throw new Error("useAnnouncementBar(): AnnouncementBar not found in React context: make sure to use the AnnouncementBarProvider on top of the tree");return e};function Ee(){var e=(0,r.Z)().siteConfig.baseUrl;return(0,d.TH)().pathname.replace(e,"/")}},8802:function(e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,n){var t=n.trailingSlash,r=n.baseUrl;if(e.startsWith("#"))return e;if(void 0===t)return e;var o,u=e.split(/[#?]/)[0],i="/"===u||u===r?u:(o=u,t?function(e){return e.endsWith("/")?e:e+"/"}(o):function(e){return e.endsWith("/")?e.slice(0,-1):e}(o));return e.replace(u,i)}},18780:function(e,n,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0}),n.uniq=n.applyTrailingSlash=void 0;var o=t(8802);Object.defineProperty(n,"applyTrailingSlash",{enumerable:!0,get:function(){return r(o).default}});var u=t(29964);Object.defineProperty(n,"uniq",{enumerable:!0,get:function(){return r(u).default}})},29964:function(e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return Array.from(new Set(e))}},86010:function(e,n,t){"use strict";function r(e){var n,t,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(o&&(o+=" "),o+=t);else for(n in e)e[n]&&(o&&(o+=" "),o+=n);return o}function o(){for(var e,n,t=0,o="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(o&&(o+=" "),o+=n);return o}t.d(n,{Z:function(){return o}})}}]);