// pages/train/train.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    imgUrls: [
      '/pages/images/haibao/1.jpg',
      '/pages/images/haibao/2.jpg',
      '/pages/images/haibao/3.jpg',
    ],
    currentTab: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  switchNav: function (e) {
    var id = e.currentTarget.id;
    this.setData({ currentTab: id });
  },
  formSubmit: function (e) {
    console.log(e);
    var trainNum = "z" + e.detail.value.trainNum;//始发站
    //var to = e.detail.value.to;//终点
    var date1 = e.detail.value.date1;//日期:月
    var date2 = e.detail.value.date2;
    var trainDate="2019-"+date1+"-"+date2;
    console.log(trainDate+"日期");
    console.log(e);
    //var week=e.detail.value.week;
    wx.navigateTo({
      url: '../airplaneList/airplaneList?trainNum=' + trainNum + "&trainDate" + trainDate })
  },
  clear_history: function () {

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