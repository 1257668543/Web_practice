let data = [
    {value: 'cxk的基尼泰妹，我听了10年！', time: 5, color: 'red', speed: 1, fontSize: 22},
    {value: '前面的兄dei牛逼啊，是我才疏学浅', time: 10, color: '#00a1f5', speed: 1, fontSize: 22},
    {value: '现在这里是lbw广场！', time: 6},
    {value: '得，得得得，得得得得得得得！', time: 15, color: '#f5f5f5', speed: 1, fontSize: 26},
    {value: '好，现在我们就要起飞', time: 5},
    {value: '哇，这个是大佬，我的天呐！', time: 20, color: 'green', speed: 4, fontSize: 20}
]
function a (opts) {
            // 设置默认参数，如果没传就给带上
            let defOpts = {
                color: '#e91e63',
                speed: 1.5,
                opacity: 0.5,
                fontSize: 20,
                data: []
            }
            // 合并对象，再挂载到this上
            Object.assign(this,defOpts, opts) // assign(a,b)方法参数对象存在相同key值时后面的b(value)覆盖前面的a(value)
            console.log(this)    
}

a({data})