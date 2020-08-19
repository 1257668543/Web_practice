
// 修改
Person.prototype.lastName = 'Fu'
function Person(name) {
    this.name = name 
}
var person = new Person('jinlong')

// console.log(person.lastName)
// person.lastName = 'Yu'
// Person.prototype.lastName = 'Yu'
// console.log(person.lastName)

// 删除
// delete Person.lastName
// console.log(person.lastName)





function Bus() {

}
Car.prototype = {
    constructor: Bus
}
// Car.prototype.name = 'abc'
function Car() {

}
var car = new Car()
// console.log(car.constructor) // f Car() {}
// console.log(Car.prototype)
// constructor 为了让给Car()构造出的所有的对象都能找到它自己的构造器


console.log(car.constructor)