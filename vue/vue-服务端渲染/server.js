const Vue = require('vue')
const express = require('express')
const server = express()
const Renderer = require('vue-server-renderer')
const fs = require('fs')
const renderer = Renderer.createRenderer({
  template: fs.readFileSync('./src/index.template.html', 'utf8')
})
// export default
server.use(express.static('dist'));  // 把dist 目录下面的东西 通过 路径名能够访问到他们
const createApp = require('./dist/server.bundle.js').default // es module => commonjs module
// createApp 指向 entry-server 抛出的函数，被web-pack打包成commonJS

// const App = require('App.vue')
server.get('*', (req, res) => {
  const app = createApp()
  let context = {}
  renderer.renderToString(app, context, (err, html) => {
    if(err) {
      console.log(err);
    }
    res.setHeader("Content-Type", "text/html;charset=utf-8")
    // 渲染出去的页面 只是 HTML
    // 如果要有事件 必须 addEventListener绑定，node端并没有这样的 api
    // 事件必须 由浏览器绑定
    res.send(html)
  })
})
server.listen(8080, () => {
  console.log('server is running 8080');
})