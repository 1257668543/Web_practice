Function.prototype.myapply = function (context) {
  if (typeof this !== 'function') {
    // 调用call的不是函数
    throw new TypeError('Bind must be called on a function')
  }
  context = context || window
  //  拿到参数
  const args = arguments[1]
  const fn = Symbol('fn')
  context[fn] = this

  const result = context[fn](...args)

  delete context[fn]
  return result
}

let obj = {
  name: '文磊'
}

const fn = function () {
  console.log(this.name, arguments);
}
fn.prototype.name = 'wl'

fn.myapply(obj, [1, 2, 3])