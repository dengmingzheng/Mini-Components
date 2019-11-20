// components/stars/stars.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    //评分
    "rate": {
      "type": "Number",
      "value": 0
    },
    //字体大小
    "fontSize": {
      "type": "Number",
      "value": 20
    },
    //字体颜色
    "fontColor": {
      "type": "String",
      "value": "#ccc"
    },
    //星星大小
    "starSize": {
      "type": "Number",
      "value": 20
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

  },

  lifetimes: {
    attached: function() {
      var that = this;
      //获取评分
      var rate = that.properties.rate;
      //取整数
      var intRate = parseInt(rate);
      //高亮
      var light = parseInt(intRate / 2);
      //半亮
      var half = intRate % 2;
      //灰色
      var gray = 5 - light - half;

      var lights = [];
      var halfs = [];
      var graies = [];

      if (light > 0) {
        for (var index = 1; index <= light; index++) {
          lights.push(index);
        }
      }

      if (half > 0) {
        for (var index = 1; index <= half; index++) {
          halfs.push(index);
        }
      }

      if (gray > 0) {
        for (var index = 1; index <= gray; index++) {
          graies.push(index);
        }
      }

      var rate = rate && rate > 0 ? parseFloat(rate).toFixed(1) : '未评分';

      that.setData({
        "lights": lights,
        "halfs": halfs,
        "graies": graies,
        "rate_text": rate
      });
    }
  }
})