function test() {
    var arr = []
    for (var i = 0; i < 10; i++) {
        
        (function(j) {
            // 第一次循环 j = 0
            arr[j] = function() {
                console.log(j)
            }
        })(i)
        // (function(j) {
        //     // 第二次循环 j = 1
        //     arr[j] = function() {
        //         console.log(j)
        //     }
        // })(i)

    }
    return arr
}

var myArr = test()
// myArr[0]
// myArr[1]
// ...

for (var j = 0; j < 10; j++) {
    myArr[j]()
}