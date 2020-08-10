// function foo() {
//     console.log(this.a)
// }

// var obj = {
//     a: 2,
// }

// foo.apply(obj) // bind


// var a = {
//     user: 'wn',
//     fn: function(q, w) {
//         console.log(this.user)
//         console.log(q + w)
//     }
// }
// var b = a.fn
// b.call(a, 1, 2)


// var a = {
//     user: 'wn',
//     fn: function(q, w) {
//         console.log(this.user)
//         console.log(q + w)
//     }
// }
// var b = a.fn
// var arr = [100, 200]
// // b.apply(a, [10, 11])
// b.apply(null)



var a = {
    user: 'wn',
    fn: function(e, d, f) {
        console.log(this.user)
        console.log(e, d, f)
    }
}
var b = a.fn
// b.bind(a)()
var c = b.bind(a, 10, 20, 30) // 在bind()时传参比在调用返回的函数时传参优先级更高
c(1, 2, 3)