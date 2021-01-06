// index/upload/upload.js
import {
  uploadImg,
  publsihArticle,
  checkTextLegal,
  checkImageLegal
} from '../../api/index'
import {
  URL
} from "../../utils/request"
import {
  getStorageSync
} from '../../utils/util'
import {
  CACHE_KEY,
  API_KEY
} from '../../lib/config'
Page({
  /**
   * 页面的初始数据
   */
  data: {
    previewList: [],
    formData: {
      title: '',
      content: '',
      img: '',
      userId: '',
    },
    showAuth: false,
    showTitleError: false,
    showContentError: false,
    publishLock: true,
  },

  // 完成授权
  completeAuth(e) {
    this.setData({
      showAuth: false,
      ['formData.userId']: getStorageSync(CACHE_KEY.userid),
    })
  },

  // 删除图片
  deleteImg(e) {
    this.data.previewList.splice(e.currentTarget.dataset.index, 1)
    this.setData({
      previewList: this.data.previewList
    })
  },

  // 检查参数
  checkParams() {
    this.setData({
      ['formData.userId']: getStorageSync(CACHE_KEY.userid),
      ['formData.img']: this.data.previewList.join(','),
    })
    let formDataNow = this.data.formData
    if (formDataNow.title === '') {
      this.setData({
        showTitleError: true,
        showContentError: false,
      })
      return false
    } else if (formDataNow.content === '') {
      this.setData({
        showContentError: true,
        showTitleError: false,
      })
      return false
    } else {
      this.setData({
        showContentError: false,
        showTitleError: false,
      })
    }
    return true
  },

  // 保存
  publish() {
    if (!this.data.formData.userId) {
      this.setData({
        showAuth: true
      })
      return
    }
    let paramsRight = this.checkParams()
    if (paramsRight) {
      checkTextLegal({
        content: this.data.formData.title + this.data.formData.content
      }).then(({
        data
      }) => {
        if (data.EvilTokens.length < 1) {
          if (this.data.formData.img !== '') {
            checkImageLegal({
              url: this.data.formData.img
            }).then(({
              data
            }) => {
              if (data.Suggestion !== 'PASS') {
                wx.showToast({
                  title: '图片违规',
                  icon: "none"
                })
              } else {
                // 合法
                publsihArticle(this.data.formData).then((res) => {
                  wx.showLoading({
                    title: '加载中...',
                  })
                  if (res.status === 200) {
                    wx.hideLoading()
                    wx.showToast({
                      title: '发布成功',
                      duration: 2000,
                    })
                    setTimeout(() => {
                      wx.switchTab({
                        url: '/pages/index/index',
                      })
                    }, 2000)
                  }
                })
              }
            })
          } else {
            // 合法
            publsihArticle(this.data.formData).then((res) => {
              if (res.status === 200) {
                wx.hideLoading()
                wx.showToast({
                  title: '发布成功',
                  duration: 2000,
                })
                setTimeout(() => {
                  wx.switchTab({
                    url: '/pages/index/index',
                  })
                }, 2000)
              }
            })
          }

        } else {
          wx.hideLoading()
          wx.showToast({
            title: '内容违规',
            icon: "none"
          })
        }
      })
    }
  },

  // 上传图片
  uploadImage() {
    wx.chooseImage({
      count: 9,
      success: (res) => {
        if (res.errMsg === 'chooseImage:ok') {
          let uploadHtpUrl = URL + API_KEY.uploadImg
          wx.uploadFile({
            filePath: res.tempFilePaths[0],
            name: 'file',
            url: uploadHtpUrl,
            formData: {
              image: 'test',
            },
            success: (res) => {
              let data = JSON.parse(res.data)
              wx.showToast({
                title: '上传成功',
              })
              let list = this.data.previewList
              list.push(data.data.src)
              this.setData({
                previewList: list,
              })
            },
          })
        }
      },
    })
  },

  // 输入标题
  inputTitle(e) {
    this.setData({
      ['formData.title']: e.detail.value,
    })
  },

  // 输入文章内容
  inputContent(e) {
    this.setData({
      ['formData.content']: e.detail.value,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      ['formData.userId']: getStorageSync(CACHE_KEY.userid) || ''
    })
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
  onUnload: function () {},

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