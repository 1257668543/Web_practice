# h5怎么防止手动缩放
  设置meta标签的content属性：<meta name="viewport" content="user-scalable=no"> user-scalable=no

# 怎么解决点击后300ms的延迟
  1. fast-click库
  2. chorme 最新解决方案 content设置：<meta name="viewport" content="width=device-width"> width=device-width

# 手写监听页面刷新（滑动到底部刷新）
  1. 判断底部容器的 getBoundingClientRect() 值是否小于 window.innerHeight
  2. let observer = new IntersectionObserver((entries) => {
        if (entries && entries[0].isIntersecting) {
          console.log('到底部了')
        }
     })  // 交叉观察者
     observer.observe(bottom) 
