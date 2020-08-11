// 实现一个函数执行出来的结果都是累计的
var count = 0
function test () {
    count++
    console.log(count)
}
// test()
// test()
// test()
// test()

// 不依赖外部变量，实现如上效果
// 很难，函数里面没有一个始终固定不变的变量，每次重新执行函数都会初始化函数里面的的所有东西


function add() {
    var num = 0
    function a() {
        console.log(++num)
    }
    return a
}

var result = add()
result()
result()
result()
result = null // 主动销毁闭包在内存中保存的add的AO