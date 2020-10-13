// foreach map filter reduce
// map 的使用方法，能不能自己写 一个 map 呢？
Array.prototype.map = function (func) {
  //
  // 1. 遍历
  // 2. 每一项操作一下
  // 3. 返回新数组
  let newArr = []
  for (let index = 0; index < this.length; index++) {
    newArr.push(func(this[index]))
  }
  return newArr
}
let a = [1, 2, 3]
let b = a.map( x => x + 1 ) // [2, 3, 4]
console.log(b);

// function readFile(func) {
//   setTimeout(() => {
//     func('ok')
//   }, 3000)
// }
// readFile((c) => {
//   console.log(c); // 3s输出一个'ok'
// })

function f() {}
f('ok')

// CORS 设置 CORS 的头部字段
// cross origin resource share
// Access-control-allow-origin: baidu.com
// Access-control-allow-method: 
// Access-control-allow-headers: content-type
// Access-control-allow-cr

