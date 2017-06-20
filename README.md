#  touchEventer

这是一个使用touchstar、touchmove、touchend、touchcancel事件封装的一个简单的用于移动端开发的触摸事件函数，包括向上滑动、向下滑动、向左滑动、向右滑动、长按和双击功能的方法。

# 使用方法

首先将 touchEventer.js文件引入到您的项目中，或者将touchEventer.js中的代码复制到您的js项目中。

touchEventer.min.js提供了以下方法，以下方法中接受两个参数，第一个为相应的DOM节点，第二个为回调函数，具体用法如下：

1. leftSwiper(ele, callBack) 	 向左滑动

````javascript
leftSwiper(document.body, function () {
   console.log("leftSwiper")
});
````

2. rightSwiper(ele, callBack)向右滑动

```javascript
leftSwiper(document.body, function () {
   console.log("rightSwiper")
});
```
3. longPress(ele, callBack)    长按屏幕方法

````javascript
longPress(document.body, function () {
   console.log("longpress")
})
````
4. dbClick(ele, callBack)     双击屏幕方法

```javascript
dbClick(document.body, function () {
    console.log("dbClick")
})
```

5.topSwiper(ele,callBack)   向上滑动事件。

````javascript
topSwiper(document.body, function () {
    console.log("topSwiper")
})
````

6.bottomSwiper(ele,callBack)	向下滑动事件

```javascript
bottomSwiper(document.body, function () {
    console.log("bottomSwiper")
})
```



。。。。。。。。。。。。。。。。。。。。。。

简单的封装，大家轻点
