// components/collegeItem/collegeItem.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    name: String,
    city: String,
    url: String,
    imgUrl: String,
    leixing: String,
    score: Number,
    labels: String,
    hiddenAdd: Boolean,
  },

  data: {
    list: ['a', 'b', 'c'],
    result: ['a', 'b'],
    tranLabels: [],
    mySchools:[]
  },
  lifetimes: {
    attached: function () {
      this.setData({
        tranLabels: this.properties.labels.split(";")
      });
    },
  },
  methods: {
    addClick() {
      wx.cloud.callFunction({
        name: 'addSchool',
        data: {
          name: this.properties.name,
          city: this.properties.city,
          url: this.properties.url,
          imgUrl: this.properties.imgUrl,
          leixing: this.properties.leixing,
          score: this.properties.score,
          labels: this.properties.labels,
        }
      })
    },

    deleteClick() {
      wx.cloud.callFunction({
        name: 'deleteSchool',
        data: {
          theSchoolName:this.properties.name
        }
      })
      
      wx.redirectTo({
        url: '../profile/profile'
      })
    },

    onChange: function (event) {
      this.setData({
        result: event.detail
      });
    },

    toggle: function (event) {
      const { index } = event.currentTarget.dataset;
      const checkbox = this.selectComponent(`.checkboxes-${index}`);
      checkbox.toggle();
    },

    noop: function () { }
  }
})
