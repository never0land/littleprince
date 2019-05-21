// pages/trainList/trainList.js
var util = require('../../utils/util.js');
Page({
  /**
   * 页面的初始数据
   */
  data: {
    date: "",
    airplaneLists:[],
    winHeight: 600,
    currentTab: '1'
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
    var trainNum = e.trainNum;
    var trainDate = e.trainDate;
    console.log("trainNum=" + trainNum +  "----trainDate=" + trainDate);
    wx.setNavigationBarTitle({
      title: "车次："+trainNum+"概况" 
    });
    this.setData({ trainDate: trainDate });
 this.loadTrainsList(trainNum, trainNum);
  },
  date: function (trainDate) {

    for (var i = 0; i < trainDate.length; i++) {
      trainDate.slice(i);
    }
  },
  loadTrainsList: function (trainDate) {
    //var page = this;
    var key = util.formatTime(new Date());
    console.log(trainDate);
    // console.log(key);
    wx.request({
      url: 'http://route.showapi.com/909-2', //仅为示例，并非真实的接口地址
      data: {          //参数为json格式数据
        // img: '/public/img/1.png',
        showapi_sign: "5e2e8aaf845945e8bf8e439202a9958d",
        showapi_appid: "95070",
        //"to": to,
        "trainDate": "2019-05-29",
        "apiCode_pointCode": "909-2",
        "showapi_timestamp": "20190520100655",
        "trainNum": "Z53",
        "testParam": "test"
      },
      header: {
        //设置参数内容类型为json
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data)
        console.log("成功了")
        var airplaneLists = res.data.showapi_res_body.context;
        console.log(airplaneLists);
      console.log(airplaneLists.context+"答案");
        var size = airplaneLists.length;
        var winHeight = size * 100 + 30;
       // page.setData({ airplaneLists: airplaneLists});
       // page.setData({ winHeight: winHeight });
      }
    })
  },
  switchNav: function (e) {
    var id = e.currentTarget.id;
    console.log(id);
    this.setData({ currentTab: id });
  }
  ,
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