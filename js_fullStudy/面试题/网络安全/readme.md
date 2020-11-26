# css应对
  1. http -> https
  2. cookie -> httpOnly: true
  3. 转义：html 转义（过滤）：https://dev.w3.org/html5/html-author/charref
           js 转义：\\x + unicode码点的16进制表现形式

# CSRF
## 登录
cookie 保存用户信息，后续一段都不用再登录了
api.juejin.cn

另外一个 黑客域名下面 请求 api.juejin.cn
1. xhr fetch 跨域不能伪造这个请求
2. GET: script img link POST: form 就能伪造出来了

api.juejin.cn/delete/01 验证用户身份（后端无法拿到 cookie）

cookie不能跨域：最新chrome提出的 sameSite 为 strict

1. sameSite 设为 strict、lax
2. 用户登录成功时候给他一个 token，之后前端每个请求都带上这个 token，黑客网站是拿不到 token，它的请求没 token 就拒绝它