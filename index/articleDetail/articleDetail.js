import { createMobx,destroyMobx } from "../../utils/util"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loveSrc:"https://wzrylt.oss-cn-beijing.aliyuncs.com/miniWeb/love.png",
    unloveSrc:"https://wzrylt.oss-cn-beijing.aliyuncs.com/miniWeb/%E5%96%9C%E6%AC%A2.png"
  },
  // 点赞
  like(){
    // 更新当前文章数据
    this.updateLike(this.data.articleDataCurrent).then(res=>{
      this.setData({
        articleDataCurrent:res
      })
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.storeBindings=createMobx(this,['articleListData','articleDataCurrent'],['updateLike','initArticle','updateCurrentArticle'])
    this.initArticle()
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
    destroyMobx(this)
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