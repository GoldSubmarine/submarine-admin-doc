(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{351:function(t,a,s){"use strict";s.r(a);var v=s(42),e=Object(v.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"国际化方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#国际化方案"}},[t._v("#")]),t._v(" 国际化方案")]),t._v(" "),s("p",[t._v("国际化的过程，分为两步")]),t._v(" "),s("ol",[s("li",[t._v("确定语言环境")]),t._v(" "),s("li",[t._v("针对语言环境展示不同语言的文字")])]),t._v(" "),s("h2",{attrs:{id:"确定语言环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#确定语言环境"}},[t._v("#")]),t._v(" 确定语言环境")]),t._v(" "),s("p",[t._v("对用户来说：")]),t._v(" "),s("ol",[s("li",[t._v("页面提供切换功能，用户可以选择语言环境。")]),t._v(" "),s("li",[t._v("系统自动判断语言环境，自动展示对应的语言文字。自动判断语言环境，可以是前端浏览器获取，也可以是后端服务根据请求头的相关信息（如时区、IP）等信息来判断。")])]),t._v(" "),s("p",[t._v("做的好的话，可以做成先自动判断，然后以用户选择为最高优先级。")]),t._v(" "),s("p",[t._v("需要注意：")]),t._v(" "),s("ol",[s("li",[t._v("无论用哪种方式，确定好语言环境后，需要前后端保持一致。")]),t._v(" "),s("li",[t._v("前端、后端，最好只有一个地方判断语言环境，判断好之后，通知另一方")])]),t._v(" "),s("p",[t._v("优势比较：")]),t._v(" "),s("ol",[s("li",[t._v("前端实现比较简单")]),t._v(" "),s("li",[t._v("后端实现可以实现更复杂的判断规则")])]),t._v(" "),s("p",[s("strong",[t._v("对于我们的项目来说，前端判断足以满足需求。因此，统一在前端判断语言环境。")])]),t._v(" "),s("h2",{attrs:{id:"针对语言环境展示不同语言的文字"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#针对语言环境展示不同语言的文字"}},[t._v("#")]),t._v(" 针对语言环境展示不同语言的文字")]),t._v(" "),s("p",[t._v("确定了语言环境后，需要针对不同的语言展示不同的文字。")]),t._v(" "),s("p",[t._v("需要国际化的地方有：")]),t._v(" "),s("ol",[s("li",[t._v("前端的菜单、按钮、静态页面上的文字")]),t._v(" "),s("li",[t._v("后端返回的数据的国际化")])]),t._v(" "),s("p",[t._v("可能的做法有三种：")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("完全后端来做")]),t._v(" "),s("p",[t._v("前后端分离情况下，前端的静态页面不从后端获取，后端无法根据不同的语言环境，展示不同的文字。这个方案是行不通的。")])]),t._v(" "),s("li",[s("p",[t._v("前后端都做")]),t._v(" "),s("p",[t._v("前后端分离，那么静态页面，由前端来做国际化。后端返回的信息，由后端来做国际化。")]),t._v(" "),s("p",[t._v("这个方案：")]),t._v(" "),s("ol",[s("li",[t._v("前后端都做，职责不单一")]),t._v(" "),s("li",[t._v("如果要修改，某些返回的提示信息，需要修改后端服务，可能需要重启（或者不重启，采用提示信息存数据库的方案），带来新的复杂度")])]),t._v(" "),s("p",[t._v("因此，放弃这个方案。采用完全由前端做国际化的方案。")]),t._v(" "),s("p",[s("strong",[t._v("后端不关心当前的语言环境。前端判断语言环境之后，自己用就可以了，不用传给后台。")])]),t._v(" "),s("blockquote",[s("p",[t._v("有个例外情况，就是对于用户产生数据的国际化。\n一般来说，用户产生数据，不需要国际化。但是某些情况下，用户产生的数据，需要展示给不同国家的人（比如，淘宝的商品介绍），那么此时我们会提供给用户功能，针对不同的语言环境，用户产生不同的内容数据。这种情况下，后端需要关心语言环境。")])])]),t._v(" "),s("li",[s("p",[t._v("完全前端来做")]),t._v(" "),s("p",[t._v("静态页面的国际化，前端做起来很容易。后端返回数据需要特别处理一下。")]),t._v(" "),s("p",[t._v("后端返回的数据大概分为两类：")]),t._v(" "),s("ol",[s("li",[t._v("用户产生的内容信息")]),t._v(" "),s("li",[t._v("用户操作的提示信息（保存成功、参数错误等提示信息）")])]),t._v(" "),s("p",[t._v("第一类信息一般是不需要国际化的（见上一条），第二类信息是需要的。")]),t._v(" "),s("p",[s("strong",[t._v("后端需要对返回给用户的提示信息，做统一格式的返回")]),t._v("。")]),t._v(" "),s("p",[t._v("基本上返回的信息，需要包含一个 code，表明正确或错误的类型，前端根据这个 code 做翻译，显示不同的文字。")]),t._v(" "),s("p",[t._v("一个完整的后端返回信息如下（见 SpringBoot 统一错误处理）：")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"status"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("404")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"code"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("40483")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"message"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Oops! It looks like that file does not exist."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"developerMessage"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"File resource for path /uploads/foobar.txt does not exist.  Please wait 10 minutes until the upload batch completes before checking again."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"moreInfo"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://www.mycompany.com/errors/40483"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("根据我们的实际情况，做裁剪，最终决定：")]),t._v(" "),s("ol",[s("li",[t._v("返回的内容分为两类，一类是内容，比如一个 User 或 User List，一类是提示信息")]),t._v(" "),s("li",[t._v("对于内容信息，直接返回内容")]),t._v(" "),s("li",[t._v("对于提示信息，无论正确还是错误，统一返回一个"),s("code",[t._v("Result")])])]),t._v(" "),s("p",[t._v("后端返回"),s("code",[t._v("Result")]),t._v("的格式为：")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"code"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"msg"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"data"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ol",[s("li",[s("code",[t._v("code")]),t._v(" 表明正确或错误的提示种类，前端根据"),s("code",[t._v("code")]),t._v(" 去不同的语言环境文件里找 提示字符串")]),t._v(" "),s("li",[t._v("提示字符串，有可能有占位符，需要数据填充，"),s("code",[t._v("data")]),t._v(" 里就有需要填充的数据。"),s("code",[t._v("data")]),t._v("的格式不固定，既可能是一个字符或数字，也可能是数组或对象等等。"),s("code",[t._v("data")]),t._v(" 里除了可以放“替代占位符的数据”之外，还可以放其他前端需要的内容，比如返回重置后的密码等内容。")]),t._v(" "),s("li",[s("code",[t._v("msg")]),t._v("的内容是某一种语言的提示文字，我们这里选定了中文。这个文字，对于后端人员来说，可以知道 "),s("code",[t._v("code")]),t._v("代表的"),s("code",[t._v("msg")]),t._v("是什么样的（后端在定义返回结果时，定义一个枚举"),s("code",[t._v("ResultStatus")]),t._v("，有"),s("code",[t._v("code")]),t._v("和"),s("code",[t._v("msg")]),t._v("，"),s("code",[t._v("msg")]),t._v("就是对"),s("code",[t._v("code")]),t._v("的描述）。对于前端来说，如果前端不需要支持国际化，那么可以不用根据"),s("code",[t._v("code")]),t._v("查找国际化文件。直接根据"),s("code",[t._v("msg")]),t._v("和"),s("code",[t._v("data")]),t._v("来提示就可以。")])])])]),t._v(" "),s("h3",{attrs:{id:"bean-validation-的国际化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bean-validation-的国际化"}},[t._v("#")]),t._v(" Bean Validation 的国际化")]),t._v(" "),s("blockquote",[s("p",[t._v("这里，Bean Validation 表示的是 JSR 303 规范")])]),t._v(" "),s("p",[t._v("Bean Validation 通过在字段上加注解的方式来校验数据，并抛出对应的异常。")]),t._v(" "),s("p",[t._v("由于 Bean Validation 自带了国际化，根据枚举类型，或者注解上的 message 进行错误提示。")]),t._v(" "),s("p",[t._v("我们想把我们的枚举"),s("code",[t._v("ResultStatus")]),t._v(" 应用在注解上是不可能的，注解上没法用枚举。其他也没有比较优雅的定义错误码"),s("code",[t._v("code")]),t._v("的方式。因此，我们的错误处理机制在这里是失效的。")]),t._v(" "),s("p",[t._v("另外，考虑一种情况：一个字段，假设是 userName 为空了，后端最多提示出来 “userName 不能为空”，无法提示“用户名不能为空”。这里的问题是 userName 代表的 label 是在前端指定的，后端是不知道的。这种情况下，后端无法提示出对用户友好的错误提示。 因此，Bean Validation 自带的国际化方案也不好用。")]),t._v(" "),s("p",[t._v("权衡之后，最终的方案是：")]),t._v(" "),s("ol",[s("li",[t._v("前后端的 Bean Validation 保持一致，或者前端的校验比后端更严格。")]),t._v(" "),s("li",[t._v("用户在前台页面输入，正常情况下错误信息会由前端给出。")]),t._v(" "),s("li",[t._v("如果前端未拦住非法输入，提交给后端了，后端对于 Bean Validation 类异常，统一返回一个统一的 code，msg 返回 Bean Validation 默认语言文件的提示信息。前端收到这个统一的错误 code 之后，统一提示“参数错误”，忽略 msg。msg 只给 api 调用者使用，这里 msg 的内容是 “userName 不能为空”，返回这个错误信息，在这里是合理的。因为 api 调用者，提交给后台的就是 "),s("code",[t._v("userName:null")]),t._v("，因此返回 userName 不能为空 是合理的。")])])])}),[],!1,null,null,null);a.default=e.exports}}]);