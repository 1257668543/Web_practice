// set类似于数组，但是不一样的地方是set这种数据结构内部的成员是唯一值

// const s = new Set() // 类数组 // output: set {}
// const arr = new Array()
// console.log(s)

// let arr = [2,3,4,1,3,2,5]
// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i])
// }

// for(let item of arr){
//     console.log(item)
//     item.name = 'xxx'
// }

// arr.forEach((x) => {
//     s.add(x)
// })
// // add方法只适用于set对象，push方法适用于数组
// console.log(s)


// const set = new Set(document.querySelectorAll('div'))
// console.log(set.size)


// 数组去重
// let arr = [2,3,4,1,3,2,5]
// console.log(arr.indexOf(4)) // output: 3     indexof方法用于返回数组中与所给参数所匹配的元素下标
// console.log([...new Set(arr)]) // output: [ 2, 3, 4, 1, 5 ]

// 字符串去重
// console.log([...new Set('abcdab')]) // output: ['a','b','c','d']    此为利用Set数据结构中元素唯一的特性，加之数组解构的展开语法得到去重后的数组

// 判断Set--数据元素的唯一性对其他不同数据类型的判断逻辑 


// const set = new Set()
// set.add(5)
// set.add('5')
// console.log(set) // output: { 5, '5'}

// let a = NaN
// let b = NaN
// set.add(a)
// set.add(b)  
// console.log(set) // output: NaN

// set.add({name:'woniu'})
// set.add({name:'woniu'})
// console.log(set) // output: Set { { name: 'woniu' }, { name: 'woniu' } }


// const set = new Set()
// set.add(1).add(2).add(3) // 链式添加
// set.delete(2) // 清除值为2的元素
// set.clear() // 清空Set对象
// console.log(set)


// Array.from(['a','b','c']).forEach(e => { // 有时forEach方法不能识别原本为数组的数据，这时用Array.from()可以将数据转换为绝对的数组类型
//     console.log(e) // output: a b c
// })


// const set = new Set([1,2,3,4]) // 这里就是上面所说情况的实际应用，set中储存的是一个数组，但set无法直接使用forEach属性，所以借助Array.from
// const array = Array.from(set)
// array.forEach(e => {
//     console.log(e) // output: 1 2 3 4
// })


// 数组去重
// function dedupe(array){ // 构造了一个去重方法供外部调用，传入一个数组，将其new为一个Set对象，再用Array.from转化为绝对数组类型返回
//     return Array.from(new Set(array))
// }
// console.log(dedupe([1,2,2,3,3])) // output: [ 1, 2, 3 ]


// Set遍历

let set = new Set()
set.add({name: 'wn'})
set.add({age: '18'})
set.add({sex: 'boy'})
// keys()是set结构中返回键名的遍历器
// for(let item of set.keys()){
//     console.log(item) // output: { name: 'wn' } { age: '18' } { sex: 'boy' }
// }

// values()是set结构中返回值的遍历器
// for (let item of set.values()) {
//     console.log(item) // output: { name: 'wn' } { age: '18' } { sex: 'boy' }
// }

// entries()是set结构中返回键值对的遍历器
for (let item of set.entries()) {
    console.log(item) // output: [ { name: 'wn' }, { name: 'wn' } ] [ { age: '18' }, { age: '18' } ] [ { sex: 'boy' }, { sex: 'boy' } ]
}