// 5!
// 5 * 4 * 3 * 2 * 1

function mul(n) { // 阶乘
    // n 的阶乘
    // n! = n * (n-1)!

    // var num = 1
    // for (var i = 1; i <= n; i++) {
    //     num *= i
    // }
    // return num
    if (n === 0) { // 2. 找出口
        return 1
    }
    return n * mul(n-1) // 1. 找规律    
}
// console.log(mul(5))

// mul(5) ==> 5 * mul(4)
// mul(4) ==> 4 * mul(3)
// mul(3) ==> 3 * mul(2)
// mul(2) ==> 2 * mul(1)
// mul(1) ==> 1





// 斐波那契数列


function fb(n) {
if (n == 1 || n == 2) {
    return 1
}
return fb(n - 1) + fb(n - 2)
}
console.log(fb(10))
