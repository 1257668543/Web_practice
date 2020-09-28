# 前端路由

1. 如何改变url却不引起页面的刷新
2. 如何知道url变化了？

hash
通过 hashchange 事件监听 url 的变化
 - 通过浏览器前进后退来改变url
 - 通过a标签改变url
 - 通过window.location改变url
以上这几种情况改变url都会触发hashchange事件





history
提供了 pushState 和 replaceState 两个方法，这两个方法改变url的path部分，不会引发页面刷新

通过 popstate 事件监听 url 的变化

 - 通过浏览器前进后退来改变url
 - 通过pushState/replaceState或a标签改变url会触发popstate事件