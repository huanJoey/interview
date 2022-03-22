(window.webpackJsonp=window.webpackJsonp||[]).push([[228],{709:function(s,n,a){"use strict";a.r(n);var t=a(67),e=Object(t.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"面试官-说下你的vue项目的目录结构-如果是大型项目你该怎么划分结构和划分组件呢"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#面试官-说下你的vue项目的目录结构-如果是大型项目你该怎么划分结构和划分组件呢"}},[s._v("#")]),s._v(" 面试官：说下你的vue项目的目录结构，如果是大型项目你该怎么划分结构和划分组件呢？")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://static.vue-js.com/b6cd6a60-4aba-11eb-ab90-d9ae814b240d.png",alt:""}})]),s._v(" "),a("h2",{attrs:{id:"一、为什么要划分"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、为什么要划分"}},[s._v("#")]),s._v(" 一、为什么要划分")]),s._v(" "),a("p",[s._v("使用"),a("code",[s._v("vue")]),s._v("构建项目，项目结构清晰会提高开发效率，熟悉项目的各种配置同样会让开发效率更高")]),s._v(" "),a("p",[s._v("在划分项目结构的时候，需要遵循一些基本的原则：")]),s._v(" "),a("ul",[a("li",[s._v("文件夹和文件夹内部文件的语义一致性")]),s._v(" "),a("li",[s._v("单一入口/出口")]),s._v(" "),a("li",[s._v("就近原则，紧耦合的文件应该放到一起，且应以相对路径引用")]),s._v(" "),a("li",[s._v("公共的文件应该以绝对路径的方式从根目录引用")]),s._v(" "),a("li",[a("code",[s._v("/src")]),s._v(" 外的文件不应该被引入")])]),s._v(" "),a("h3",{attrs:{id:"文件夹和文件夹内部文件的语义一致性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文件夹和文件夹内部文件的语义一致性"}},[s._v("#")]),s._v(" 文件夹和文件夹内部文件的语义一致性")]),s._v(" "),a("p",[s._v("我们的目录结构都会有一个文件夹是按照路由模块来划分的，如"),a("code",[s._v("pages")]),s._v("文件夹，这个文件夹里面应该包含我们项目所有的路由模块，并且仅应该包含路由模块，而不应该有别的其他的非路由模块的文件夹")]),s._v(" "),a("p",[s._v("这样做的好处在于一眼就从 "),a("code",[s._v("pages")]),s._v("文件夹看出这个项目的路由有哪些")]),s._v(" "),a("h3",{attrs:{id:"单一入口-出口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#单一入口-出口"}},[s._v("#")]),s._v(" 单一入口/出口")]),s._v(" "),a("p",[s._v("举个例子，在"),a("code",[s._v("pages")]),s._v("文件夹里面存在一个"),a("code",[s._v("seller")]),s._v("文件夹，这时候"),a("code",[s._v("seller")]),s._v(" 文件夹应该作为一个独立的模块由外部引入，并且 "),a("code",[s._v("seller/index.js")]),s._v(" 应该作为外部引入 seller 模块的唯一入口")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 错误用法")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" sellerReducer "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'src/pages/seller/reducer'")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 正确用法")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" reducer "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" sellerReducer "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'src/pages/seller'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("这样做的好处在于，无论你的模块文件夹内部有多乱，外部引用的时候，都是从一个入口文件引入，这样就很好的实现了隔离，如果后续有重构需求，你就会发现这种方式的优点")]),s._v(" "),a("h3",{attrs:{id:"就近原则-紧耦合的文件应该放到一起-且应以相对路径引用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#就近原则-紧耦合的文件应该放到一起-且应以相对路径引用"}},[s._v("#")]),s._v(" 就近原则，紧耦合的文件应该放到一起，且应以相对路径引用")]),s._v(" "),a("p",[s._v("使用相对路径可以保证模块内部的独立性")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 正确用法")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" styles "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./index.module.scss'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 错误用法")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" styles "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'src/pages/seller/index.module.scss'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("举个例子")]),s._v(" "),a("p",[s._v("假设我们现在的 seller 目录是在 "),a("code",[s._v("src/pages/seller")]),s._v("，如果我们后续发生了路由变更，需要加一个层级，变成 "),a("code",[s._v("src/pages/user/seller")]),s._v("。")]),s._v(" "),a("p",[s._v("如果我们采用第一种相对路径的方式，那就可以直接将整个文件夹拖过去就好，"),a("code",[s._v("seller")]),s._v(" 文件夹内部不需要做任何变更。")]),s._v(" "),a("p",[s._v("但是如果我们采用第二种绝对路径的方式，移动文件夹的同时，还需要对每个 "),a("code",[s._v("import")]),s._v(" 的路径做修改")]),s._v(" "),a("h3",{attrs:{id:"公共的文件应该以绝对路径的方式从根目录引用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#公共的文件应该以绝对路径的方式从根目录引用"}},[s._v("#")]),s._v(" 公共的文件应该以绝对路径的方式从根目录引用")]),s._v(" "),a("p",[s._v("公共指的是多个路由模块共用，如一些公共的组件，我们可以放在"),a("code",[s._v("src/components")]),s._v("下")]),s._v(" "),a("p",[s._v("在使用到的页面中，采用绝对路径的形式引用")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 错误用法")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Input "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'../../components/input'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 正确用法")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Input "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'src/components/input'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("同样的，如果我们需要对文件夹结构进行调整。将 "),a("code",[s._v("/src/components/input")]),s._v(" 变成 "),a("code",[s._v("/src/components/new/input")]),s._v("，如果使用绝对路径，只需要全局搜索替换")]),s._v(" "),a("p",[s._v("再加上绝对路径有全局的语义，相对路径有独立模块的语义")]),s._v(" "),a("h3",{attrs:{id:"src-外的文件不应该被引入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#src-外的文件不应该被引入"}},[s._v("#")]),s._v(" /src 外的文件不应该被引入")]),s._v(" "),a("p",[a("code",[s._v("vue-cli")]),s._v("脚手架已经帮我们做了相关的约束了，正常我们的前端项目都会有个"),a("code",[s._v("src")]),s._v("文件夹，里面放着所有的项目需要的资源，"),a("code",[s._v("js")]),s._v(","),a("code",[s._v("css")]),s._v(", "),a("code",[s._v("png")]),s._v(", "),a("code",[s._v("svg")]),s._v(" 等等。"),a("code",[s._v("src")]),s._v(" 外会放一些项目配置，依赖，环境等文件")]),s._v(" "),a("p",[s._v("这样的好处是方便划分项目代码文件和配置文件")]),s._v(" "),a("h2",{attrs:{id:"二、目录结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、目录结构"}},[s._v("#")]),s._v(" 二、目录结构")]),s._v(" "),a("p",[s._v("单页面目录结构")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("project\n│  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("browserslistrc\n│  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("production\n│  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("eslintrc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\n│  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("gitignore\n│  babel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\n│  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("lock"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("json\n│  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("json\n│  "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("README")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("md\n│  vue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\n│  yarn"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("log\n│  yarn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("lock\n│\n├─"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v("\n│      favicon"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ico\n│      index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("html\n│\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" src\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" components\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" input\n            "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\n            "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("scss\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" pages\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" seller\n            "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" components\n                "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" input\n                    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\n                    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("scss\n            "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" reducer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\n            "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" saga"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\n            "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\n            "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("scss\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" buyer\n            "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br")])]),a("p",[s._v("多页面目录结构")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("my"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("vue"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("test"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n│  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("browserslistrc\n│  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("production\n│  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("eslintrc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\n│  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("gitignore\n│  babel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\n│  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("lock"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("json\n│  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("json\n│  "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("README")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("md\n│  vue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\n│  yarn"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("log\n│  yarn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("lock\n│\n├─"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v("\n│      favicon"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ico\n│      index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("html\n│\n└─src\n    ├─apis "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//接口文件根据页面或实例模块化")]),s._v("\n    │      index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\n    │      login"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\n    │\n    ├─components "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//全局公共组件")]),s._v("\n    │  └─header\n    │          index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("less\n    │          index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("vue\n    │\n    ├─config "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//配置（环境变量配置不同passid等）")]),s._v("\n    │      env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\n    │      index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\n    │\n    ├─contant "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//常量")]),s._v("\n    │      index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\n    │\n    ├─images "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//图片")]),s._v("\n    │      logo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("png\n    │\n    ├─pages "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//多页面vue项目，不同的实例")]),s._v("\n    │  ├─index "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//主实例")]),s._v("\n    │  │  │  index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\n    │  │  │  index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("vue\n    │  │  │  main"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\n    │  │  │  router"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\n    │  │  │  store"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\n    │  │  │\n    │  │  ├─components "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//业务组件")]),s._v("\n    │  │  └─pages "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//此实例中的各个路由")]),s._v("\n    │  │      ├─amenu\n    │  │      │      index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("vue\n    │  │      │\n    │  │      └─bmenu\n    │  │              index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("vue\n    │  │\n    │  └─login "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//另一个实例")]),s._v("\n    │          index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\n    │          index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("vue\n    │          main"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\n    │\n    ├─scripts "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//包含各种常用配置，工具函数")]),s._v("\n    │  │  map"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\n    │  │\n    │  └─utils\n    │          helper"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\n    │\n    ├─store "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//vuex仓库")]),s._v("\n    │  │  index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\n    │  │\n    │  ├─index\n    │  │      actions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\n    │  │      getters"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\n    │  │      index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\n    │  │      mutation"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("types"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\n    │  │      mutations"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\n    │  │      state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\n    │  │\n    │  └─user\n    │          actions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\n    │          getters"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\n    │          index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\n    │          mutation"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("types"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\n    │          mutations"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\n    │          state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\n    │\n    └─styles "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//样式统一配置")]),s._v("\n        │  components"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("less\n        │\n        ├─animation\n        │      index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("less\n        │      slide"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("less\n        │\n        ├─base\n        │      index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("less\n        │      style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("less\n        │      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("less\n        │      widget"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("less\n        │\n        └─common\n                index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("less\n                reset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("less\n                style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("less\n                transition"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("less\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br"),a("span",{staticClass:"line-number"},[s._v("68")]),a("br"),a("span",{staticClass:"line-number"},[s._v("69")]),a("br"),a("span",{staticClass:"line-number"},[s._v("70")]),a("br"),a("span",{staticClass:"line-number"},[s._v("71")]),a("br"),a("span",{staticClass:"line-number"},[s._v("72")]),a("br"),a("span",{staticClass:"line-number"},[s._v("73")]),a("br"),a("span",{staticClass:"line-number"},[s._v("74")]),a("br"),a("span",{staticClass:"line-number"},[s._v("75")]),a("br"),a("span",{staticClass:"line-number"},[s._v("76")]),a("br"),a("span",{staticClass:"line-number"},[s._v("77")]),a("br"),a("span",{staticClass:"line-number"},[s._v("78")]),a("br"),a("span",{staticClass:"line-number"},[s._v("79")]),a("br"),a("span",{staticClass:"line-number"},[s._v("80")]),a("br"),a("span",{staticClass:"line-number"},[s._v("81")]),a("br"),a("span",{staticClass:"line-number"},[s._v("82")]),a("br"),a("span",{staticClass:"line-number"},[s._v("83")]),a("br"),a("span",{staticClass:"line-number"},[s._v("84")]),a("br"),a("span",{staticClass:"line-number"},[s._v("85")]),a("br"),a("span",{staticClass:"line-number"},[s._v("86")]),a("br"),a("span",{staticClass:"line-number"},[s._v("87")]),a("br"),a("span",{staticClass:"line-number"},[s._v("88")]),a("br"),a("span",{staticClass:"line-number"},[s._v("89")]),a("br"),a("span",{staticClass:"line-number"},[s._v("90")]),a("br"),a("span",{staticClass:"line-number"},[s._v("91")]),a("br"),a("span",{staticClass:"line-number"},[s._v("92")]),a("br"),a("span",{staticClass:"line-number"},[s._v("93")]),a("br"),a("span",{staticClass:"line-number"},[s._v("94")]),a("br"),a("span",{staticClass:"line-number"},[s._v("95")]),a("br"),a("span",{staticClass:"line-number"},[s._v("96")]),a("br"),a("span",{staticClass:"line-number"},[s._v("97")]),a("br"),a("span",{staticClass:"line-number"},[s._v("98")]),a("br"),a("span",{staticClass:"line-number"},[s._v("99")]),a("br"),a("span",{staticClass:"line-number"},[s._v("100")]),a("br"),a("span",{staticClass:"line-number"},[s._v("101")]),a("br")])]),a("h3",{attrs:{id:"小结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[s._v("#")]),s._v(" 小结")]),s._v(" "),a("p",[s._v("项目的目录结构很重要，因为目录结构能体现很多东西，怎么规划目录结构可能每个人有自己的理解，但是按照一定的规范去进行目录的设计，能让项目整个架构看起来更为简洁，更加易用")]),s._v(" "),a("h2",{attrs:{id:"参考文献"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[s._v("#")]),s._v(" 参考文献")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("https://juejin.cn/post/6844904129186234381#heading-0")])]),s._v(" "),a("li",[a("p",[s._v("https://zhuanlan.zhihu.com/p/89693668")])])])])}),[],!1,null,null,null);n.default=e.exports}}]);