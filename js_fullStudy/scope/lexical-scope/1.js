var a = 10  // window.a = 10
function foo(a) {
    var b = a + 2

    function bar(c) {
        console.log(window.a, b, c)
    }
    
    bar(b * 3)
}
// bar(5)
// console.log(b)
foo(2)

// 全局作用域下面只有一个foo
// foo作用域下面只有 a，b，bar
// bar作用域下有 c