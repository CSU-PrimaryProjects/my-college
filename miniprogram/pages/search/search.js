// miniprogram/pages/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: '',
    active: 'home',
    schools: null,
    active: 'search',
  },
  onTabChange(event) {
    wx.redirectTo({
      url: `../${event.detail}/${event.detail}`
    })
  },
  onChange(e) {
    this.setData({
      value: e.detail,
    });
  },
  onSearch() {
    this.data.value.length > 0 && this.data.value !== '大学' && this.data.value !== '学院' ?
      this.onQuery(this.data.value) : '';
    console.log('搜索' + this.data.value);
  },
  onClick() {
    this.data.value.length > 0 && this.data.value !== '大学' && this.data.value !== '学院' ?
      this.onQuery(this.data.value) : '';
    console.log('搜索' + this.data.value);
  },
  onQuery: function (key) {
    const db = wx.cloud.database()
    // 查询当前用户所有的 counters
    db.collection('details').where(
      {
        'school.source.school': db.RegExp({
          regexp: '.*' + key + '.*',
          option: 'i'
        })
      }
    ).get({
      success: res => {
        this.setData({
          schools: res.data,
        });
        console.log('[数据库] [查询记录] 成功: ',res.data);
      },
      fail: err => {
        console.error('[数据库] [查询记录] 失败：', err)
      }
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