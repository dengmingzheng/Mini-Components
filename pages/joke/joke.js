// pages/joke/joke.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getJokeData(1);
  },

  
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    this.getJokeData(1);
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
      var page = this.data.page;

      this.getJokeData(page+1);
  },

  getJokeData: function(page){
    var that = this;
    var timestamp = null;

    if (page === 1){
      timestamp = parseInt((new Date()).getTime() / 1000);
    }else{
      timestamp = that.data.timestamp;
    }
   
    wx.request({
      url: 'http://v.juhe.cn/joke/content/list.php',
      data: {
        "sort": "desc",
        "page": page,
        "pagesize": 10,
        "time": timestamp,
        "key": "edeb4df6f8d49bc292dc2d6ceaba0f07"
      },
      success: function (res) {
        var jokes = res.data.result.data;

        if (!jokes){
          that.setData({
            hasmore:false
          });

          return;
        }
        var oldJokes = that.data.jokeData;
        var newJokes = [];

        if (!oldJokes || page === 1){
          newJokes = jokes;
        }else{
          newJokes = oldJokes.concat(jokes);
        }

        that.setData({
          "jokeData": newJokes,
          "timestamp": timestamp,
          "page": page
        });
      }
    })
  }

})