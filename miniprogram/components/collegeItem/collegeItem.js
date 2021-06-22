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
  },

  data: {
    list: ['a', 'b', 'c'],
    result: ['a', 'b'],
    tranLabels: []
  },
  lifetimes: {
    attached: function () {
      this.setData({
        tranLabels: this.properties.labels.split(";")
      });
    },
  },
  methods: {
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
