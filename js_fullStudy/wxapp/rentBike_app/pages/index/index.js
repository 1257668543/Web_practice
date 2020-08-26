//index.js
//获取应用实例
const app = getApp()
const cars = []

Page(
  {
  data: {
    // isHidden: true,
    markers: [{
      iconPath: "/images/location.png",
      id: 0,
      latitude: 28.714250,
      longitude: 115.828342,
      width: 50,
      height: 50
    },
    {
      iconPath: "/images/bike.png",
      id: 1,
      latitude: 28.713250,
      longitude: 115.827342,
      width: 50,
      height: 50
    },
    {
      iconPath: "/images/bike.png",
      id: 2,
      latitude: 28.713250,
      longitude: 115.828342,
      width: 50,
      height: 50
    }],
    polyline: [{
      points: [{
        longitude: 115.832281,
        latitude: 28.711275
      }, {
        longitude: 115.838719,
        latitude: 28.716935
      }],
      color:"#FF0000DD",
      width: 2,
      dottedLine: true
    }],
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    setTimeout(()=>{
      this.setData({
        isHidden:false
      })
    })
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
