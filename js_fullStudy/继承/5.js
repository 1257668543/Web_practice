function SuperType(name) {
  this.name = name
  this.colors = ['red', 'green', 'blue']
}
SuperType.prototype.sayName = function () {
  console.log(this.name);
}

function SubType(name, age) {
  SuperType.call(this, name) // 构造函数继承超类属性
  this.age = age
}

// SubType.prototype = new SuperType() 
SubType.prototype = Object.create(SuperType.prototype)

SubType.prototype.constructor = SubType
// 原型链继承超类原型

SubType.prototype.sayAge = function () { 
  console.log(this.age);
}

let instance1 = new SubType('wl', 18)
instance1.colors.push('pink')

console.log(instance1.colors);
instance1.sayAge()
instance1.sayName()