"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[52711],{93977:(e,t,r)=>{r.r(t),r.d(t,{default:()=>u});var n=r(62540);r(63696);var a=r(36372),i=r(81912),c=r(37554),l=r(60908),s=r(99849),o=r(37425);function d({year:e,posts:t}){let r=(0,l.i)({day:"numeric",month:"long",timeZone:"UTC"}),i=e=>r.format(new Date(e));return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.A,{as:"h3",id:e,children:e}),(0,n.jsx)("ul",{children:t.map(e=>(0,n.jsx)("li",{children:(0,n.jsxs)(a.A,{to:e.metadata.permalink,children:[i(e.metadata.date)," - ",e.metadata.title]})},e.metadata.date))})]})}function h({years:e}){return(0,n.jsx)("section",{className:"margin-vert--lg",children:(0,n.jsx)("div",{className:"container",children:(0,n.jsx)("div",{className:"row",children:e.map((e,t)=>(0,n.jsx)("div",{className:"col col--4 margin-vert--lg",children:(0,n.jsx)(d,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}({},e))},t))})})})}function u({archive:e}){let t=(0,i.T)({id:"theme.blog.archive.title",message:"Archive",description:"The page & hero title of the blog archive page"}),r=(0,i.T)({id:"theme.blog.archive.description",message:"Archive",description:"The page & hero description of the blog archive page"}),a=Array.from(e.blogPosts.reduce((e,t)=>{var r;let n=t.metadata.date.split("-")[0],a=null!==(r=e.get(n))&&void 0!==r?r:[];return e.set(n,[t,...a])},new Map),([e,t])=>({year:e,posts:t}));return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(c.be,{title:t,description:r}),(0,n.jsxs)(s.A,{children:[(0,n.jsx)("header",{className:"hero hero--primary",children:(0,n.jsxs)("div",{className:"container",children:[(0,n.jsx)(o.A,{as:"h1",className:"hero__title",children:t}),(0,n.jsx)("p",{className:"hero__subtitle",children:r})]})}),(0,n.jsx)("main",{children:a.length>0&&(0,n.jsx)(h,{years:a})})]})]})}},60908:(e,t,r)=>{r.d(t,{i:()=>a});var n=r(99468);function a(e={}){let{i18n:{currentLocale:t}}=(0,n.A)(),r=function(){let{i18n:{currentLocale:e,localeConfigs:t}}=(0,n.A)();return t[e].calendar}();return new Intl.DateTimeFormat(t,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}({calendar:r},e))}}}]);