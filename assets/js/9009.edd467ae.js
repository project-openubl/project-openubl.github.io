(self.webpackChunkproject_openubl=self.webpackChunkproject_openubl||[]).push([[9009],{1793:(t,r,e)=>{"use strict";e(412).default.canUseDOM&&(window.Prism=window.Prism||{},window.Prism.manual=!0)},9009:(t,r,e)=>{"use strict";e.d(r,{U:()=>l});var o=e(7294),n=e(4996),a=e(2389),i=e(8084),s=e(2949),u=e(2492),c=e.n(u),p=(e(1793),e(2933));let f=null;function l(t,r){let{spec:e,url:u,themeId:l}=t;const v=(0,n.Z)(u,{absolute:!0}),h=(0,a.Z)(),y="dark"===(0,s.I)().colorMode,_=(0,i.eZ)("docusaurus-theme-redoc",l),x=(0,o.useMemo)((()=>{const{lightTheme:t,darkTheme:o,options:n}=_,a={scrollYOffset:h||"string"!=typeof n.scrollYOffset?n.scrollYOffset:0},i=c()({...n,...a,theme:t},r),s=c()({...n,...a,theme:o},r);return null!==f&&h&&f.dispose(),f=new p.AppStore(e,v,h&&y?s:i),{darkThemeOptions:s,lightThemeOptions:i,hasLogo:!!e.info?.["x-logo"],store:f}}),[h,e,v,y,_,r]);return(0,o.useEffect)((()=>{x.store.onDidMount()}),[x,h,y]),x}},1989:(t,r,e)=>{var o=e(1789),n=e(401),a=e(7667),i=e(9026),s=e(1866);function u(t){var r=-1,e=null==t?0:t.length;for(this.clear();++r<e;){var o=t[r];this.set(o[0],o[1])}}u.prototype.clear=o,u.prototype.delete=n,u.prototype.get=a,u.prototype.has=i,u.prototype.set=s,t.exports=u},8407:(t,r,e)=>{var o=e(7040),n=e(4125),a=e(2117),i=e(7518),s=e(4705);function u(t){var r=-1,e=null==t?0:t.length;for(this.clear();++r<e;){var o=t[r];this.set(o[0],o[1])}}u.prototype.clear=o,u.prototype.delete=n,u.prototype.get=a,u.prototype.has=i,u.prototype.set=s,t.exports=u},7071:(t,r,e)=>{var o=e(852)(e(5639),"Map");t.exports=o},3369:(t,r,e)=>{var o=e(4785),n=e(1285),a=e(6e3),i=e(9916),s=e(5265);function u(t){var r=-1,e=null==t?0:t.length;for(this.clear();++r<e;){var o=t[r];this.set(o[0],o[1])}}u.prototype.clear=o,u.prototype.delete=n,u.prototype.get=a,u.prototype.has=i,u.prototype.set=s,t.exports=u},6384:(t,r,e)=>{var o=e(8407),n=e(7465),a=e(3779),i=e(7599),s=e(4758),u=e(4309);function c(t){var r=this.__data__=new o(t);this.size=r.size}c.prototype.clear=n,c.prototype.delete=a,c.prototype.get=i,c.prototype.has=s,c.prototype.set=u,t.exports=c},2705:(t,r,e)=>{var o=e(5639).Symbol;t.exports=o},1149:(t,r,e)=>{var o=e(5639).Uint8Array;t.exports=o},6874:t=>{t.exports=function(t,r,e){switch(e.length){case 0:return t.call(r);case 1:return t.call(r,e[0]);case 2:return t.call(r,e[0],e[1]);case 3:return t.call(r,e[0],e[1],e[2])}return t.apply(r,e)}},4636:(t,r,e)=>{var o=e(2545),n=e(5694),a=e(1469),i=e(4144),s=e(5776),u=e(6719),c=Object.prototype.hasOwnProperty;t.exports=function(t,r){var e=a(t),p=!e&&n(t),f=!e&&!p&&i(t),l=!e&&!p&&!f&&u(t),v=e||p||f||l,h=v?o(t.length,String):[],y=h.length;for(var _ in t)!r&&!c.call(t,_)||v&&("length"==_||f&&("offset"==_||"parent"==_)||l&&("buffer"==_||"byteLength"==_||"byteOffset"==_)||s(_,y))||h.push(_);return h}},6556:(t,r,e)=>{var o=e(9465),n=e(7813);t.exports=function(t,r,e){(void 0!==e&&!n(t[r],e)||void 0===e&&!(r in t))&&o(t,r,e)}},708:(t,r,e)=>{var o=e(9465),n=e(7813),a=Object.prototype.hasOwnProperty;t.exports=function(t,r,e){var i=t[r];a.call(t,r)&&n(i,e)&&(void 0!==e||r in t)||o(t,r,e)}},8470:(t,r,e)=>{var o=e(7813);t.exports=function(t,r){for(var e=t.length;e--;)if(o(t[e][0],r))return e;return-1}},9465:(t,r,e)=>{var o=e(8777);t.exports=function(t,r,e){"__proto__"==r&&o?o(t,r,{configurable:!0,enumerable:!0,value:e,writable:!0}):t[r]=e}},3118:(t,r,e)=>{var o=e(3218),n=Object.create,a=function(){function t(){}return function(r){if(!o(r))return{};if(n)return n(r);t.prototype=r;var e=new t;return t.prototype=void 0,e}}();t.exports=a},8483:(t,r,e)=>{var o=e(5063)();t.exports=o},4239:(t,r,e)=>{var o=e(2705),n=e(2932),a=e(2333),i=o?o.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":i&&i in Object(t)?n(t):a(t)}},9454:(t,r,e)=>{var o=e(4239),n=e(7005);t.exports=function(t){return n(t)&&"[object Arguments]"==o(t)}},8458:(t,r,e)=>{var o=e(3560),n=e(5346),a=e(3218),i=e(346),s=/^\[object .+?Constructor\]$/,u=Function.prototype,c=Object.prototype,p=u.toString,f=c.hasOwnProperty,l=RegExp("^"+p.call(f).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=function(t){return!(!a(t)||n(t))&&(o(t)?l:s).test(i(t))}},8749:(t,r,e)=>{var o=e(4239),n=e(1780),a=e(7005),i={};i["[object Float32Array]"]=i["[object Float64Array]"]=i["[object Int8Array]"]=i["[object Int16Array]"]=i["[object Int32Array]"]=i["[object Uint8Array]"]=i["[object Uint8ClampedArray]"]=i["[object Uint16Array]"]=i["[object Uint32Array]"]=!0,i["[object Arguments]"]=i["[object Array]"]=i["[object ArrayBuffer]"]=i["[object Boolean]"]=i["[object DataView]"]=i["[object Date]"]=i["[object Error]"]=i["[object Function]"]=i["[object Map]"]=i["[object Number]"]=i["[object Object]"]=i["[object RegExp]"]=i["[object Set]"]=i["[object String]"]=i["[object WeakMap]"]=!1,t.exports=function(t){return a(t)&&n(t.length)&&!!i[o(t)]}},313:(t,r,e)=>{var o=e(3218),n=e(5726),a=e(3498),i=Object.prototype.hasOwnProperty;t.exports=function(t){if(!o(t))return a(t);var r=n(t),e=[];for(var s in t)("constructor"!=s||!r&&i.call(t,s))&&e.push(s);return e}},2980:(t,r,e)=>{var o=e(6384),n=e(6556),a=e(8483),i=e(9783),s=e(3218),u=e(1704),c=e(6390);t.exports=function t(r,e,p,f,l){r!==e&&a(e,(function(a,u){if(l||(l=new o),s(a))i(r,e,u,p,t,f,l);else{var v=f?f(c(r,u),a,u+"",r,e,l):void 0;void 0===v&&(v=a),n(r,u,v)}}),u)}},9783:(t,r,e)=>{var o=e(6556),n=e(4626),a=e(7133),i=e(278),s=e(8517),u=e(5694),c=e(1469),p=e(9246),f=e(4144),l=e(3560),v=e(3218),h=e(8630),y=e(6719),_=e(6390),x=e(9881);t.exports=function(t,r,e,d,b,g,j){var O=_(t,e),w=_(r,e),m=j.get(w);if(m)o(t,e,m);else{var A=g?g(O,w,e+"",t,r,j):void 0,z=void 0===A;if(z){var P=c(w),S=!P&&f(w),T=!P&&!S&&y(w);A=w,P||S||T?c(O)?A=O:p(O)?A=i(O):S?(z=!1,A=n(w,!0)):T?(z=!1,A=a(w,!0)):A=[]:h(w)||u(w)?(A=O,u(O)?A=x(O):v(O)&&!l(O)||(A=s(w))):z=!1}z&&(j.set(w,A),b(A,w,d,g,j),j.delete(w)),o(t,e,A)}}},5976:(t,r,e)=>{var o=e(6557),n=e(5357),a=e(61);t.exports=function(t,r){return a(n(t,r,o),t+"")}},6560:(t,r,e)=>{var o=e(5703),n=e(8777),a=e(6557),i=n?function(t,r){return n(t,"toString",{configurable:!0,enumerable:!1,value:o(r),writable:!0})}:a;t.exports=i},2545:t=>{t.exports=function(t,r){for(var e=-1,o=Array(t);++e<t;)o[e]=r(e);return o}},1717:t=>{t.exports=function(t){return function(r){return t(r)}}},4318:(t,r,e)=>{var o=e(1149);t.exports=function(t){var r=new t.constructor(t.byteLength);return new o(r).set(new o(t)),r}},4626:(t,r,e)=>{t=e.nmd(t);var o=e(5639),n=r&&!r.nodeType&&r,a=n&&t&&!t.nodeType&&t,i=a&&a.exports===n?o.Buffer:void 0,s=i?i.allocUnsafe:void 0;t.exports=function(t,r){if(r)return t.slice();var e=t.length,o=s?s(e):new t.constructor(e);return t.copy(o),o}},7133:(t,r,e)=>{var o=e(4318);t.exports=function(t,r){var e=r?o(t.buffer):t.buffer;return new t.constructor(e,t.byteOffset,t.length)}},278:t=>{t.exports=function(t,r){var e=-1,o=t.length;for(r||(r=Array(o));++e<o;)r[e]=t[e];return r}},8363:(t,r,e)=>{var o=e(708),n=e(9465);t.exports=function(t,r,e,a){var i=!e;e||(e={});for(var s=-1,u=r.length;++s<u;){var c=r[s],p=a?a(e[c],t[c],c,e,t):void 0;void 0===p&&(p=t[c]),i?n(e,c,p):o(e,c,p)}return e}},4429:(t,r,e)=>{var o=e(5639)["__core-js_shared__"];t.exports=o},1463:(t,r,e)=>{var o=e(5976),n=e(6612);t.exports=function(t){return o((function(r,e){var o=-1,a=e.length,i=a>1?e[a-1]:void 0,s=a>2?e[2]:void 0;for(i=t.length>3&&"function"==typeof i?(a--,i):void 0,s&&n(e[0],e[1],s)&&(i=a<3?void 0:i,a=1),r=Object(r);++o<a;){var u=e[o];u&&t(r,u,o,i)}return r}))}},5063:t=>{t.exports=function(t){return function(r,e,o){for(var n=-1,a=Object(r),i=o(r),s=i.length;s--;){var u=i[t?s:++n];if(!1===e(a[u],u,a))break}return r}}},8777:(t,r,e)=>{var o=e(852),n=function(){try{var t=o(Object,"defineProperty");return t({},"",{}),t}catch(r){}}();t.exports=n},1957:(t,r,e)=>{var o="object"==typeof e.g&&e.g&&e.g.Object===Object&&e.g;t.exports=o},5050:(t,r,e)=>{var o=e(7019);t.exports=function(t,r){var e=t.__data__;return o(r)?e["string"==typeof r?"string":"hash"]:e.map}},852:(t,r,e)=>{var o=e(8458),n=e(7801);t.exports=function(t,r){var e=n(t,r);return o(e)?e:void 0}},5924:(t,r,e)=>{var o=e(5569)(Object.getPrototypeOf,Object);t.exports=o},2932:(t,r,e)=>{var o=e(2705),n=Object.prototype,a=n.hasOwnProperty,i=n.toString,s=o?o.toStringTag:void 0;t.exports=function(t){var r=a.call(t,s),e=t[s];try{t[s]=void 0;var o=!0}catch(u){}var n=i.call(t);return o&&(r?t[s]=e:delete t[s]),n}},7801:t=>{t.exports=function(t,r){return null==t?void 0:t[r]}},1789:(t,r,e)=>{var o=e(4536);t.exports=function(){this.__data__=o?o(null):{},this.size=0}},401:t=>{t.exports=function(t){var r=this.has(t)&&delete this.__data__[t];return this.size-=r?1:0,r}},7667:(t,r,e)=>{var o=e(4536),n=Object.prototype.hasOwnProperty;t.exports=function(t){var r=this.__data__;if(o){var e=r[t];return"__lodash_hash_undefined__"===e?void 0:e}return n.call(r,t)?r[t]:void 0}},9026:(t,r,e)=>{var o=e(4536),n=Object.prototype.hasOwnProperty;t.exports=function(t){var r=this.__data__;return o?void 0!==r[t]:n.call(r,t)}},1866:(t,r,e)=>{var o=e(4536);t.exports=function(t,r){var e=this.__data__;return this.size+=this.has(t)?0:1,e[t]=o&&void 0===r?"__lodash_hash_undefined__":r,this}},8517:(t,r,e)=>{var o=e(3118),n=e(5924),a=e(5726);t.exports=function(t){return"function"!=typeof t.constructor||a(t)?{}:o(n(t))}},5776:t=>{var r=/^(?:0|[1-9]\d*)$/;t.exports=function(t,e){var o=typeof t;return!!(e=null==e?9007199254740991:e)&&("number"==o||"symbol"!=o&&r.test(t))&&t>-1&&t%1==0&&t<e}},6612:(t,r,e)=>{var o=e(7813),n=e(8612),a=e(5776),i=e(3218);t.exports=function(t,r,e){if(!i(e))return!1;var s=typeof r;return!!("number"==s?n(e)&&a(r,e.length):"string"==s&&r in e)&&o(e[r],t)}},7019:t=>{t.exports=function(t){var r=typeof t;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==t:null===t}},5346:(t,r,e)=>{var o,n=e(4429),a=(o=/[^.]+$/.exec(n&&n.keys&&n.keys.IE_PROTO||""))?"Symbol(src)_1."+o:"";t.exports=function(t){return!!a&&a in t}},5726:t=>{var r=Object.prototype;t.exports=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||r)}},7040:t=>{t.exports=function(){this.__data__=[],this.size=0}},4125:(t,r,e)=>{var o=e(8470),n=Array.prototype.splice;t.exports=function(t){var r=this.__data__,e=o(r,t);return!(e<0)&&(e==r.length-1?r.pop():n.call(r,e,1),--this.size,!0)}},2117:(t,r,e)=>{var o=e(8470);t.exports=function(t){var r=this.__data__,e=o(r,t);return e<0?void 0:r[e][1]}},7518:(t,r,e)=>{var o=e(8470);t.exports=function(t){return o(this.__data__,t)>-1}},4705:(t,r,e)=>{var o=e(8470);t.exports=function(t,r){var e=this.__data__,n=o(e,t);return n<0?(++this.size,e.push([t,r])):e[n][1]=r,this}},4785:(t,r,e)=>{var o=e(1989),n=e(8407),a=e(7071);t.exports=function(){this.size=0,this.__data__={hash:new o,map:new(a||n),string:new o}}},1285:(t,r,e)=>{var o=e(5050);t.exports=function(t){var r=o(this,t).delete(t);return this.size-=r?1:0,r}},6e3:(t,r,e)=>{var o=e(5050);t.exports=function(t){return o(this,t).get(t)}},9916:(t,r,e)=>{var o=e(5050);t.exports=function(t){return o(this,t).has(t)}},5265:(t,r,e)=>{var o=e(5050);t.exports=function(t,r){var e=o(this,t),n=e.size;return e.set(t,r),this.size+=e.size==n?0:1,this}},4536:(t,r,e)=>{var o=e(852)(Object,"create");t.exports=o},3498:t=>{t.exports=function(t){var r=[];if(null!=t)for(var e in Object(t))r.push(e);return r}},1167:(t,r,e)=>{t=e.nmd(t);var o=e(1957),n=r&&!r.nodeType&&r,a=n&&t&&!t.nodeType&&t,i=a&&a.exports===n&&o.process,s=function(){try{var t=a&&a.require&&a.require("util").types;return t||i&&i.binding&&i.binding("util")}catch(r){}}();t.exports=s},2333:t=>{var r=Object.prototype.toString;t.exports=function(t){return r.call(t)}},5569:t=>{t.exports=function(t,r){return function(e){return t(r(e))}}},5357:(t,r,e)=>{var o=e(6874),n=Math.max;t.exports=function(t,r,e){return r=n(void 0===r?t.length-1:r,0),function(){for(var a=arguments,i=-1,s=n(a.length-r,0),u=Array(s);++i<s;)u[i]=a[r+i];i=-1;for(var c=Array(r+1);++i<r;)c[i]=a[i];return c[r]=e(u),o(t,this,c)}}},5639:(t,r,e)=>{var o=e(1957),n="object"==typeof self&&self&&self.Object===Object&&self,a=o||n||Function("return this")();t.exports=a},6390:t=>{t.exports=function(t,r){if(("constructor"!==r||"function"!=typeof t[r])&&"__proto__"!=r)return t[r]}},61:(t,r,e)=>{var o=e(6560),n=e(1275)(o);t.exports=n},1275:t=>{var r=Date.now;t.exports=function(t){var e=0,o=0;return function(){var n=r(),a=16-(n-o);if(o=n,a>0){if(++e>=800)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}},7465:(t,r,e)=>{var o=e(8407);t.exports=function(){this.__data__=new o,this.size=0}},3779:t=>{t.exports=function(t){var r=this.__data__,e=r.delete(t);return this.size=r.size,e}},7599:t=>{t.exports=function(t){return this.__data__.get(t)}},4758:t=>{t.exports=function(t){return this.__data__.has(t)}},4309:(t,r,e)=>{var o=e(8407),n=e(7071),a=e(3369);t.exports=function(t,r){var e=this.__data__;if(e instanceof o){var i=e.__data__;if(!n||i.length<199)return i.push([t,r]),this.size=++e.size,this;e=this.__data__=new a(i)}return e.set(t,r),this.size=e.size,this}},346:t=>{var r=Function.prototype.toString;t.exports=function(t){if(null!=t){try{return r.call(t)}catch(e){}try{return t+""}catch(e){}}return""}},5703:t=>{t.exports=function(t){return function(){return t}}},7813:t=>{t.exports=function(t,r){return t===r||t!=t&&r!=r}},6557:t=>{t.exports=function(t){return t}},5694:(t,r,e)=>{var o=e(9454),n=e(7005),a=Object.prototype,i=a.hasOwnProperty,s=a.propertyIsEnumerable,u=o(function(){return arguments}())?o:function(t){return n(t)&&i.call(t,"callee")&&!s.call(t,"callee")};t.exports=u},1469:t=>{var r=Array.isArray;t.exports=r},8612:(t,r,e)=>{var o=e(3560),n=e(1780);t.exports=function(t){return null!=t&&n(t.length)&&!o(t)}},9246:(t,r,e)=>{var o=e(8612),n=e(7005);t.exports=function(t){return n(t)&&o(t)}},4144:(t,r,e)=>{t=e.nmd(t);var o=e(5639),n=e(5062),a=r&&!r.nodeType&&r,i=a&&t&&!t.nodeType&&t,s=i&&i.exports===a?o.Buffer:void 0,u=(s?s.isBuffer:void 0)||n;t.exports=u},3560:(t,r,e)=>{var o=e(4239),n=e(3218);t.exports=function(t){if(!n(t))return!1;var r=o(t);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r}},1780:t=>{t.exports=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}},3218:t=>{t.exports=function(t){var r=typeof t;return null!=t&&("object"==r||"function"==r)}},7005:t=>{t.exports=function(t){return null!=t&&"object"==typeof t}},8630:(t,r,e)=>{var o=e(4239),n=e(5924),a=e(7005),i=Function.prototype,s=Object.prototype,u=i.toString,c=s.hasOwnProperty,p=u.call(Object);t.exports=function(t){if(!a(t)||"[object Object]"!=o(t))return!1;var r=n(t);if(null===r)return!0;var e=c.call(r,"constructor")&&r.constructor;return"function"==typeof e&&e instanceof e&&u.call(e)==p}},6719:(t,r,e)=>{var o=e(8749),n=e(1717),a=e(1167),i=a&&a.isTypedArray,s=i?n(i):o;t.exports=s},1704:(t,r,e)=>{var o=e(4636),n=e(313),a=e(8612);t.exports=function(t){return a(t)?o(t,!0):n(t)}},2492:(t,r,e)=>{var o=e(2980),n=e(1463)((function(t,r,e){o(t,r,e)}));t.exports=n},5062:t=>{t.exports=function(){return!1}},9881:(t,r,e)=>{var o=e(8363),n=e(1704);t.exports=function(t){return o(t,n(t))}}}]);