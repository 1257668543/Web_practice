const Koa = require('koa')

const { initRouter, initController, initService, loadConfig } = require('./lm-loader') // const router = require('koa-router')

class lm {
  constructor(conf) {
    this.$app = new Koa(conf)
    // 加载配置项（模型）
    loadConfig(this)
    this.$ctrl = initController(this)
    this.$router = initRouter(this)
    this.$app.use(this.$router.routes())
    this.$service = initService()
  }

  start(port) {
    this.$app.listen(port, () => {
      console.log('lm服务器启动成功 端口：' + port);
    })
  }
}

module.exports = lm