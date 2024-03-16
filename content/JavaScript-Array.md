---
tag: "前端,数组,JavaScript"
title: "数组 - JavaScript"
createAt: 1710548042539
description: "对数组做个整理"
---

> 国际标准、跨越语言。一个规则，用于验证字符串

## 数组的本质

数组的本质是一个对象，有 length、可以通过属性(arr\[0])获取数据...

## length

数组 length 的属性，是数组的长度，会自动变化，值为最大下标 + 1

如果给 length 赋值，会导致数组可能被截断

```js
const arr = [1, 2, 3, 4, 5];
arr.length = 2;
console.log(arr); // [1,2];
```

下标是自动变化的，如果手动指定下标：

```js
const arr = [1, 2, 3, 4];
arr[50] = 123;
console.log(arr.length); // 51
```

为什么会是 51？因为下标的最大值是 50，length 计算方法为最大下标 50 + 1

## 下标

通常情况下，下标是连续的，不连续的数组 -> 稀松数组

## 数组常见操作

### 添加

```js
arr[arr.length]; // 末尾添加
arr.push(); // 末尾添加
arr.unshift(); // 起始位置添加
arr.splice(下标, 0, 添加的数据); // 从指定下标开始，删除0个，然后在该位置插入添加的数据，会对原数组进行修改，不会返回新数组
```

<br />

### 删除

```js
delete arr[下标]; // 这种做法不会导致数组其他属性发生变化，因此这做法会导致稀松数组  [1, 空白, 2, 3, 4]
arr.pop(); // 删除最后一项，并且返回该项数据
arr.shift(); // 删除数组第一项，并且返回该项数据
arr.splice(下标，2) // 从下标开始，删除2项数据，并且返回该项数据
```

<br />

### 其他操作

```js
arr.slice(起始位置下标，结束位置下标) // 不会改变原数组，返回新数组，不取结束下标。如果不写结束下标的，则直接取到末尾

// 清空数组
arr.length = 0;
arr.slice(0, 数组.length);

// 查找数组中某一项
arr.indexOf(); // 返回对应index，没找到则-1

// 查找数组中最后一项
arr.lastIndexOf();
```

## in 关键字

```js
const arr = [1, 2, 3, 4];
"1" in arr;
```

## for in

```js
const arr = [1, 2, 3, 4];
for (const index of arr) {
    console.log(index, arr[index]);
}
```

## fill

```js
arr.fill(数据) // 将所有数据填充为指定数据
arr.fill(数据，开始下标) // 将数组从下标开始，到数组末尾，填充为指定数据
arr.fill(数据，开始下标，结束下标) // 将数组从下标开始，到指定结束下标，填充为指定数据
```

## join

```js
arr.join(","); // 对数据进行拼接，返回一个字符串
```

## concat

```js
arr.concat(arr2); // 返回新数组，不会改变原数组
```

**note\***

对象可以通过数字形式的字符串获取到 value，例如 obj\[\'0'\]\.age，而数组获取方法是 arr\[0]，看似是数字，实际也是数字形式的字符串，数字会被自动转换为字符串。因为不是合法的标识符，所以不能以 arr.0 的形式访问。
