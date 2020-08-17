// js 是单线程的
function a() {
    console.log('wl')
}


function b() {
    setTimeout(() => {
        console.log('wn')
    },1000)
} // 异步

function c() {
    console.log('zh')
}

b()
a()
c()