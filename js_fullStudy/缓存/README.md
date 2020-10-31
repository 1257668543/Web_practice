```js
ctx.set('expires', );
ctx.body = ''
```

1.0 expires: 2020-10-30 12:00:00
1.1 cache-control: max-age=24*2*60*60

200 ok


```js
ctx.set('etag', 根据文件内容生成唯一的字符串)
ctx.set('last-modified', 文件最后修改时间)
```
# 让缓存失效
xxx.js?v=1234
xxx[1234].js