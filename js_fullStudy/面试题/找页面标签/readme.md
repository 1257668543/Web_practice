1. 任意打开一个网页如新浪或者百度，写一段js代码找到网页中所有以h或者H开头的元素，并打印每种元素的个数，如网页中含有head, hr 和 h2 元素，那么打印出类似如下的结果：（备注：可以上网搜索api）
```js
{
  hr: 3,
  h2: 2,
  head: 1
}
```
遍历整颗DOM树
从 document.documentElement 遍历 它 子 children 它 孙 children ...
Node.tagName
node.children

2. 实现trans方法
trans('get-element-by-id'); // 'getElementById'
