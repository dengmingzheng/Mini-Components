// components/segment/segment.js
Component({

  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },

  /**
   * 组件的属性列表
   */
  properties: {
    items: {
      type: Array,
      value: []
    },
    defaultIndex: {
      type: String,
      value: "news"
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onItemEvent: function(event) {
      //获取点击切换的值
      var index = event.target.dataset.index;
      this.setData({
        currentIndex: index
      });

      var detail = {
        index: index
      };
      var options = {};

      this.triggerEvent("changeItem", detail, options);
    }
  },
  /**
   *组件生命周期 
   */
  lifetimes: {
    attached: function () {
      var that = this;
      
      this.setData({
        currentIndex: that.properties.defaultIndex
      })
    }
  },
})