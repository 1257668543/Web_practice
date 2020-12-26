## 使用到的技术栈，框架，插件
 1. 前端: vue全家桶 antd,vantUI --框架, vue-concise-slider --轮播图组件, less --预编译, vue-lazyload --图片懒加载，vue自定义指令 --监听自定义事件，
 2. 后端：Koa2，koa-router --后端路由（接口），koa-bodyparser --报文主体序列化，koa2-cors --跨域解决，mongoose + mongoDB --数据库，uuid
 
 遇到的难点：今天写后端获取所有用户收藏商品信息的时候遇到了一个多层异步问题，完成这个功能需要先从用户信息表中获取到所有用户收藏商品id组成的数组，然后需要遍历这个数组，用每一项再去商品表中查找，因为每一次遍历的都是异步操作，尝试了很多方法都没解决，最后想到建立一个Promise数组，在遍历商品id数组时将每一项封装成一个promise，而每个promise中的回调又使用为async await保证查找的异步，查找到结果后异步resolve，最后使用Promise.all Api，在.then中返回这个商品详细信息数组 
