// const obj = {
//   a: 1,
//   b: 2,
//   c: 3
// }
// for (let i of obj) {
//   console.log(i)
// }


// const arr = ['a', 'b', 'c']
// for (let i of arr) {
//   console.log(i)
// }


// const arr = ['a', 'b']
// arr.name = 'wl'
// for (let i in arr) {
//   console.log(i) // 0 1 name
// }

// const obj = {
//   a: 1,
//   b: 2,
// }
// Object.prototype.c = 3
// for (let i in obj) {
//   console.log(i) // a b c
// }

// const arr = [1, 2]
// Array.prototype.c = 0
// for (let i in arr) {
//   console.log(i) // 0 1 c
// }


// Symbol.iterator 迭代器接口
// 数组
// Map
// Set
// String
// arguments 对象
// Nodelist对象 

// let str = 'abcde'
// for (let i of str) {
//   console.log(i);
// }


// 对象中的常规属性和排序属性
function Foo() {
  this[100] = 'test-100'
  this[1] = 'test-1'
  this['b'] = 'bar-B'
  this[50] = 'test-50'
  this[9] = 'test-9'
  this[8] = 'test-8'
  this[3] = 'test-3'
  this[5] = 'test-5'
}
let bar = new Foo()
for (let key in bar) {
  console.log(`index:${key} value:${bar[key]}`) 
  // index:1 value:test-1
  // index:3 value:test-3
  // index:5 value:test-5
  // index:8 value:test-8
  // index:9 value:test-9
  // index:50 value:test-50
  // index:100 value:test-100
  // index:b value:bar-B
}

// 对象中的数字属性会被优先遍历，且按照顺序遍历

// ECMAScript 规范中定义了————数字属性应该按照索引值的大小升序排列，字符串属性根据创建时的顺序升序排列