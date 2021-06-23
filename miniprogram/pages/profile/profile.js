// miniprogram/pages/profile/profile.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    schools: [],
    active: 'profile',
  },

  onTabChange(event) {
    wx.redirectTo({
      url: `../${event.detail}/${event.detail}`
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.cloud.callFunction({
      name: 'getProfile',
    }).then((res) => {
      res.result.data[0] ? this.setData({
        schools: res.result.data[0].schools
      }) : {}
    })

    try {
      let localSchools = wx.getStorageSync('schools');
      if (!localSchools){
        const db = wx.cloud.database();
        db.collection('allDetails')
          .skip(0) //从第几个数据开始
          .limit(1)
          .get({
            success: res => {
              wx.setStorageSync('schools', res.data)
            },
          })

        console.log("缓存为空")
      }
    } catch (e) {
      console.log("error")
    }
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