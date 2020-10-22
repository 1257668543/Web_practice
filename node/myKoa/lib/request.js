let url = require('url')
let request = {
  get url () {  // get 访问器修饰符 这样 ctx.request.url 就可以直接取值了，不用再调用
    return this.req.url
  },
  get path() {  // ctx.request.path
    return url.parse(this.req.url).pathname
  },
  get query() {
    return url.parse(this.req.url).query
  }
}

module.exports = request