// components/collegeItem/collegeItem.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    name:String
  },

  data: {
    list: ['a', 'b', 'c'],
    result: ['a', 'b']
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
