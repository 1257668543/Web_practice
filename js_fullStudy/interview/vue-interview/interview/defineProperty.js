var data = {
  name: 'wn',
  age: 18,
  like: {
    one: 'reading',
    two: 'running'
  }
}
observer(data)
let name = data.name  // get value
data.name = 'wl'  // set value
data.age = 19
data.like.one = 'ESport'
console.log(name, data.name, data.age, data.like.one);

function observer(obj) {
  Object.keys(obj).forEach(key => {
    defineReactive(obj, key, obj[key])
  })
}

function defineReactive(obj, key, val) {
  if (typeof val === 'object' && val !== null) {
    observer(val)
  }
  Object.defineProperty(obj, key, {
    get: function () {
      return val
    },
    set: function(newVal) {
      val = newVal
    }
  })
}



