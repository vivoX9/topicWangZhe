// index/upload/upload.js
import {
  uploadImg
} from "../../api/index"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    previewList: []
  },
  // 上传图片
  uploadImage() {
    wx.chooseImage({
      count: 9,
      success: (res) => {
        console.log(res)
        if (res.errMsg === "chooseImage:ok") {
          wx.uploadFile({
            filePath: res.tempFilePaths[0],
            name: "file",
            url: 'http://127.0.0.1:8080/api/upload/img',
            formData: {
              'image': 'test'
            },
            success: (res) => {
              let data = JSON.parse(res.data)
              wx.showToast({
                title: "上传成功"
              })
              let list = this.data.previewList
              list.push(data.data.src)
              this.setData({
                previewList: list
              })
            }
          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
  onShareAppMessage: function () {

  }
})