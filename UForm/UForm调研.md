# UForm调研

中后台的表单解决方案，覆盖了表单的各种布局，联动，校验场景

## 特点

1. 集成了 Fusion 组件体系与 Antd 组件, 也可以用扩展接入自己的组件
2. 基于标准 JSON Schema 协议，数据化构建表单
3. 基于 rxjs 对表单内部的副作用做统一管理, 复杂联动校验
4. 可视化构建表单
5. 支持各种表单布局方案
6. 分布式状态管理，表单性能更高

## 实现思路

1. 核心设计思路参考的 final-form
2. 用json-schema来描述表单的输入输出数据结构
3. 用x-*和effects方案来扩展属性
4. @uform/core层负责表单数据状态管理，校验管理，副作用逻辑管理
5. @uform/react层负责React中集成UForm, 包括接入各种React库
6. 组件库属于@uform/react的插件包, 有antd和fusion design
7. 使用 @uform/react 之后, react 层会将 jsx 转换为相对应的 json schema 给到 @uform/core 层。即在createForm方法中可以获取到schema。

## 和其他方案的Form对比

### AntD Form

  + Form.create(), getFieldDecorator包装传递props, 每个字段定义一个onChange, setFieldsValue处理字段间联动
  + 任何字段变动都会全量渲染
  + 重复FormItem, 大量的onChange Handler
  + 不支持动态渲染表单

### final-form

  + 每个字段自己管理状态, 自己渲染更新, 分布式状态管理, 表单的整体渲染次数降低
  + 抽离字段联动, 使用[`calculate`](https://github.com/final-form/final-form-calculate)
  + 联动不能统一编写，需要结合jsx层的field subscription做状态联动
  + 嵌套数据结构需要手动拼接字段路径
  + 组件内外通讯机制过于Hack
  + 组件外部不能精确控制表单内部的某个字段的状态更新
  + 不支持动态化表单渲染

### UForm

## 使用方式

1. 使用@uform组件库

  ```npm
  // antd
  npm install --save antd @uform/antd
  // fusion design
  npm install --save @alifd/next @uform/next
  ```

2. @uform/react

3. @uform/next

4. 扩展

  + `x-component` 来指定对应UI组件
  + `x-rules` 来描述校验规则
  + `x-props` 来传递属性
  + `x-index` 来控制字段顺序(因为是对象数据结构)

5. 样式覆盖
  基于styled-components, 生成了随机key, 需要hack的方式覆盖

## JSON Schema

  [官网 https://json-schema.org/](https://json-schema.org/)

1. 本身就是 JSON, 遵循 JSON 规范, 数据描述语言, 非通用逻辑描述语言

2. 例子

+ 格式

    ```json
    {
      "#schema": "$schema 关键字状态，表示这个模式与 v4 规范草案书写一致。",
      "title": "标题，用来描述结构",
      "description": "描述",
      "type": "类型",
      "properties": "属性",
      "required": "必须属性"
    }
    ```

+ 类型
  
  + object
  + array
  + string
  + number
  + boolean
  + enum
  + integer
  
+ $ref 引用其他schema

## API

### @uform/core

1. createForm 创建form, 管理数据状态和校验状态
    ```js
      const form = createForm({
        initialValues: {
          aa: 123,
          bb: 222
        },
        onSubmit: ({formState}) => {
          console.log(formState)
        },
        onFieldChange:({formState})=>{
          console.log(formState)
        }
      })

      form.registerField('aa', {
        onChange(fieldState) {
          console.log(fieldState)
        }
      })

      setTimeout(() => {
        form.setValue('aa', 456);
        setTimeout(() => {
          form.submit()
        }, 1000)
      }, 500)
    ```

2. setValidationLocale 设置正则校验

## RxJS

## 分布式状态管理

## 软件设计模式 VS DDD

### 软件设计模式

+ 瀑布式
+ 敏捷式

### DDD (领域驱动设计 Domain Driven Design)

## GUI (@uform/builder)
