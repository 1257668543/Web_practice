// components/ratingStar/ratingStar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    score: {
      type: Number,
      value: 1
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    entireStar: 0,
    halfStar: 0,
    restStar: 0
  },

  lifetimes: {
    attached: function() {
      let score = this.data.score
      if (score < 0 || score > 5) {
        return(console.log("分数数据数值错误"))
      }
      let entireStar = Math.floor(score)
      let restNum = score - entireStar
      let halfStar = 0
      let restStar = 0
      if (0 < restNum && restNum <= 0.5) {
        halfStar++
        restStar = 4 - entireStar
      }
      else if (restNum > 0.5) {
        entireStar++
        restStar = 5 - entireStar
      }
      this.setData({
        entireStar,
        halfStar,
        restStar
      })
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
