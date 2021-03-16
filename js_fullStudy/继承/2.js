function Person() {}  // prototype  new Function()
var p1 = new Person()

// console.log(p1.constructor); // [Function: Person]
Person.prototype = {
  name: '小花',
  constructor: Person // 这样添加构造器属性的方式会让构造器的不可枚举性消失
}
Object.defineProperty(Person.prototype, constructor, {
  enumerable: false,
  value: Person
}) // 对自己添加的constructor属性进行数据劫持，让其可枚举性变为false
var p2 = new Person()
console.log(p2.constructor); // [Function: Person]
