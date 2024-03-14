# 防抖和节流

在一些情景下，例如窗口的 resize、ajax 的调用、鼠标、键盘、滚动事件等等，会频繁的触发函数调用。这会造成网页性能问题。例如在 google 输入框搜索，假设每按键一次，就调用 AJAX 一次，那么工作量是很恐怖的。一个好的解决办法是等用户输入结束了，再进行请求。防抖和节流就适合干这事，其核心是限制某一个方法的频繁触发。

## 函数防抖

防止函数在极短的时间内反复调用，造成资源浪费。原理为：

1. 调用函数后，等待一段时间在执行
2. 如果在等待时间内调用了该函数，重新计时

封装一个通用的防抖函数：

```js
// 接收两个参数：1.要将哪个函数变成防抖函数 2.要间隔的时间
// 该函数会返回一个新的函数

// fn：一定时间后会执行的函数
// wait：等待的时间，单位是毫秒
function debounce(fn, wait) {
    var timeId = null;
    return function (...args) {
        if (timeId) {
            clearTimeout(timeId);
        }
        timeId = setTimeout(function () {
            fn(...args);
        }, wait);
    };
}

const debounceHandle = debounce(function (e) {
    console.log(e.target.value);
}, 500);

element.onkeyup = function (e) {
    debounceHandle(e);
};
```

## 函数节流

目的也是为了防止一个函数极短时间内被频繁触发。和防抖的原理不同，节流的核心是让连续的函数执行，变为固定时间段的执行。
触发事件时，获取当前时间戳，然后减去之前的时间戳。如果大于设置的时间周期，那就执行函数，然后更新时间戳为当前的时间戳。如果小于，就不执行

封装一个通用的节流函数：

```js
function throttle(fn, wait) {
    var pre = 0;
    return function (...args) {
        var now = new Date();
        if (now - pre > wait) {
            fn(...args);
            pre = now;
        }
    };
}

const throttleHandle = throttle(function (e) {
    console.log(e.target.value);
}, 500);

element.onkeyup = function (e) {
    throttleHandle(e);
};
```
