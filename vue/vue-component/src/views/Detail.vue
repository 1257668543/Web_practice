<template>
  <div class="detail">
      <h1>Computed 计算属性</h1>

      <div class="price">
          {{totalPrice}}元
      </div>

      <div class="news">
          <ul>
              <li v-for="(item, index) in reverseNews" :key="index">
                  {{item.title}} -- {{item.date}}
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            price: 100,
            num: 4,
            news: [
                {title: 'TikTok首席执行官Kevin Mayer发布内部信宣布辞任', date: '2020/08/24'},
                {title: '比心陪练APP被责令相关频道停更7天', date: '2020/08/25'},
                {title: '男子因微信号被封影响做生意 申诉无果从腾讯公司跳楼身亡', date: '2020/08/26'},
                {title: '袁隆平爷爷90岁生日前去理发', date: '2020/08/27'}
            ]
        }
    },
    computed: {
        totalPrice: function () {
            return this.price * this.num
        },
        reverseNews: function () {
            let news = this.news
            return news.reverse()
        }
    }
}
</script>

<style>

</style>