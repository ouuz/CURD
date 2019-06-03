### Problem

#### Line 34 && Line 61

```js
if (text != '')
```

1. 不要用 == 而是用 ===

2. `if (text !== '')` 等价 `if (text)`

3. `if (liNum.length == 0)` 等价 `if (!liNum.length)`

---

#### HTML

onclick=xxx => DOM.addEventListener

#### Line 55

命名统一一点啊，驼峰

---

### Optimization

以后还可以试试用 class 封装

甚至是 Modules 隔离出几个功能

总的来说，没什么大问题！

我觉得可以试一试使用 node 的一些东西了，比如 `eslint` 配置检查代码规范, 还有配置 `Babel` 这些东西（ES6）
