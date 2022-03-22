(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{573:function(v,_,e){"use strict";e.r(_);var t=e(67),r=Object(t.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("h1",{attrs:{id:"面试官-说说你在使用react-过程中遇到的常见问题-如何解决"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#面试官-说说你在使用react-过程中遇到的常见问题-如何解决"}},[v._v("#")]),v._v(" 面试官：说说你在使用React 过程中遇到的常见问题？如何解决?")]),v._v(" "),e("p",[e("img",{attrs:{src:"https://static.vue-js.com/7efcd400-f47d-11eb-ab90-d9ae814b240d.png",alt:""}})]),v._v(" "),e("h2",{attrs:{id:"一、前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、前言"}},[v._v("#")]),v._v(" 一、前言")]),v._v(" "),e("p",[v._v("在使用"),e("code",[v._v("react")]),v._v('开发项目过程中，每个人或多或少都会遇到一些"奇怪"的问题，本质上都是我们对其理解的不够透彻')]),v._v(" "),e("p",[e("code",[v._v("react")]),v._v(" 系列，33个工作日，33次凌晨还在亮起的台灯，到今天就圆满画上句号了，比心")]),v._v(" "),e("p",[v._v("在系列中我们列出了很多比较经典的考题，工作中遇到的问题也往往就藏中其中，只是以不同的表现形式存在罢了")]),v._v(" "),e("p",[v._v("今天的题解不算题解，准确来说是对整个系列的一次贯穿，总结")]),v._v(" "),e("p",[v._v("目录:")]),v._v(" "),e("ul",[e("li",[v._v("react 有什么特性")]),v._v(" "),e("li",[v._v("生命周期有哪些不同阶段？每个阶段对应的方法是？")]),v._v(" "),e("li",[v._v("state 和 props有什么区别？")]),v._v(" "),e("li",[v._v("super()和super(props)有什么区别？")]),v._v(" "),e("li",[v._v("setState执行机制？")]),v._v(" "),e("li",[v._v("React的事件机制？")]),v._v(" "),e("li",[v._v("事件绑定的方式有哪些？")]),v._v(" "),e("li",[v._v("构建组件的方式有哪些？区别？")]),v._v(" "),e("li",[v._v("组件之间如何通信？")]),v._v(" "),e("li",[v._v("key有什么作用？")]),v._v(" "),e("li",[v._v("refs 的理解？应用场景？")]),v._v(" "),e("li",[v._v("Hooks的理解？解决了什么问题？")]),v._v(" "),e("li",[v._v("如何引入css？")]),v._v(" "),e("li",[v._v("redux工作原理？")]),v._v(" "),e("li",[v._v("redux中间件有哪些？")]),v._v(" "),e("li",[v._v("react-router组件有哪些？")]),v._v(" "),e("li",[v._v("render触发时机？")]),v._v(" "),e("li",[v._v("如何减少render？")]),v._v(" "),e("li",[v._v("JSX转化DOM过程？")]),v._v(" "),e("li",[v._v("性能优化手段有哪些")]),v._v(" "),e("li",[v._v("如何做服务端渲染？")])]),v._v(" "),e("h3",{attrs:{id:"react-有什么特性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#react-有什么特性"}},[v._v("#")]),v._v(" react 有什么特性")]),v._v(" "),e("p",[v._v("主要的特性分为：")]),v._v(" "),e("ul",[e("li",[v._v("JSX语法")]),v._v(" "),e("li",[v._v("单向数据绑定")]),v._v(" "),e("li",[v._v("虚拟DOM")]),v._v(" "),e("li",[v._v("声明式编程")]),v._v(" "),e("li",[v._v("Component")])]),v._v(" "),e("p",[v._v("借助这些特性，"),e("code",[v._v("react")]),v._v("整体使用起来更加简单高效，组件式开发提高了代码的复用率")]),v._v(" "),e("h3",{attrs:{id:"生命周期有哪些不同阶段-每个阶段对应的方法是"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#生命周期有哪些不同阶段-每个阶段对应的方法是"}},[v._v("#")]),v._v(" 生命周期有哪些不同阶段？每个阶段对应的方法是？")]),v._v(" "),e("p",[v._v("主要分成了新的生命周期和旧的生命周期：")]),v._v(" "),e("ul",[e("li",[e("p",[v._v("新版生命周期整体流程如下图所示：")]),v._v(" "),e("p",[e("img",{attrs:{src:"https://static.vue-js.com/66c999c0-d373-11eb-85f6-6fac77c0c9b3.png",alt:""}})]),v._v(" "),e("p",[v._v("旧的生命周期流程图如下：")]),v._v(" "),e("p",[e("img",{attrs:{src:"https://static.vue-js.com/d379e420-d374-11eb-ab90-d9ae814b240d.png",alt:""}})])])]),v._v(" "),e("h3",{attrs:{id:"state-和-props有什么区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#state-和-props有什么区别"}},[v._v("#")]),v._v(" state 和 props有什么区别？")]),v._v(" "),e("p",[v._v("两者相同点：")]),v._v(" "),e("ul",[e("li",[v._v("两者都是 JavaScript 对象")]),v._v(" "),e("li",[v._v("两者都是用于保存信息")]),v._v(" "),e("li",[v._v("props 和 state 都能触发渲染更新")])]),v._v(" "),e("p",[v._v("区别：")]),v._v(" "),e("ul",[e("li",[v._v("props 是外部传递给组件的，而 state 是在组件内被组件自己管理的，一般在 constructor 中初始化")]),v._v(" "),e("li",[v._v("props 在组件内部是不可修改的，但 state 在组件内部可以进行修改")]),v._v(" "),e("li",[v._v("state 是多变的、可以修改")])]),v._v(" "),e("h3",{attrs:{id:"super-和super-props-有什么区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#super-和super-props-有什么区别"}},[v._v("#")]),v._v(" super()和super(props)有什么区别？")]),v._v(" "),e("p",[v._v("在"),e("code",[v._v("React")]),v._v("中，类组件基于"),e("code",[v._v("ES6")]),v._v("，所以在"),e("code",[v._v("constructor")]),v._v("中必须使用"),e("code",[v._v("super")])]),v._v(" "),e("p",[v._v("在调用"),e("code",[v._v("super")]),v._v("过程，无论是否传入"),e("code",[v._v("props")]),v._v("，"),e("code",[v._v("React")]),v._v("内部都会将"),e("code",[v._v("porps")]),v._v("赋值给组件实例"),e("code",[v._v("porps")]),v._v("属性中")]),v._v(" "),e("p",[v._v("如果只调用了"),e("code",[v._v("super()")]),v._v("，那么"),e("code",[v._v("this.props")]),v._v("在"),e("code",[v._v("super()")]),v._v("和构造函数结束之间仍是"),e("code",[v._v("undefined")])]),v._v(" "),e("h3",{attrs:{id:"setstate执行机制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#setstate执行机制"}},[v._v("#")]),v._v(" setState执行机制？")]),v._v(" "),e("p",[v._v("在"),e("code",[v._v("react")]),v._v("类组件的状态需要通过"),e("code",[v._v("setState")]),v._v("进行更改，在不同场景下对应不同的执行顺序：")]),v._v(" "),e("ul",[e("li",[v._v("在组件生命周期或React合成事件中，setState是异步")]),v._v(" "),e("li",[v._v("在setTimeout或者原生dom事件中，setState是同步")])]),v._v(" "),e("p",[v._v("当我们批量更改"),e("code",[v._v("state")]),v._v("的值的时候，"),e("code",[v._v("react")]),v._v("内部会将其进行覆盖，只取最后一次的执行结果")]),v._v(" "),e("p",[v._v("当需要下一个"),e("code",[v._v("state")]),v._v("依赖当前"),e("code",[v._v("state")]),v._v("的时候，则可以在"),e("code",[v._v("setState")]),v._v("中传递一个回调函数进行下次更新")]),v._v(" "),e("h3",{attrs:{id:"react的事件机制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#react的事件机制"}},[v._v("#")]),v._v(" React的事件机制？")]),v._v(" "),e("p",[e("code",[v._v("React")]),v._v("基于浏览器的事件机制自身实现了一套事件机制，包括事件注册、事件的合成、事件冒泡、事件派发等")]),v._v(" "),e("p",[v._v("组件注册的事件最终会绑定在"),e("code",[v._v("document")]),v._v("这个 "),e("code",[v._v("DOM")]),v._v("上，而不是 "),e("code",[v._v("React")]),v._v("组件对应的 "),e("code",[v._v("DOM")]),v._v("，从而节省内存开销")]),v._v(" "),e("p",[v._v("自身实现了一套事件冒泡机制，阻止不同时间段的冒泡行为，需要对应使用不同的方法")]),v._v(" "),e("h3",{attrs:{id:"事件绑定的方式有哪些"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#事件绑定的方式有哪些"}},[v._v("#")]),v._v(" 事件绑定的方式有哪些？")]),v._v(" "),e("p",[e("code",[v._v("react")]),v._v("常见的绑定方式有如下：")]),v._v(" "),e("ul",[e("li",[v._v("render方法中使用bind")]),v._v(" "),e("li",[v._v("render方法中使用箭头函数")]),v._v(" "),e("li",[v._v("constructor中bind")]),v._v(" "),e("li",[v._v("定义阶段使用箭头函数绑定")])]),v._v(" "),e("p",[v._v("前两种方式在每次组件"),e("code",[v._v("render")]),v._v("的时候都会生成新的方法实例，性能问题欠缺")]),v._v(" "),e("h3",{attrs:{id:"构建组件的方式有哪些-区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#构建组件的方式有哪些-区别"}},[v._v("#")]),v._v(" 构建组件的方式有哪些？区别？")]),v._v(" "),e("p",[v._v("组件的创建主要分成了三种方式：")]),v._v(" "),e("ul",[e("li",[v._v("函数式创建")]),v._v(" "),e("li",[v._v("继承 React.Component 创建")]),v._v(" "),e("li",[v._v("通过 React.createClass 方法创建")])]),v._v(" "),e("p",[v._v("如今一般都是前两种方式，对于一些无状态的组件创建，建议使用函数式创建的方式，再比如"),e("code",[v._v("hooks")]),v._v("的机制下，函数式组件能做类组件对应的事情，所以建议都使用函数式的方式来创建组件")]),v._v(" "),e("h3",{attrs:{id:"组件之间如何通信"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#组件之间如何通信"}},[v._v("#")]),v._v(" 组件之间如何通信？")]),v._v(" "),e("p",[v._v("组件间通信可以通过"),e("code",[v._v("props")]),v._v("、传递回调函数、"),e("code",[v._v("context")]),v._v("、"),e("code",[v._v("redux")]),v._v("等形式进行组件之间通讯")]),v._v(" "),e("h3",{attrs:{id:"key有什么作用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#key有什么作用"}},[v._v("#")]),v._v(" key有什么作用？")]),v._v(" "),e("p",[v._v("使用"),e("code",[v._v("key")]),v._v("是"),e("code",[v._v("react")]),v._v("性能优化的手段，在一系列数据最前面插入元素，如果没有"),e("code",[v._v("key")]),v._v("的值，则所有的元素都需要进行更换，而有"),e("code",[v._v("key")]),v._v("的情况只需要将最新元素插入到前面，不涉及删除操作")]),v._v(" "),e("p",[v._v("在使用"),e("code",[v._v("key")]),v._v("的时候应保证：")]),v._v(" "),e("ul",[e("li",[v._v("key 应该是唯一的")]),v._v(" "),e("li",[v._v("key不要使用随机值（随机数在下一次 render 时，会重新生成一个数字）")]),v._v(" "),e("li",[v._v("避免使用 index 作为 key")])]),v._v(" "),e("h3",{attrs:{id:"refs-的理解-应用场景"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#refs-的理解-应用场景"}},[v._v("#")]),v._v(" refs 的理解？应用场景？")]),v._v(" "),e("p",[e("code",[v._v("Refs")]),v._v("允许我们访问 "),e("code",[v._v("DOM")]),v._v("节点或在 "),e("code",[v._v("render")]),v._v("方法中创建的 "),e("code",[v._v("React")]),v._v("元素")]),v._v(" "),e("p",[v._v("下面的场景使用"),e("code",[v._v("refs")]),v._v("非常有用：")]),v._v(" "),e("ul",[e("li",[v._v("对Dom元素的焦点控制、内容选择、控制")]),v._v(" "),e("li",[v._v("对Dom元素的内容设置及媒体播放")]),v._v(" "),e("li",[v._v("对Dom元素的操作和对组件实例的操作")]),v._v(" "),e("li",[v._v("集成第三方 DOM 库")])]),v._v(" "),e("h3",{attrs:{id:"hooks的理解-解决了什么问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hooks的理解-解决了什么问题"}},[v._v("#")]),v._v(" Hooks的理解？解决了什么问题？")]),v._v(" "),e("p",[e("code",[v._v("Hook")]),v._v(" 是 React 16.8 的新增特性。它可以让你在不编写 "),e("code",[v._v("class")]),v._v(" 的情况下使用 "),e("code",[v._v("state")]),v._v(" 以及其他的 "),e("code",[v._v("React")]),v._v(" 特性")]),v._v(" "),e("p",[v._v("解决问题如下：")]),v._v(" "),e("ul",[e("li",[v._v("难以重用和共享组件中的与状态相关的逻辑")]),v._v(" "),e("li",[v._v("逻辑复杂的组件难以开发与维护，当我们的组件需要处理多个互不相关的 local state 时，每个生命周期函数中可能会包含着各种互不相关的逻辑在里面")]),v._v(" "),e("li",[v._v("类组件中的this增加学习成本，类组件在基于现有工具的优化上存在些许问题")]),v._v(" "),e("li",[v._v("由于业务变动，函数组件不得不改为类组件等等")])]),v._v(" "),e("h3",{attrs:{id:"如何引入css"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何引入css"}},[v._v("#")]),v._v(" 如何引入css？")]),v._v(" "),e("p",[v._v("常见的"),e("code",[v._v("CSS")]),v._v("引入方式有以下：")]),v._v(" "),e("ul",[e("li",[v._v("在组件内直接使用")]),v._v(" "),e("li",[v._v("组件中引入 .css 文件")]),v._v(" "),e("li",[v._v("组件中引入 .module.css 文件")]),v._v(" "),e("li",[v._v("CSS in JS")])]),v._v(" "),e("p",[v._v("组件内直接使用"),e("code",[v._v("css")]),v._v("会导致大量的代码，而文件中直接引入"),e("code",[v._v("css")]),v._v("文件是全局作用域，发生层叠")]),v._v(" "),e("p",[v._v("引入"),e("code",[v._v(".module.css")]),v._v("文件能够解决局部作用域问题，但是不方便动态修改样式，需要使用内联的方式进行样式的编写")]),v._v(" "),e("p",[e("code",[v._v("css in js")]),v._v("这种方法，可以满足大部分场景的应用，可以类似于预处理器一样样式嵌套、定义、修改状态等")]),v._v(" "),e("h3",{attrs:{id:"redux工作原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redux工作原理"}},[v._v("#")]),v._v(" redux工作原理？")]),v._v(" "),e("p",[e("code",[v._v("redux")]),v._v("要求我们把数据都放在 "),e("code",[v._v("store")]),v._v("公共存储空间")]),v._v(" "),e("p",[v._v("一个组件改变了 "),e("code",[v._v("store")]),v._v(" 里的数据内容，其他组件就能感知到 "),e("code",[v._v("store")]),v._v("的变化，再来取数据，从而间接的实现了这些数据传递的功能")]),v._v(" "),e("p",[v._v("工作流程图如下所示：")]),v._v(" "),e("p",[e("img",{attrs:{src:"https://static.vue-js.com/27b2e930-e56b-11eb-85f6-6fac77c0c9b3.png",alt:""}})]),v._v(" "),e("h3",{attrs:{id:"redux中间件有哪些"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redux中间件有哪些"}},[v._v("#")]),v._v(" redux中间件有哪些？")]),v._v(" "),e("p",[v._v("市面上有很多优秀的"),e("code",[v._v("redux")]),v._v("中间件，如：")]),v._v(" "),e("ul",[e("li",[v._v("redux-thunk：用于异步操作")]),v._v(" "),e("li",[v._v("redux-logger：用于日志记录")])]),v._v(" "),e("h3",{attrs:{id:"react-router组件有哪些"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#react-router组件有哪些"}},[v._v("#")]),v._v(" react-router组件有哪些？")]),v._v(" "),e("p",[v._v("常见的组件有：")]),v._v(" "),e("ul",[e("li",[v._v("BrowserRouter、HashRouter")]),v._v(" "),e("li",[v._v("Route")]),v._v(" "),e("li",[v._v("Link、NavLink")]),v._v(" "),e("li",[v._v("switch")]),v._v(" "),e("li",[v._v("redirect")])]),v._v(" "),e("h3",{attrs:{id:"render触发时机"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#render触发时机"}},[v._v("#")]),v._v(" render触发时机？")]),v._v(" "),e("p",[v._v("在"),e("code",[v._v("React")]),v._v(" 中，类组件只要执行了 "),e("code",[v._v("setState")]),v._v(" 方法，就一定会触发 "),e("code",[v._v("render")]),v._v(" 函数执行")]),v._v(" "),e("p",[v._v("函数组件"),e("code",[v._v("useState")]),v._v(" 会判断当前值有无发生改变确定是否执行"),e("code",[v._v("render")]),v._v("方法，一旦父组件发生渲染，子组件也会渲染")]),v._v(" "),e("h3",{attrs:{id:"如何减少render"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何减少render"}},[v._v("#")]),v._v(" 如何减少render？")]),v._v(" "),e("p",[v._v("父组件渲染导致子组件渲染，子组件并没有发生任何改变，这时候就可以从避免无谓的渲染，具体实现的方式有如下：")]),v._v(" "),e("ul",[e("li",[v._v("shouldComponentUpdate")]),v._v(" "),e("li",[v._v("PureComponent")]),v._v(" "),e("li",[v._v("React.memo")])]),v._v(" "),e("h3",{attrs:{id:"jsx转化dom过程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jsx转化dom过程"}},[v._v("#")]),v._v(" JSX转化DOM过程？")]),v._v(" "),e("p",[e("code",[v._v("jsx")]),v._v("首先会转化成"),e("code",[v._v("React.createElement")]),v._v("这种形式，"),e("code",[v._v("React.createElement")]),v._v("作用是生成一个虚拟"),e("code",[v._v("Dom")]),v._v("对象，然后会通过"),e("code",[v._v("ReactDOM.render")]),v._v("进行渲染成真实"),e("code",[v._v("DOM")])]),v._v(" "),e("h3",{attrs:{id:"性能优化手段有哪些"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#性能优化手段有哪些"}},[v._v("#")]),v._v(" 性能优化手段有哪些")]),v._v(" "),e("p",[v._v("除了减少"),e("code",[v._v("render")]),v._v("的渲染之外，还可以通过以下手段进行优化：")]),v._v(" "),e("p",[v._v("除此之外， 常见性能优化常见的手段有如下：")]),v._v(" "),e("ul",[e("li",[v._v("避免使用内联函数")]),v._v(" "),e("li",[v._v("使用 React Fragments 避免额外标记")]),v._v(" "),e("li",[v._v("使用 Immutable")]),v._v(" "),e("li",[v._v("懒加载组件")]),v._v(" "),e("li",[v._v("事件绑定方式")]),v._v(" "),e("li",[v._v("服务端渲染")])]),v._v(" "),e("h3",{attrs:{id:"如何做服务端渲染"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何做服务端渲染"}},[v._v("#")]),v._v(" 如何做服务端渲染？")]),v._v(" "),e("p",[e("code",[v._v("node server")]),v._v(" 接收客户端请求，得到当前的请求"),e("code",[v._v("url")]),v._v(" 路径，然后在已有的路由表内查找到对应的组件，拿到需要请求的数据，将数据作为 "),e("code",[v._v("props")]),v._v("、"),e("code",[v._v("context")]),v._v("或者"),e("code",[v._v("store")]),v._v(" 形式传入组件")]),v._v(" "),e("p",[v._v("然后基于 "),e("code",[v._v("react")]),v._v(" 内置的服务端渲染方法 "),e("code",[v._v("renderToString()")]),v._v("把组件渲染为 "),e("code",[v._v("html")]),v._v("字符串在把最终的 "),e("code",[v._v("html")]),v._v("进行输出前需要将数据注入到浏览器端")]),v._v(" "),e("p",[v._v("浏览器开始进行渲染和节点对比，然后执行完成组件内事件绑定和一些交互，浏览器重用了服务端输出的 "),e("code",[v._v("html")]),v._v(" 节点，整个流程结束")]),v._v(" "),e("p",[e("img",{attrs:{src:"https://static.vue-js.com/a2894970-f3f7-11eb-85f6-6fac77c0c9b3.png",alt:""}})])])}),[],!1,null,null,null);_.default=r.exports}}]);