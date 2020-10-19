(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{355:function(t,a,s){"use strict";s.r(a);var n=s(42),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"代码格式化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码格式化"}},[t._v("#")]),t._v(" 代码格式化")]),t._v(" "),s("p",[t._v("统一的代码风格有助于维护项目的发展，不让它变得糟糕，特别在有些较为复杂的逻辑，或较长、较深的嵌套写法时，开发人员手动都不能很好的换行缩进，所以需要一款自动格式化代码的工具。")]),t._v(" "),s("p",[t._v("在前端领域，限制代码风格已经非常普及和成熟，常用的方案是 eslint + prettier ，本项目的前端目前只使用了 eslint，就已经有非常不错的效果，有需要也可以加入 prettier，不再过多赘述，相关文章非常的多。")]),t._v(" "),s("p",[t._v("这里我们只讨论后端的代码格式化。")]),t._v(" "),s("h2",{attrs:{id:"方案对比"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#方案对比"}},[t._v("#")]),t._v(" 方案对比")]),t._v(" "),s("p",[t._v("代码格式化有多种方案，总体分为两类：强格式化和弱格式化")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("强格式化：能对包排序、智能换行、统一缩进、空行移除等，这类工具有 "),s("code",[t._v("google-java-format")]),t._v(" 和 "),s("code",[t._v("prettier")])])]),t._v(" "),s("li",[s("p",[t._v("弱格式化：只能根据简单编辑器规则格式化代码，常见的方式是自己配置一个 "),s("code",[t._v("idea-style.xml")]),t._v(" 或 "),s("code",[t._v("eclipse-style.xml")]),t._v(" 放在某些 maven plugin 下，这类工具效果往往较差，不符合我们的预期，例如阿里的 p3c、checkstyle(只校验)等")])])]),t._v(" "),s("p",[t._v("我们选用强格式化工具，下面对两者进行比较.")]),t._v(" "),s("h2",{attrs:{id:"google-java-format"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#google-java-format"}},[t._v("#")]),t._v(" google-java-format")]),t._v(" "),s("p",[t._v("google-java-format 是一种规范，也就是对各种场景应该如何格式化代码进行讨论，并制定规则。而"),s("a",{attrs:{href:"https://github.com/google/google-java-format",target:"_blank",rel:"noopener noreferrer"}},[t._v("google-java-format"),s("OutboundLink")],1),t._v(" 是对该规范的一种实现。")]),t._v(" "),s("p",[t._v("它在 java 领域经历了充分的讨论，并且应用十分广泛，各类 IDE 插件、maven 插件都能较好的支持。但是实际使用中有一些缺点：")]),t._v(" "),s("ul",[s("li",[t._v("不支持自定义规则，其中最大的问题是每行的最大长度强制限制为 100 个字符，遇到 stream 这种比较长的嵌套链式写法，会把代码切割的非常非常碎，直接影响了代码的阅读。")]),t._v(" "),s("li",[t._v("限定 100 个字符原因是：在 13 寸的屏幕下，横向不会出现滚动条，直接就能看到所有代码，但是办公环境往往使用 24 寸显示器，限定 100 个字符使屏幕右侧产生一大块的空白，没有有效利用屏幕空间。")])]),t._v(" "),s("p",[t._v("综上，这里我们没有采用 google-java-format，因为它的缺点直接影响了代码的阅读，问题十分严重。")]),t._v(" "),s("p",[t._v("通过测试，限定 120 个字符对于屏幕的利用率和代码折行都能达到一个不错的效果，"),s("strong",[t._v("所以这里我们采用 prettier")])]),t._v(" "),s("h2",{attrs:{id:"prettier"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prettier"}},[t._v("#")]),t._v(" prettier")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/prettier/prettier",target:"_blank",rel:"noopener noreferrer"}},[t._v("prettier"),s("OutboundLink")],1),t._v(" 是 facebook 开发的格式化代码工具，在前端有广泛的使用，同时它架构上采用插件机制，通过插件实现了几乎所有语言的格式化，是当下非常热门的代码格式化工具。")]),t._v(" "),s("p",[t._v("prettier 相比于 google-java-format 也有一个缺点，就是无法移除无效引用（unused import），不过该缺点还好，不算大问题")]),t._v(" "),s("p",[t._v("这里我们采用它的 java 实现 "),s("a",{attrs:{href:"https://github.com/jhipster/prettier-java",target:"_blank",rel:"noopener noreferrer"}},[t._v("prettier-java"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("首先在 pom 中引入 plugin 插件")]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("plugin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("com.hubspot.maven.plugins"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("prettier-maven-plugin"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("0.10"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("configuration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("prettierJavaVersion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("0.8.0"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("prettierJavaVersion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("configuration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("plugin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("然后在根目录对添加自定义规则文件 "),s("code",[t._v(".prettierrc.yml")])]),t._v(" "),s("div",{staticClass:"language-yml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# .prettierrc.yml")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("overrides")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("files")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"*.java"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("options")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("printWidth")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("120")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tabWidth")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("useTabs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("endOfLine")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"lf"')]),t._v("\n")])])]),s("p",[t._v("执行 "),s("code",[t._v("mvn prettier:write")]),t._v(" 即可格式化项目代码")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),s("p",[t._v("prettier-java 采用了 Google 的包排序机制，它和 idea 的排序机制冲突，所以要对 idea 的包排序进行配置，参见 "),s("a",{attrs:{href:"https://github.com/jhipster/prettier-java#organize-imports",target:"_blank",rel:"noopener noreferrer"}},[t._v("organize-imports"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"git-hook"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-hook"}},[t._v("#")]),t._v(" git hook")]),t._v(" "),s("p",[t._v("每次手动格式化是不现实的，我们期望每次提交代码时，无感的自动格式化代码。所以这里采用 git hook 的机制，git hook 默认位置为 "),s("code",[t._v(".git/hooks")]),t._v(" 下，该配置无法实现 git 同步，所以我们在项目根目录创建 hooks 文件夹，并添加 "),s("code",[t._v("pre-commit")]),t._v(" 文件如下(参考"),s("a",{attrs:{href:"https://prettier.io/docs/en/precommit.html#option-5-shell-script",target:"_blank",rel:"noopener noreferrer"}},[t._v("Shell script"),s("OutboundLink")],1),t._v(")：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token shebang important"}},[t._v("#!/bin/sh")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# git config core.hooksPath hooks")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'[git hook] executing maven spotless:write before commit'")]),t._v("\n\nmvn -f "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./pom.xml"')]),t._v(" com.hubspot.maven.plugins:prettier-maven-plugin:write\n\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("changed_java_files")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("diff")]),t._v(" --cached --name-only --diff-filter"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("ACMR "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('".*java$"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" -n "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$changed_java_files")]),t._v('"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$changed_java_files")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fi")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("RESULT")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$?")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exit")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$RESULT")]),t._v("\n")])])]),s("p",[t._v("该位置的 hook 文件并不能生效，需要手动执行 "),s("code",[t._v("git config core.hooksPath ./hooks")]),t._v(" 命令才能生效，这里采用一个 maven 插件帮我们自动执行")]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("plugin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org.codehaus.mojo"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("exec-maven-plugin"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("3.0.0"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("executions")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("execution")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("config git hooks"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("phase")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("initialize"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("phase")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("goals")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("goal")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("exec"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("goal")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("goals")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("configuration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("executable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("git"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("executable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("commandlineArgs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("config core.hooksPath hooks"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("commandlineArgs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("configuration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("execution")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("executions")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("plugin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("可以看到配置了 "),s("code",[t._v("<phase>initialize</phase>")]),t._v("，每次执行 maven compile 时，都会触发该命令，从而使 hook 生效（其实只要执行过一次就行）")])])}),[],!1,null,null,null);a.default=e.exports}}]);