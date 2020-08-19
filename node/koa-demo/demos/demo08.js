const Koa = require('koa')
const app = new Koa()

const logger = (ctx, next) => {
    console.log(`${ctx.request.url}-${ctx.request.method}-${Date.now()}`)
    next()
}

const main = ctx => {
    ctx.response.body = 'Hello World'
    // ctx.response.body = `${ctx.request.url}-${ctx.request.method}-${Date.now()}`
}

app.use(logger)
app.use(main)
app.listen(3000, () => {
    console.log('项目启动ing')
})