import { createMobx, destroyMobx, getStorageSync } from '../../utils/util'
import { getArticleDetailData, likeArticle } from '../../api/index'
import { CACHE_KEY } from '../../lib/config'
Page({
  /**
   * 页面的初始数据
   */
  data: {
    loveSrc: 'https://wzrylt.oss-cn-beijing.aliyuncs.com/miniWeb/love.png',
    unloveSrc: 'https://wzrylt.oss-cn-beijing.aliyuncs.com/miniWeb/unlove.png',
    pageParams: {
      limit: 10,
      offset: 0,
    },
    articleDetailData: null,
    commentData: null,
  },

  // 点赞
  like(e) {
    let userId = getStorageSync(CACHE_KEY.userid)
      ? getStorageSync(CACHE_KEY.userid)
      : ''
    if (userId === '') {
      return
    }
    let item = e.currentTarget.dataset.item
    let params = {
      article_id: item.id,
      user_id: userId,
    }
    wx.showLoading({
      title: '加载中',
    })
    likeArticle(params).then((res) => {
      if (res.status == 200) {
        wx.hideLoading()
        wx.showToast({
          title: res.data,
          duration: 1000,
        })
        this.articleDetail(this.data.articleDetailData.id)
      }
    })
  },

  // 获取文章详情/评论
  articleDetail(id) {
    let userId = getStorageSync(CACHE_KEY.userid)
      ? getStorageSync(CACHE_KEY.userid)
      : ''
    let params = {
      article_id: id,
    }
    if (userId !== '') {
      params.user_id = userId
      this.setData({
        ['pageParams.user_id']: userId,
      })
    }
    this.setData({
      ['pageParams.article_id']: id,
    })
    // 获取详情
    getArticleDetailData(params).then((res) => {
      if (res.status === 200) {
        this.setData({
          articleDetailData: res.data,
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.articleDetail(options.article_id)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    destroyMobx(this)
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
})
