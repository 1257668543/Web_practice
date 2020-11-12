let arr = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10]

// 拍平 去重


// function red(arr) {
//   let res = []
//   arr.reduce(function(pre, next) {
//     let cur;
//     if (Object.prototype.toString.call(pre) === "[object Array]") {
//       cur = red(pre)
//     } else {
//       cur = pre
//     }
//     res.concat(cur)
//   }, [])
//   return res
// }
// console.log(red(arr));


// 栈结构 + 解构 扁平化
function flat() {
  let stack = [...a], res = []    
  while (stack.length) {
      let item = stack.pop()
      if(Array.isArray(item)) {
          stack.push(...item)
      } else {
          res.unshift(item)
      }
  }
  return res
}


// 递归扁平化
function flat(arr) {
  let res = []
  function walk(myarr){
      for (let i = 0; i < myarr.length; i++) {
          if (Array.isArray(myarr[i])) {
              walk(myarr[i])
          } else {
              res.push(myarr[i])
          }
      }
  }
  walk(arr)
  return res
}
flat(arr)


// 数组reduce函数 + isArray判断 扁平化
function flatten(arr) {
  return arr.reduce(function(acc, val) {
    return acc.concat(Array.isArray(val) ? flatten(val) : val)
  }, [])
}

console.log(flatten(arr));
