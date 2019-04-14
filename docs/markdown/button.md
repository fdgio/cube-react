## Button

按钮，提供了各种类型、样式、状态以及图标。

### 示例

- 按钮类型 


  默认类型为 `button`，还可设置为 `submit` 用于表单中

::: demo 按钮类型

```jsx
import { Button } from 'cube-react';

class Demo extends React.Component {
  render() {
    return <Button >Worked hard</Button>
  }
}
ReactDOM.render( <Demo/> , mountNode);  
```
:::
- 按钮状态

  默认正常，可设置激活、禁用状态
  <!-- ```jsx
  <Button active>Active Button</Button>
  <Button disabled>Disabled Button</Button>
  ``` -->
- 图标

  可设置 icon 的 class
  <!-- ```jsx
  <Button icon="cubeic-right">Button With Icon</Button>
  ``` -->

- 样子

  可以通过设置 `light`、`inline`、`outline`、`primary` 属性来改变按钮样子
  <!-- ```jsx
  <Button light>Light Button</Button>
  <Button inline>Inline Button</Button>
  <Button outline>Outline Button</Button>
  <Button primary>Primary Button</Button>
  ``` -->

### Props 配置

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| - | - | - | - | - |
| type | 按钮类型 | String | button/submit | button |
| active | 激活状态 | Boolean | true/false | false |
| disabled | 禁用状态 | Boolean | true/false | false |
| icon | 图表 Icon | String | icon 的 class 值 | - |
| light | 亮色 | Boolean | true/false | false |
| inline | 是否内联 | Boolean | true/false | false |
| outline | 外边框 | Boolean | true/false | false |
| primary | 主要的 | Boolean | true/false | false |

### 事件

| 事件名 | 说明 | 参数 |
| - | - | - |
| click | 点击按钮后触发此事件，如果禁用状态，则不触发 | e - 事件对象 |
