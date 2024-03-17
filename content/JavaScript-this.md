---
tag: "前端,JavaScript,this"
title: "this - JavaScript"
createAt: 1710651709551
description: "看了一堆资料，根据过往经验，做个整理"
---

> 最早接触 this 是在网上的一道面试题，后来查阅了一堆资料，也没搞清楚 this 的指向。目前的工作中其实会用到 this 的地方特别少，只有大概两年前维护过一个用 class 写的 react 项目见过。这次做个记录，方便以后理解。

翻阅过大量的资料后得出以下结论：

1. this 的指向一定指向一个 object
2. this 的指向跟被谁调用、在什么位置调用有关
3. 只有在 JavaScript 运行时才确定 this 的指向

举一个简单例子：

```js
function fn() {
    console.log(this);
}
```

执行上面函数，会打印 window。为什么是 window 呢？因为全局作用域里就存在一个 window，这个 this 指向的就是 window。在全局作用域里使用 function 关键字定义的函数，例如 fn，会被放到 window 对象里，此时在全局调用 fn，其调用完整写法是`window.fn()`，this 指向的自然是 window。

这时候有另外一个疑问：假设不用 function 关键字定义，用 var、let、const 定义的箭头函数会有不同吗？

```js
var fn1 = () => {
    console.log("var: ", this);
};

let fn2 = () => {
    console.log("let: ", this);
};

const fn3 = () => {
    console.log("const: ", this);
};
```

打印出来后会发现：

1. this 全部指向 window
2. 只有 var 定义的函数会被放到 window 对象里，let、const 不会

这时候可以得出一个结论：var 定义的变量会被放到 window 里。全局定义的函数，无论是用哪个关键字定义，如果是在<mark>全局被调用</mark>，那么 this 指向的就是 <mark>window 对象</mark>。

如果是在对象里调用呢？

```js
const obj = {
    fn() {
        console.log(this);
    },
};

obj.fn();
```

打印出来的是 obj 对象。也就是说，在一个对象里调用函数，那么 this 指向的就是主动调用的那个对象，这里就是 obj

假如是箭头函数呢？

```js
const obj = {
    fn: () => {
        console.log(this);
    },
};

obj.fn();
```

打印出 window。因为箭头函数里没有 this，这时候 obj 调用 fn，fn 会向上层寻找 this，obj 是一个对象，没有 this，所以会继续往上层寻找，然后到了全局作用域，找到了 window。

在看一个箭头函数例子：

```js
const obj = {
    fn: function () {
        return () => {
            console.log(this);
        };
    },
};

obj.fn()();
```

调用 obj.fn()，此时得到一个返回的箭头函数，在调用一次，此时调用的是箭头函数，箭头函数是在 function 关键字里定义的，所以在其作用域链里往上找，会在 fn 里找到 this，所以 this 指向的是 fn

这里做的只是简单的描述和猜测，关于 this 的指向和涉及到其他，例如 call、bind、apply。目前能力有限，先记录到这。
