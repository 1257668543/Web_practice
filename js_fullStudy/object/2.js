// 构造函数
function Student(name, age, sex) {
    // var this = {
            // name:  '',
            // age: ''
    // } 隐式的加上
    this.name = name
    this.age = age
    this.sex = sex
    this.grade = 2017
    // return {aaa: 1} // 构造函数中只有显式的return 对象，会干扰原隐式的return值
    // return this
}

var student = new Student('jiahao', 22, 'boy')
console.log(student) // Student { name: 'jiahao', age: 22, sex: 'boy', grade: 2017 }



// function Person() {
//     var name = 'wl'
// }
// var person = new Person()
// console.log(person) // Person {}

// 手动实现一个类似构造函数的函数
function Person(name, age) {
    var that = {}
    that.name = name 
    that.age = age
    return that
}

// var person = Person('wl', 18)
// console.log(person) // { name: 'wl', age: 18 }