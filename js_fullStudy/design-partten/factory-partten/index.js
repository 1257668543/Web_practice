// const woniu = {
//   name: '蜗牛',
//   age: '28',
//   career: 'coder'
// }
// const mengge = {
//   name: '猛哥',
//   age: 17,
//   career: 'manager'
// }

function User (name, age, career, work) {
  this.name = name,
  this.age = age,
  this.career = carrer,
  this.work = work
}
// const user = new User(name, age, carrer)

// 变，不变
// function Coder(name, age) {
//   this.name = name,
//   this.age = age,
//   this.career = 'coder'
//   this.work = ['写代码', '写系统的', '改bug']
// }

// function ProductManager(name, age) {
//   this.name = name,
//   this.age = age,
//   this.career = 'ProductManager'
//   this.work = ['订会议室', '写ppt', '催更']
// }

function Factory(name, age, career) {
  let work;
  switch(career) {
    case 'coder':
      work = ['写代码', '写系统的', '改bug']
      break
    case 'ProductManager':
      work = ['订会议室', '写ppt', '催更']
      break;
    case 'boss':
      work = ['喝茶', '看报', '见客户']
      break;
    case 'xxx':
      // ...
  }
  return new User(name, age, career, work)
}