// Object.prototype.toString.call()  // instanceof  // Array.isArray()
// 之间的区别和优缺点


// 1. instanceof 只能判断对象类型（复杂数据类型），但是所有的对象类型 instance of Object 都是true
// 2. Object.prototype.toString.call() // [Object, type]
// 3. Array.isArray() 在检测Array实例时，比instanceof更优，因为Array.isArray()可以判断iframe标签数组


// [] instance of Object  // true

// [Object type]