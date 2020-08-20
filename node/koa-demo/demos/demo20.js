const Koa = require('koa')
const app = new Koa()
const koaBody = require('koa-body')

const main = ctx => {
    // const body = ctx.request.body
    // if(!body.name) {
    //     ctx.throw(400, '.request.name')
    // }
    // ctx.response.body = {
    //     name: body.name
    // }
    ctx.body = `Request Body: ${JSON.stringify(ctx.request.body)}`
}

app.use(koaBody())
app.use(main)
app.listen(3000)