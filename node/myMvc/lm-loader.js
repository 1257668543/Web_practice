const fs = require('fs')
const path = require('path')
const Router = require('koa-router')

// 读取目录和文件
function load(dir, cb) {
  // 获取绝对路径
  const url = path.resolve(__dirname, dir)
  // 读取目录
  const files = fs.readdirSync(url) // Array
  // 遍历
  files.forEach(filename => { // 'index.js'
    // 去掉扩展名
    filename = filename.replace('.js', '')
    const file = require(url + '/' + filename)
    cb(filename, file)
  })
}
// 加载路由
// app.get('/', ctx => {})
function initRouter(app) {
  const router = new Router()
  load('routes', (filename, routes) => {
    routes = typeof routes === 'function' ? routes(app) : routes
    const prefix = filename === 'index' ? '' : `/${filename}`
    Object.keys(routes).forEach((key => {
      const [method, path] = key.split(' ')
      console.log(`映射地址： ${method.toLocaleUpperCase()} ${prefix}${path}`);
      // 注册路由
      // app.get('./', ctx => {})
      // router[method](path ==='/' ? prefix : prefix + path, routes[key])
      router[method](path ==='/' ? prefix : prefix + path, async ctx => {
        app.ctx = ctx
        await routes[key](app)
      })
    }))
  })
  return router;
}
// 加载控制层
function initController(app) {
  const controllers = {}
  load('controller', (filename, controller) => {
    // controller.forEach((ctrl) => {
    //   controllers[filename]
    // })
    controllers[filename] = controller(app)
  })
  return controllers;
}
// 加载服务层
function initService() {
  const services = {}
  load('service', (filename, service) => {
    services[filename] = service
  })
  return services;
}

const Sequelize = require('sequelize')

function loadConfig(app) {
  load('config', (filename, conf) => {
    if (conf.db) {
      app.$db = new Sequelize(conf.db)
      // 加载模型
      app.$model = {}
      load('model', (filename, { schema, options }) => {
        app.$model[filename] = app.$db.define(filename, schema, options)
      })
      app.$db.sync()
    }
    if (conf.middleware) {
      conf.middleware.forEach(mid => {
        const midPath = path.resolve(__dirname, 'middleware', mid)
        app.$app.use(require(midPath))
      })
    }
  })
}

module.exports = { initRouter, initController, initService, loadConfig }



// load('routes', (filename) => {
//   console.log('routes:' + filename);
// })

// initRouter()