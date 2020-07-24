// let a = 1
// let b = 2
// let c = 3

// --------------------------------------------数组的解构

// let [a,b,c] = [1,2,3]
// console.log(a) // output: 1

// let [foo,[bar],baz]=[1,[2],3]

// let [, , third] = ['a','b','c']

// let[x,y] = [1,2,3]
// console.log(x,y) // output: 1 2

// let[head, ...tail] = [1,2,3,4] // 解构, ...tail占据剩余的所有数组元素并成为新数组
// console.log(tail) // output: [2,3,4]

// let[a,b, ...c] = ['hello']
// console.log(a,b,c) // output: hello undefined []


// let[foo,bar]=[1]
// console.log(bar) // output: undefined

// let [foo] = 1 //false NaN undefined null {}
// let [foo] = {}
// console.log(foo)


// let [foo = true] = []

// let [x, y = 'aaa'] = ['a', undefined] // undefined 解构出来 默认 赋值是不成功的
// console.log(x,y) // output: a aaa

// let [x, y = 'aaa'] = ['a', null] // null 解构出来赋值是成功的
// console.log(x,y) // output: a null

// let [x = 1, y = x] = [2] // 此例说明解构赋值是按照数组顺序执行的
// console.log(x,y) // output：2 2

// --------------------------------------------对象的解构

// let {foo, bar} = {foo: 'aaa', bar: 'bbb'} // 对象的赋值应该对应为键值对

// let obj = {
//     name : '元隆',
//     age : 18
// }
// let{name,age} = obj

// let{foo: baz} = { foo: 'aaa', bar: 'bbb' }
// // foo 是匹配模式， baz才是变量
// console.log(baz) // output: aaa

// let obj = {
//     name: '子晨',
//     desc: {
//         alone: false,
//         age: 20,
//         sanwei: [50,100,120]
//     }
// }

// let{name, desc:{alone,age},desc:{sanwei:[x,y,z]}} = obj
// console.log("NAME: "+name,"ALONE: "+alone,"AGE: "+age,"SANWEI: ",x,y,z)

// let { x = 3 } = { x: null }
// console.log(x)

// // 注意！
// let x
// ({x} = { x:1 })
// console.log(x)
// // 已经声明好的变量再解构赋值需要用（）括住解构赋值表达式


// --------------------------------------------字符串的解构

// let [a, b, c, d, e] = 'hello'
// console.log(a,b,c,d,e)
// let {length: len} = 'hello'
// console.log(len)

// --------------------------------------------数值和布尔值的解构赋值

// let{toString: s} = 123
// console.log(s === Number.prototype.toString)
// let{toString: s} = true
// console.log(s === Boolean.prototype.toString)

