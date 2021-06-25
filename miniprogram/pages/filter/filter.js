//index.js
Page({
  data: {
    provinces: [{ text: '山东省', value: 0 }, { text: '暂时只支持山东省', value: 1 }],
    // { text: '辽宁省', value: 2 }, { text: '吉林省', value: 3 }, { text: '黑龙江省', value: 4 }, { text: '江苏省', value: 5 }, { text: '浙江省', value: 6 }, { text: '安徽省', value: 7 }, { text: '福建省', value: 8 }, { text: '江西省', value: 9 }, { text: '河北省', value: 10 }, { text: '河南省', value: 11 }, { text: '湖北省', value: 12 }, { text: '湖南省', value: 13 }, { text: '广东省', value: 14 }, { text: '海南省', value: 15 }, { text: '四川省', value: 16 }, { text: '贵州省', value: 17 }, { text: '云南省', value: 18 }, { text: '陕西省', value: 19 }, { text: '甘肃省', value: 20 }, { text: '青海省', value: 21 }, { text: '台湾省', value: 22 }],
    value1: 0,
    start: 0,
    end: 750,
    active: 'filter',
    schools: [],
    pageNum: 0,
    localSchools: [],
    searching: false
  },

  onLoad() {
    let localSchools = wx.getStorageSync('schools');

    if (localSchools) {
      this.setData({
        schools: localSchools[0].schools.slice(this.data.pageNum, 15),
        localSchools: localSchools[0].schools
      })
    } else {
      console.log("缓存为空");
    }
  },

  onTabChange(event) {
    wx.redirectTo({
      url: `../${event.detail}/${event.detail}`
    })
  },

  onChangeStart(event) {
    this.setData({
      start: event.detail
    })
  },

  onChangeEnd(event) {
    this.setData({
      end: event.detail
    })
  },

  onReachBottom: function () {
    if (!this.data.searching) {
      console.log("触底触底");
      this.setData({
        pageNum: this.data.pageNum + 1
      });
      this.setData({
        schools: this.data.localSchools.slice(0, 12 * (this.data.pageNum + 1))
      });
    }
  },

  onEnter() {
    let querySchools = [];
    this.setData({
      searching: true
    })

    this.setData({
      schools: []
    })

    if (this.data.end - this.data.start > 0 && this.data.end - this.data.start < 100) {
      this.data.localSchools.map(item => {
        if (item.score > this.data.start && item.score < this.data.end) {
          querySchools.push(item);
          console.log(this.data.start)
        }
      })
    }else{
      wx.showModal({
        title: '提示',
        content: '分数差应在0~100内',
        success (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    }

    this.setData({
      schools: querySchools
    })

  }

})
