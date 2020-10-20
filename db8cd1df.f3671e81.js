(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{85:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),c=(n(0),n(94)),o={id:"staticpagecache",title:"Static pages caching",sidebar_label:"Static pages caching"},i={unversionedId:"staticpagecache",id:"staticpagecache",isDocsHomePage:!1,title:"Static pages caching",description:"Statically rendered pages (i.e. HTML pages that are uploaded to S3) have the following Cache-Control set:",source:"@site/docs/staticpagecache.md",slug:"/staticpagecache",permalink:"/docs/staticpagecache",editUrl:"https://github.com/serverless-nextjs/serverless-next.js/documentation/docs/docs/staticpagecache.md",version:"current",sidebar_label:"Static pages caching",sidebar:"someSidebar",previous:{title:"Custom CloudFront configuration",permalink:"/docs/customcloudfrontconfig"},next:{title:"Public directory caching",permalink:"/docs/publicdirectorycache"}},l=[],s={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Statically rendered pages (i.e. HTML pages that are uploaded to S3) have the following Cache-Control set:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"cache-control: public, max-age=0, s-maxage=2678400, must-revalidate\n")),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"s-maxage")," allows Cloudfront to cache the pages at the edge locations for 31 days.\n",Object(c.b)("inlineCode",{parentName:"p"},"max-age=0")," in combination with ",Object(c.b)("inlineCode",{parentName:"p"},"must-revalidate")," ensure browsers never cache the static pages. This allows Cloudfront to be in full control of caching TTLs. On every deployment an invalidation",Object(c.b)("inlineCode",{parentName:"p"},"/*")," is created to ensure users get fresh content."))}p.isMDXComponent=!0},94:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),b=r,f=u["".concat(o,".").concat(b)]||u[b]||d[b]||c;return n?a.a.createElement(f,i(i({ref:t},s),{},{components:n})):a.a.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<c;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);