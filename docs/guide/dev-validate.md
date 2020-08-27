# 代码漏洞校验

项目目前使用 [classgraph](https://github.com/classgraph/classgraph) ，在 dev 环境下对当前项目的类进行扫描，从而检测出常见的 bug，并将校验结果打印在控制台。目前实现了以下常见 bug 的校验（代码位于 `com.htnova.common.dev` 目录下）：

1. Dto 中定义的 Long 类型字段需要加上 `@JsonSerialize(using = ToStringSerializer.class)` 注解，防止前端数字类型精度丢失问题
2. 项目中推荐使用 LocalDateTime，检测到 Date 类型的字段则进行提醒
3. 校验数据库表和实体的数量是否匹配，以及每张表和实体的字段名称是否匹配
4. 发生继承的 java bean，是否使用了 `@SuperBuilder` lombok 注解
5. mybatis 的 xml 非 String 类型的字段，是否与空字符串进行了比较，例如：`<if test="deptDto.createTime != null and deptDto.createTime != ''">`
6. mybatis 的 xml 是否使用 `${param}` ，可能引起 sql 注入问题

:::tip 提示
校验的类使用了懒加载的机制，非 dev 环境下不会注入到 spring 容器中
:::