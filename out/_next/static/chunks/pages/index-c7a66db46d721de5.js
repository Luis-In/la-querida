(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{3685:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(1878)}])},8045:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(l){c=!0,o=l}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}}(e,t)||c(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||c(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}t.default=function(e){var t=e.src,n=e.sizes,r=e.unoptimized,a=void 0!==r&&r,c=e.priority,l=void 0!==c&&c,d=e.loading,m=e.lazyRoot,b=void 0===m?null:m,v=e.lazyBoundary,_=void 0===v?"200px":v,w=e.className,j=e.quality,x=e.width,A=e.height,k=e.objectFit,N=e.objectPosition,E=e.onLoadingComplete,I=e.loader,H=void 0===I?z:I,P=e.placeholder,L=void 0===P?"empty":P,R=e.blurDataURL,D=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","objectFit","objectPosition","onLoadingComplete","loader","placeholder","blurDataURL"]),C=s.useRef(null),q=D,M=n?"responsive":"intrinsic";"layout"in q&&(q.layout&&(M=q.layout),delete q.layout);var T="";if(function(e){return"object"===typeof e&&(y(e)||function(e){return void 0!==e.src}(e))}(t)){var W=y(t)?t.default:t;if(!W.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(W)));if(R=R||W.blurDataURL,T=W.src,(!M||"fill"!==M)&&(A=A||W.height,x=x||W.width,!W.height||!W.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(W)))}t="string"===typeof t?t:T;var B=O(x),Y=O(A),U=O(j),Q=!l&&("lazy"===d||"undefined"===typeof d);(t.startsWith("data:")||t.startsWith("blob:"))&&(a=!0,Q=!1);p.has(t)&&(Q=!1);0;var F,G=i(f.useIntersection({rootRef:b,rootMargin:_,disabled:!Q}),2),J=G[0],V=G[1],X=!Q||V,Z={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},K={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},$=!1,ee={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:k,objectPosition:N},te="blur"===L?{filter:"blur(20px)",backgroundSize:k||"cover",backgroundImage:'url("'.concat(R,'")'),backgroundPosition:N||"0% 0%"}:{};if("fill"===M)Z.display="block",Z.position="absolute",Z.top=0,Z.left=0,Z.bottom=0,Z.right=0;else if("undefined"!==typeof B&&"undefined"!==typeof Y){var ne=Y/B,re=isNaN(ne)?"100%":"".concat(100*ne,"%");"responsive"===M?(Z.display="block",Z.position="relative",$=!0,K.paddingTop=re):"intrinsic"===M?(Z.display="inline-block",Z.position="relative",Z.maxWidth="100%",$=!0,K.maxWidth="100%",F="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(B,"%27%20height=%27").concat(Y,"%27/%3e")):"fixed"===M&&(Z.display="inline-block",Z.position="relative",Z.width=B,Z.height=Y)}else 0;var oe={src:h,srcSet:void 0,sizes:void 0};X&&(oe=S({src:t,unoptimized:a,layout:M,width:B,quality:U,sizes:n,loader:H}));var ie=t;0;var ae;0;var ce=(o(ae={},"imagesrcset",oe.srcSet),o(ae,"imagesizes",oe.sizes),ae),le=s.default.useLayoutEffect,se=s.useRef(E);return s.useEffect((function(){se.current=E}),[E]),le((function(){J(C.current)}),[J]),s.useEffect((function(){!function(e,t,n,r,o){var i=function(){var n=e.current;n&&(n.src!==h&&("decode"in n?n.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.current&&(p.add(t),"blur"===r&&(n.style.filter="",n.style.backgroundSize="",n.style.backgroundImage="",n.style.backgroundPosition=""),o.current)){var i=n.naturalWidth,a=n.naturalHeight;o.current({naturalWidth:i,naturalHeight:a})}})))};e.current&&(e.current.complete?i():e.current.onload=i)}(C,ie,0,L,se)}),[ie,M,L,X]),s.default.createElement("span",{style:Z},$?s.default.createElement("span",{style:K},F?s.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:F}):null):null,s.default.createElement("img",Object.assign({},q,oe,{decoding:"async","data-nimg":M,className:w,ref:C,style:g({},ee,te)})),Q&&s.default.createElement("noscript",null,s.default.createElement("img",Object.assign({},q,S({src:t,unoptimized:a,layout:M,width:B,quality:U,sizes:n,loader:H}),{decoding:"async","data-nimg":M,style:ee,className:w,loading:d||"lazy"}))),l?s.default.createElement(u.default,null,s.default.createElement("link",Object.assign({key:"__nimg-"+oe.src+oe.srcSet+oe.sizes,rel:"preload",as:"image",href:oe.srcSet?void 0:oe.src},ce))):null)};var l,s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(7294)),u=(l=n(5443))&&l.__esModule?l:{default:l},d=n(5809),f=n(7190);function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(e){for(var t=arguments,n=function(n){var r=null!=t[n]?t[n]:{},o=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),o.forEach((function(t){m(e,t,r[t])}))},r=1;r<arguments.length;r++)n(r);return e}var p=new Set,h=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var b=new Map([["default",function(e){var t=e.root,n=e.src,r=e.width,o=e.quality;0;return"".concat(t,"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(o||75)}],["imgix",function(e){var t=e.root,n=e.src,r=e.width,o=e.quality,i=new URL("".concat(t).concat(k(n))),a=i.searchParams;a.set("auto",a.get("auto")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||r.toString()),o&&a.set("q",o.toString());return i.href}],["cloudinary",function(e){var t=e.root,n=e.src,r=e.width,o=e.quality,i=["f_auto","c_limit","w_"+r,"q_"+(o||"auto")].join(",")+"/";return"".concat(t).concat(i).concat(k(n))}],["akamai",function(e){var t=e.root,n=e.src,r=e.width;return"".concat(t).concat(k(n),"?imwidth=").concat(r)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function y(e){return void 0!==e.default}var v={deviceSizes:[640,750,828,1080,1200,1920],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"imgix"}||d.imageConfigDefault,_=v.deviceSizes,w=v.imageSizes,j=v.loader,x=v.path,A=(v.domains,a(_).concat(a(w)));function S(e){var t=e.src,n=e.unoptimized,r=e.layout,o=e.width,i=e.quality,c=e.sizes,l=e.loader;if(n)return{src:t,srcSet:void 0,sizes:void 0};var s=function(e,t,n){if(n&&("fill"===t||"responsive"===t)){for(var r,o=/(^|\s)(1?\d?\d)vw/g,i=[];r=o.exec(n);r)i.push(parseInt(r[2]));if(i.length){var c,l=.01*(c=Math).min.apply(c,a(i));return{widths:A.filter((function(e){return e>=_[0]*l})),kind:"w"}}return{widths:A,kind:"w"}}return"number"!==typeof e||"fill"===t||"responsive"===t?{widths:_,kind:"w"}:{widths:a(new Set([e,2*e].map((function(e){return A.find((function(t){return t>=e}))||A[A.length-1]})))),kind:"x"}}(o,r,c),u=s.widths,d=s.kind,f=u.length-1;return{sizes:c||"w"!==d?c:"100vw",srcSet:u.map((function(e,n){return"".concat(l({src:t,quality:i,width:e})," ").concat("w"===d?e:n+1).concat(d)})).join(", "),src:l({src:t,quality:i,width:u[f]})}}function O(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function z(e){var t=b.get(j);if(t)return t(g({root:x},e));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(d.VALID_LOADERS.join(", "),". Received: ").concat(j))}function k(e){return"/"===e[0]?e.slice(1):e}_.sort((function(e,t){return e-t})),A.sort((function(e,t){return e-t}))},7190:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(l){c=!0,o=l}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,r=e.disabled||!c,s=i.useRef(),u=o(i.useState(!1),2),d=u[0],f=u[1],m=o(i.useState(t?t.current:null),2),g=m[0],p=m[1],h=i.useCallback((function(e){s.current&&(s.current(),s.current=void 0),r||d||e&&e.tagName&&(s.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=l.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return l.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,i=r.observer,a=r.elements;return a.set(e,t),i.observe(e),function(){a.delete(e),i.unobserve(e),0===a.size&&(i.disconnect(),l.delete(o))}}(e,(function(e){return e&&f(e)}),{root:g,rootMargin:n}))}),[r,g,n,d]);return i.useEffect((function(){if(!c&&!d){var e=a.requestIdleCallback((function(){return f(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[d]),i.useEffect((function(){t&&p(t.current)}),[t]),[h,d]};var i=n(7294),a=n(9311),c="undefined"!==typeof IntersectionObserver;var l=new Map},1878:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}});var r=n(5893),o=n(9008),i=n(5675),a=n(214),c=n.n(a),l=function(e){return e.src};function s(){return(0,r.jsxs)("div",{className:c().container,children:[(0,r.jsxs)(o.default,{children:[(0,r.jsx)("title",{children:"La Querida"}),(0,r.jsx)("meta",{name:"description",content:"La Querida"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsxs)("main",{className:c().main,children:[(0,r.jsxs)("div",{className:c().logo,children:[(0,r.jsx)("div",{className:c().laquerida,children:(0,r.jsx)(i.default,{src:"/img/logo_la_querida.png",layout:"responsive",width:350,height:150,priority:!0,alt:"Logo-La-Querida",loading:"eager",loader:l,unoptimized:!0})}),(0,r.jsx)("span",{className:c().logo_cons,children:"Web en construcci\xf3n"}),(0,r.jsx)("span",{className:c().logo_prox,children:"PROXIMAMENTE"}),(0,r.jsxs)("div",{className:c().logo_form,children:[(0,r.jsx)("span",{className:c().logo_light,children:"deja tu correo"}),(0,r.jsxs)("div",{className:c().logo_input,children:[(0,r.jsx)("input",{type:"text",placeholder:"correo o whatsapp",className:c().logo_inputText}),(0,r.jsx)("button",{className:c().logo_button,children:"\u2714"})]}),(0,r.jsx)("span",{className:c().logo_bold,children:"te avisamos"})]})]}),(0,r.jsx)("div",{className:c().contact,children:(0,r.jsx)("div",{className:c().info,children:(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{className:c().con,children:["CONTACTO",(0,r.jsx)(i.default,{src:"/img/whatsapp.png",width:25,height:25,alt:"whatsapp",loader:l,unoptimized:!0})]}),(0,r.jsxs)("span",{children:["Boleteria Yacuiba ",(0,r.jsx)("b",{children:"710 300 11 - "})]}),(0,r.jsxs)("span",{children:["Encomiendas Yacuiba ",(0,r.jsx)("b",{children:"710 300 12 - "})]}),(0,r.jsxs)("span",{children:["Boleteria Scz ",(0,r.jsx)("b",{children:"710 300 13 - "})]}),(0,r.jsxs)("span",{children:["Encomiendas Scz ",(0,r.jsx)("b",{children:"710 300 14 - "})]}),(0,r.jsxs)("span",{children:["Sucursal encomiendas Bimodal Santa Cruz ",(0,r.jsx)("b",{children:"710 300 14"})]})]})})})]}),(0,r.jsxs)("div",{className:c().background,children:[(0,r.jsxs)("div",{className:c().landscape,children:[(0,r.jsx)(i.default,{src:"/img/skybox.png",layout:"fill",objectFit:"cover",priority:!0,alt:"",loading:"eager",loader:l,unoptimized:!0}),(0,r.jsx)(i.default,{src:"/img/field_bg.png",layout:"fill",objectFit:"cover",priority:!0,alt:"",loading:"eager",loader:l,unoptimized:!0})]}),(0,r.jsxs)("div",{className:c().bg,children:[(0,r.jsx)("div",{className:c().one}),(0,r.jsx)("div",{className:c().two}),(0,r.jsx)("div",{className:c().three}),(0,r.jsx)("div",{className:c().four}),(0,r.jsx)("div",{className:c().five})]}),(0,r.jsx)("div",{className:c().flota,children:(0,r.jsx)(i.default,{src:"/img/flota_lateral.png",layout:"responsive",width:300,height:100,priority:!0,alt:"",loading:"eager",loader:l,unoptimized:!0})})]})]})}},214:function(e){e.exports={container:"Home_container__bCOhY",main:"Home_main__nLjiQ",logo:"Home_logo__27_tb",laquerida:"Home_laquerida__lbLjI",logo_cons:"Home_logo_cons__95ejn",logo_prox:"Home_logo_prox__OAYDf",logo_form:"Home_logo_form__kVJfG",logo_input:"Home_logo_input__2pNtv",logo_inputText:"Home_logo_inputText__KYYXn",logo_button:"Home_logo_button__W5GGS",logo_bold:"Home_logo_bold__9sEwP",logo_light:"Home_logo_light__IYucj",contact:"Home_contact__thYet",con:"Home_con__QzJL3",background:"Home_background__I_nYJ",landscape:"Home_landscape__6ICpu",bg:"Home_bg__MDUv5",one:"Home_one__KDpgA",two:"Home_two__H42PV",three:"Home_three__aDalL",four:"Home_four__pAiOo",five:"Home_five__tZYBZ",flota:"Home_flota__GwIZ_"}},5809:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.imageConfigDefault=t.VALID_LOADERS=void 0;t.VALID_LOADERS=["default","imgix","cloudinary","akamai","custom"];t.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"]}},9008:function(e,t,n){e.exports=n(5443)},5675:function(e,t,n){e.exports=n(8045)}},function(e){e.O(0,[774,888,179],(function(){return t=3685,e(e.s=t);var t}));var t=e.O();_N_E=t}]);