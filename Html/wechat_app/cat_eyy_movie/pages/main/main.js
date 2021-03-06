// pages/main/main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isleft: true,
    indicatorDots: true,
    autoPlay: true,
    interval: 3000,
    duration: 500,
    circular: true,
    imgUrls:[
      'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1720147146,576882765&fm=26&gp=0.jpg',
      'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=131896282,3533817204&fm=26&gp=0.jpg',
      'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3482517862,1430466652&fm=26&gp=0.jpg'
    ],
    movieList: [
      {
        isShow: 0,
        name: "第一次的离别",
        imgUrl: "https://p1.meituan.net/moviemachine/4ea68a0de8949d99fd7ff426b84d3c381761878.jpg@1l_1e_1c_128w_180h",
        actor: "艾萨·亚森,凯丽比努尔·热合米图力,艾力乃孜·热合米图力",
        time: "2020-07-20",
        wantSee: '9745'
      },
      {
        isShow: 1,
        name: "璀璨薪火3D",
        imgUrl: "https://p0.meituan.net/moviemachine/1b6ca45db703c6df1c1ad8412ad0639a633073.jpg@1l_1e_1c_128w_180h",
        actor: "",
        time: "2020-07-20",
        wantSee: '1248'
      },
      {
        isShow: 1,
        name: "呆瓜兄弟",
        imgUrl: "https://p0.meituan.net/movie/2936b71457957c7abac6cddaf88c46323153903.jpg@1l_1e_1c_128w_180h",
        actor: "",
        time: "2020-07-31",
        wantSee: '1102'
      }
    ]
  },

  tabChangeWaiting(){
    // console.log('点击了即将上映')
    // this.data.isLeft = false (无用)
    this.setData({
      isleft: false
    })
  }, // function tabChangeWaiting() {}
  tabChangeHot(){
    // console.log('点击了即将上映')
    // this.data.isLeft = false (无用)
    this.setData({
      isleft: true
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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