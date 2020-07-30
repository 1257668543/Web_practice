// pages/rank/rank.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    rankList:[
      {
        title: "Top250",
        url: "/v2/movie/top250",
        movies: []
      },
      {
        title: "Top250",
        url: "/v2/movie/top250",
        movies: []
      },
      {
        title: "Top250",
        url: "/v2/movie/top250",
        movies: []
      },
      {
        title: "Top250",
        url: "/v2/movie/top250",
        movies: []
      },
      {
        title: "Top250",
        url: "/v2/movie/top250",
        movies: []
      },
      {
        title: "Top250",
        url: "/v2/movie/top250",
        movies: []
      },
      {
        title: "Top250",
        url: "/v2/movie/top250",
        movies: []
      },
      {
        title: "Top250",
        url: "/v2/movie/top250",
        movies: []
      },
      {
        title: "Top250",
        url: "/v2/movie/top250",
        movies: []
      },
      {
        title: "Top250",
        url: "/v2/movie/top250",
        movies: []
      },
      {
        title: "Top250",
        url: "/v2/movie/top250",
        movies: []
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
        let rankList = this.data.rankList
        for (let i = 0; i < rankList.length; i++) {
          this.loadData(i, {apikey: '0df993c66c0c636e29ecbb5344252a4a'})        
        }
        console.log(this.data.rankList)
  },

  loadData(idx, params) {
    let obj = this.data.rankList[idx]
    let url = wx.db.url(obj.url) 
    wx.request({
        url: url,
        data: params,
        header: {'content-type': 'json'},
        success: (res) => {
            // console.log(res)
            let movies = res.data.subjects
            obj.movies = []
            for (let index = 0; index < movies.length; index++) {
                let element = movies[index]
                let movie = element.subject || element
                obj.movies.push(movie)
            }
            this.setData(this.data)
        }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})