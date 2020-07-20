// var name
// var obj = {}

// console.log(name)

// var name = "张三"
// // name = "张三"


// console.log(name)
// let name = "皮皮"

// for (let i = 0; i < 10; i++) {
//     //    console.log(i)
// }
// console.log(i)

// var a = []
// for (var i = 0; i < 10; i++) {
//     a[i] = function(){
//         console.log(i)
//     }
//     // a[i]()        
// }
// a[6]() 


// for(let i = 0;i < 3; i++){ // 父作用域
//     let i ='abc' // 子作用域
//     console.log(i)
// }


// 暂时性死区TDZ
// var tmp = 123;

// if(true){
//     // TDZ开始
//     tmp = 'abc'
//     let tmp  // TDZ结束
// }

var a = 'a'
var a = 'aa'
console.log(a)

let b = 'b'
let b = 'bb'
console.log(b)