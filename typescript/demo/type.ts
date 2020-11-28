// Boolean 类型
let isDone: boolean = false

// isDone = 123

let count: number = 10

let nickname: string = 'wn'

// symbol
let people: symbol = Symbol('wn')

const sym = Symbol()
let obj = {
  [sym]: 'wn'
}
console.log(obj[sym]);

// array
// let list: number[] = [1, 2, 3]
let list: Array<number> = [1, 2, 3] // 泛型定义


// Enum
// 数字枚举 升序value 反向取值

enum Direction {
  EAST,
  SOUTH,
  WEST,
  NORTH
}
let dir: Direction = Direction.NORTH  // 3
console.log(dir);


// 字符串枚举
// enum Direction {
//   EAST = 'EAST',
//   SOUTH = 'SOUTH',
//   WEST = 'WEST',
//   NORTH = 'NORTH'
// }



// 异构枚举
enum Enum {
  A,
  B,
  C = 'c',
  D = 'd',
  E = 8,
  F
}


// any 任意类型
let notSure: any = 666
notSure = 'hello'

let test: number = notSure

// unKnown 与any不同，不能赋值给自身与any外的其他类型
let value: unknown;
value = true
value = 123
value = 'hello'

let value1: unknown = value
let value2: any = value
// let value3: boolean = value
// let value4: string = value



// tuple类型 元组 限定
let tupleType: [string, boolean]
tupleType = ['yuanlong', false]


// void 类型 没有返回值1
function User():void {
  console.log('hello world');
}

// null undefined 是所有类型的子类型，可以赋值给任何类型的变量，注意：需要设置 "strictNullChecks": false
let u: undefined = undefined
let n: null = null

let num: number = u