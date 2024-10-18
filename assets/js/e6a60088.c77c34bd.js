"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["98842"],{3714:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>l,default:()=>u,assets:()=>d,toc:()=>c,frontMatter:()=>o});var i=JSON.parse('{"id":"advanced/plugins","title":"Plugins","description":"Plugins are the building blocks of features in a Docusaurus site. Each plugin handles its own individual feature. Plugins may work and be distributed as part of a bundle via presets.","source":"@site/docs/advanced/plugins.mdx","sourceDirName":"advanced","slug":"/advanced/plugins","permalink":"/docs/advanced/plugins","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/main/website/docs/advanced/plugins.mdx","tags":[],"version":"current","lastUpdatedBy":"Kamil Moska\u0142a","lastUpdatedAt":1729244075000,"frontMatter":{},"sidebar":"docs","previous":{"title":"Architecture","permalink":"/docs/advanced/architecture"},"next":{"title":"Routing","permalink":"/docs/advanced/routing"}}'),s=t("24246"),a=t("80980");let o={},l="Plugins",d={},c=[{value:"Creating plugins",id:"creating-plugins",level:2},{value:"Function definition",id:"function-definition",level:3},{value:"Module definition",id:"module-definition",level:3},{value:"Plugin design",id:"plugin-design",level:2},{value:"Theme design",id:"theme-design",level:3}];function r(e){let n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"plugins",children:"Plugins"})}),"\n",(0,s.jsx)(n.p,{children:"Plugins are the building blocks of features in a Docusaurus site. Each plugin handles its own individual feature. Plugins may work and be distributed as part of a bundle via presets."}),"\n",(0,s.jsx)(n.h2,{id:"creating-plugins",children:"Creating plugins"}),"\n",(0,s.jsxs)(n.p,{children:["A plugin is a function that takes two parameters: ",(0,s.jsx)(n.code,{children:"context"})," and ",(0,s.jsx)(n.code,{children:"options"}),". It returns a plugin instance object (or a promise). You can create plugins as functions or modules. For more information, refer to the ",(0,s.jsx)(n.a,{href:"/docs/api/plugin-methods/",children:"plugin method references section"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"function-definition",children:"Function definition"}),"\n",(0,s.jsx)(n.p,{children:"You can use a plugin as a function directly included in the Docusaurus config file:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  // ...\n  plugins: [\n    // highlight-start\n    async function myPlugin(context, options) {\n      // ...\n      return {\n        name: 'my-plugin',\n        async loadContent() {\n          // ...\n        },\n        async contentLoaded({content, actions}) {\n          // ...\n        },\n        /* other lifecycle API */\n      };\n    },\n    // highlight-end\n  ],\n};\n"})}),"\n",(0,s.jsx)(n.h3,{id:"module-definition",children:"Module definition"}),"\n",(0,s.jsx)(n.p,{children:"You can use a plugin as a module path referencing a separate file or npm package:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  // ...\n  plugins: [\n    // without options:\n    './my-plugin',\n    // or with options:\n    ['./my-plugin', options],\n  ],\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Then in the folder ",(0,s.jsx)(n.code,{children:"my-plugin"}),", you can create an ",(0,s.jsx)(n.code,{children:"index.js"})," such as this:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="my-plugin/index.js"',children:"export default async function myPlugin(context, options) {\n  // ...\n  return {\n    name: 'my-plugin',\n    async loadContent() {\n      /* ... */\n    },\n    async contentLoaded({content, actions}) {\n      /* ... */\n    },\n    /* other lifecycle API */\n  };\n}\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsxs)(n.p,{children:["You can view all plugins installed in your site using the ",(0,s.jsx)(n.a,{href:"/__docusaurus/debug/metadata",children:"debug plugin's metadata panel"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Plugins come as several types:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"package"}),": an external package you installed"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"project"}),": a plugin you created in your project, given to Docusaurus as a local file path"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"local"}),": a plugin created using the function definition"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"synthetic"}),": a \"fake plugin\" Docusaurus created internally, so we take advantage of our modular architecture and don't let the core do much special work. You won't see this in the metadata because it's an implementation detail."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["You can access them on the client side with ",(0,s.jsx)(n.code,{children:"useDocusaurusContext().siteMetadata.pluginVersions"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"plugin-design",children:"Plugin design"}),"\n",(0,s.jsx)(n.p,{children:"Docusaurus' implementation of the plugins system provides us with a convenient way to hook into the website's lifecycle to modify what goes on during development/build, which involves (but is not limited to) extending the webpack config, modifying the data loaded, and creating new components to be used in a page."}),"\n",(0,s.jsx)(n.h3,{id:"theme-design",children:"Theme design"}),"\n",(0,s.jsxs)(n.p,{children:["When plugins have loaded their content, the data is made available to the client side through actions like ",(0,s.jsxs)(n.a,{href:"/docs/api/plugin-methods/lifecycle-apis#addRoute",children:[(0,s.jsx)(n.code,{children:"createData"})," + ",(0,s.jsx)(n.code,{children:"addRoute"})]})," or ",(0,s.jsx)(n.a,{href:"/docs/api/plugin-methods/lifecycle-apis#setGlobalData",children:(0,s.jsx)(n.code,{children:"setGlobalData"})}),". This data has to be ",(0,s.jsx)(n.em,{children:"serialized"})," to plain strings, because ",(0,s.jsx)(n.a,{href:"/docs/advanced/architecture",children:"plugins and themes run in different environments"}),". Once the data arrives on the client side, the rest becomes familiar to React developers: data is passed along components, components are bundled with Webpack, and rendered to the window through ",(0,s.jsx)(n.code,{children:"ReactDOM.render"}),"..."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Themes provide the set of UI components to render the content."})," Most content plugins need to be paired with a theme in order to be actually useful. The UI is a separate layer from the data schema, which makes swapping designs easy."]}),"\n",(0,s.jsx)(n.p,{children:"For example, a Docusaurus blog may consist of a blog plugin and a blog theme."}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["This is a contrived example: in practice, ",(0,s.jsx)(n.code,{children:"@docusaurus/theme-classic"})," provides the theme for docs, blog, and layouts."]})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  // highlight-next-line\n  themes: ['theme-blog'],\n  plugins: ['plugin-content-blog'],\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:["And if you want to use Bootstrap styling, you can swap out the theme with ",(0,s.jsx)(n.code,{children:"theme-blog-bootstrap"})," (another fictitious non-existing theme):"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  // highlight-next-line\n  themes: ['theme-blog-bootstrap'],\n  plugins: ['plugin-content-blog'],\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Now, although the theme receives the same data from the plugin, how the theme chooses to ",(0,s.jsx)(n.em,{children:"render"})," the data as UI can be drastically different."]}),"\n",(0,s.jsx)(n.p,{children:"While themes share the exact same lifecycle methods with plugins, themes' implementations can look very different from those of plugins based on themes' designed objectives."}),"\n",(0,s.jsxs)(n.p,{children:["Themes are designed to complete the build of your Docusaurus site and supply the components used by your site, plugins, and the themes themselves. A theme still acts like a plugin and exposes some lifecycle methods, but most likely they would not use ",(0,s.jsx)(n.a,{href:"/docs/api/plugin-methods/lifecycle-apis#loadContent",children:(0,s.jsx)(n.code,{children:"loadContent"})}),", since they only receive data from plugins, but don't generate data themselves; themes are typically also accompanied by an ",(0,s.jsx)(n.code,{children:"src/theme"})," directory full of components, which are made known to the core through the ",(0,s.jsx)(n.a,{href:"/docs/api/plugin-methods/extend-infrastructure#getThemePath",children:(0,s.jsx)(n.code,{children:"getThemePath"})})," lifecycle."]}),"\n",(0,s.jsx)(n.p,{children:"To summarize:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Themes share the same lifecycle methods with Plugins"}),"\n",(0,s.jsx)(n.li,{children:"Themes are run after all existing Plugins"}),"\n",(0,s.jsxs)(n.li,{children:["Themes add component aliases by providing ",(0,s.jsx)(n.code,{children:"getThemePath"}),"."]}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}},80980:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return o}});var i=t(27378);let s={},a=i.createContext(s);function o(e){let n=i.useContext(a);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);