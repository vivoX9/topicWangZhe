// pages/mine/mine.js
import {
  CACHE_KEY
} from "../../lib/config"
import {
  setStorageSync,
  getStorageSync
} from "../../utils/util"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isAuth: false,
    userInfo: ""
  },
  // 去往我的发帖
  toMyArticle(e) {
    wx.navigateTo({
      url: '/mine/myArticle/myArticle',
    })
  },
  // 点击授权
  getUserInfo(e) {
    this.setData({
      userInfo: e.detail.userInfo
    })
    let userInfo = e.detail.userInfo
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        wx.request({
          url: 'https://www.wzrylt.com/api/login',
          // url: 'http://172.17.8.162:5050/api/login',
          data: {
            nick_name: userInfo.nickName,
            avatar: userInfo.avatarUrl,
            sex: userInfo.gender,
            country: userInfo.country,
            city: userInfo.city,
            province: userInfo.province,
            code: res.code
          },
          method: "POST",
          header: {
            'content-type': 'application/json', // 默认值
            'token': getStorageSync(CACHE_KEY.userInfo) ? getStorageSync(CACHE_KEY.userInfo).token : ''
          },
          success(res1) {
            console.log(res1)
            if (res1.data.status === 200) {
              console.log(11)
              setStorageSync(CACHE_KEY.userInfo, res1.data.data)
            }
          }
        })
      }
    })
  },
  // 加载页面时，获取本地用户信息
  getLocalUserInfo() {
    let result = wx.getStorageSync(CACHE_KEY.userInfo)
    if (result) {
      this.setData({
        userInfo: result
      })
    }
  },

  // 获取个人信息
  toMyVisit() {
    console.log("去我的浏览")
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getLocalUserInfo()
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
  // onShareAppMessage: function () {

  // }
})