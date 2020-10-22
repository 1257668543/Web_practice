const { deserialize } = require("v8")

let proto = {}

function defineGetter(prop, name) { // prop代表对象，name代表对象上的属性
  proto.__defineGetter__(name, function() { // 每个对象都有__defineGetter__方法
    return this[prop][name] // url === this.request.url
  })
}
function defineSetter(prop, name) {
  proto.__defineSetter__(name, function(val) { // 每个对象都有__defineSetter__方法
   this[prop][name] = val // 使用defineGetter('response', 'body') 代理后 body === response.body === val 修改 ctx.body === 修改 ctx.response.body 
  })
}

defineGetter('request', 'url')
defineGetter('request', 'path')
defineGetter('response', 'body')
defineSetter('response', 'body')

module.exports = proto