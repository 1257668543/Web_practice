// components/ratingStar/ratingStar.js
const STAR_ON = "/assets/imgs/rating_star_small_on.png"
const STAR_OFF = "/assets/imgs/rating_star_small_off.png"
const STAR_HALF = "/assets/imgs/rating_star_small_half.png"

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    score: {
      type: Number,
      observer: function(newVal, oldVal, path) {
        let stars = [STAR_OFF, STAR_OFF, STAR_OFF, STAR_OFF, STAR_OFF]
        if (newVal > 0) {
          newVal = newVal / 10
          let floor = Math.floor(newVal)
          if (floor != newVal) { // 说明有小数
            stars[floor] = STAR_HALF
          }
          for (let i = 0; i < floor; i++) {
            stars[i] = STAR_ON
          }
        }
        this.setData({
          stars: stars
        })
      }
    },
    iconSize: {
      type: String,
      value: '28rpx'
    }
  },


  /**
   * 组件的初始数据
   */
  data: {
    stars: [STAR_OFF,STAR_OFF,STAR_OFF,STAR_OFF,STAR_OFF]
    // entireStar: 0,
    // halfStar: 0,
    // restStar: 0
  },

  // lifetimes: {
  //   attached: function() {
  //     let score = this.data.score
  //     if (score < 0 || score > 5) {
  //       return(console.log("分数数据数值错误"))
  //     }
  //     let entireStar = Math.floor(score)
  //     let restNum = score - entireStar
  //     let halfStar = 0
  //     let restStar = 0
  //     if (0 < restNum && restNum <= 0.5) {
  //       halfStar++
  //       restStar = 4 - entireStar
  //     }
  //     else if (restNum > 0.5) {
  //       entireStar++
  //       restStar = 5 - entireStar
  //     }
  //     this.setData({
  //       entireStar,
  //       halfStar,
  //       restStar
  //     })
  //   }
  // },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
