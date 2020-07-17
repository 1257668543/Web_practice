# 获取对象的动结构
    var box = document.querySelector('.box')

# 定时效果的实现
    1.setTimeout(function(){
        console.log(666)
         },3000)
    setTimeout方法只能在经过所给出的时间后进行一次{}内操作

    2.timer=setInterval(function(){
            box.style.left = ++dis + 'px'
            if(dis >= 500) clearInterval(timer)
        },16)
    setInterval方法是每经过一段所给出的时间就进行一次{}内操作，if用来判断是否到达指定距离，到达后触发clearInterval（定时器名），清除定时器

    //以上两种计时器均存在巨大缺陷，即存在时间误差，进行{}内操作的时间要比设置的长一些，在视觉上来说让人觉得不流畅

    3.function animation(){
            requestAnimationFrame(function(){
                box2.style.left=++diss + 'px'
                if (diss < 500) animation()
            })
        }
    requestAnimationFrame方法与setTimeout方法运行逻辑类似，都是经过所给出的时间后进行一次{}内操作，因此需要加上if条件让函数递归，不同的是此方法时间设置为“真正的”16ms，在视觉效果上体验更佳
