// let obj = {
//     name: '民国',
//     age: 18,
//     sex: 'man'
// }
// console.log(obj.name)
// obj.height = '175cm'

// const m = new Map()
// console.log(m)   // Map{}
// m.set(obj, 'content')
// console.log(m)   // output: { { name: '民国', age: 18, sex: 'man' } : 'content' }

// console.log(m.get(obj)) // output: content

// console.log(m.has(obj)) // output：true
// m.delete(obj)
// console.log(m.has(obj))



// const map = new Map([   //  { 'name' => '翔翔', 'age' => '20' }
//     ['name','翔翔'],
//     ['age','20']
// ])
// console.log(map.size) // output: 2
// console.log(map.has('name')) // output: true
// console.log(map.get('name')) // output: 翔翔


// const items =[   
//     ['name','翔翔'],
//     ['age','20']
// ]
// const map = new Map()
// items.forEach(([key,value]) => { //此为利用items数组的forEach方法遍历数组，将数组解构为key和value赋值给map
//     map.set(key,value)
// })
// console.log(map) // output: Map {'name' => '翔翔', 'age' => '20'}

// const set = new Set([ // output: Set(2) { [ 'foo', 1 ], [ 'bar', 2 ] }
//     ['foo',1],
//     ['bar',2]
// ])
// const m1 = new Map(set) // 证明可以用Set对象给Map对象赋值
// console.log(m1) // output: Map { 'foo' => 1, 'bar' => 2 }

// Map对象对于不同数据类型值相同的key是否为同一个键的判断逻辑


// const map = new Map()
// const k1 = ['a']
// const k2 = ['a']
// map.set(k1,111).set(k2,222) // k1,k2值相同，在Map中也被认为是两个键
// console.log(map) // output: Map { [ 'a' ] => 111, [ 'a' ] => 222 }

// map.set(+0,123) // 0,-0 默认就是一个键
// map.set(-0,123)
// console.log(map) // output: Map { 0 => 123 }

// map.set(true,1)
// map.set(true,2)
// console.log(map) // Map(1) { true => 2 }


// map.set(undefined,3)
// map.set(null,4)
// console.log(map) // Map { undefined => 3, null => 4 }


// map.set(NaN,5) // 在Map中，NaN 默认就是一个键 
// map.set(NaN,6)
// map.clear()
// console.log(map) // output: Map { NaN => 6 }


const map = new Map([
    ['foo', 'no'],
    ['bar', 'yes']
])
// keys() 返回键名的遍历器
// values() 返回键值的遍历器
// entries() 返回成员的遍历器
for (let key of map.keys()) { 
    // console.log(key) //output: foo bar
}
for (let key of map.values()) {
    // console.log(key) //output: no yes
}
for (let key of map.entries()) {
    // console.log(key) //output: [ 'foo', 'no' ] [ 'bar', 'yes' ]
}
map.forEach((e) => {
    // console.log(e) //output: no yes
})


// 解构的展开语法 + 遍历器，分别获取数组形式的 key ，value ，map

let k = [...map.keys()]
console.log(k) //output: [ 'foo', 'bar' ]
let val = [...map.values()]
console.log(val) //output: [ 'no', 'yes' ]
let m2 = [...map]
console.log(m2) //output: [ [ 'foo', 'no' ], [ 'bar', 'yes' ] ]