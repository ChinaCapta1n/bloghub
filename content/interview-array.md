---
tag: "面试,数组"
title: "面试题 - 数组"
createAt: 1710548042539
description: "面试题集合"
draft: true
---

## 下面输出一样吗

```js
var arr = [1, 2, 3, 4];
arr[0] = 10;
arr["0"] = 5;
console.log(arr[0], arr["0"]);
```

解题：输出是一样的，只是两种获取访问数组数据的方式，甚至下标可以不是数字

```js
arr.abc = "a";
```

这么写也 abc 就会成为下标

## 创建一个长度为 100 的数组，给数组的每一项赋值为"abc"

```js
new Array(100).fill("abc");
```

## 输出

这道题考察的是数组的本质。数组本质是一个对象，对象是引用类型

```js
var arr1 = [1, 2, 3, 4]; // arr1存放的是地址
var arr2 = arr1; // arr2存放的是地址
arr2[0] = 5; // 因为arr1和arr2指向的是同一个引用地址，所以输出结果会是5
console.log(arr1, arr2);
```

## clone 数组

```js
const arr = [1, 2, 3];
const newArr = arr.slice();
```

## 对数组求和

```js
const arr = [1, 2, 3, 4, 5];

arr.reduce(
    a,
    (b) => {
        return a + b;
    },
    0
);
```
