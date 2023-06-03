### 学习笔记

##### 什么是 Store

> Store 是一个保存状态和业务逻辑的实体，它并不与你的组件树绑定。换句话说，它承载着全局状态。它有点像一个永远存在的组件，每个组件都可以读取和写入它。它有三个概念，`state`, `getter`, `action`,我们可以假设这些概念相当于组件中的`data`, `computed` 和 `methods`.

##### 定义 Store

在深入研究核心概念之前，我们得知道 Store 是用`defineStore()`定义的，它的第一个参数要求是一个独一无二的名字：

```js
import { defineStore } from 'pinia';
```
