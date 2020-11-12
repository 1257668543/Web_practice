// setTimeout  Promise async/await 的区别
// 1. setTimeout隶属于宏任务队列，会等到执行栈清空后才执行
// 2. Promise会让回调函数去到微任务对鞋，等到宏任务里面的同步代码执行完再执行
// 3. Async表示函数可能有异步方法，await后面跟表达式，async执行时碰到await就会让它立即执行
// await后面的代码会去到微任务队列


async function test() {
  Promise.resolve(123).then((e) => await test3(e))
  await test2()
  console.log(234);
}

function test3(e) {
  Promise.resolve(e).then(console.log)
}

function test2() {
  console.log(555);
  setTimeout(() => {
    console.log(666);
  }, 2000)
}

test()