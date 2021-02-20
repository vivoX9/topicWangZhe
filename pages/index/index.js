//获取应用实例
const app = getApp()

import {
  createMobx,
  destroyMobx,
  getStorageSync,
  apartTime,
} from '../../utils/util'
import {
  navibarList,
  bannerList
} from '../../mock/mock'
import {
  CACHE_KEY
} from '../../lib/config'
import {
  wxPay
} from '../../api/common'
import {
  getArticleList
} from '../../api/index'
Page({
  data: {
    indicatorDots: true, //显示面板指示点
    autoplay: true, //自动滑动
    interval: 5000, //自动切换时间间隔
    duration: 500, //动画持续时间
    circular: true, //是否衔接滑动
    showAuth: false,
    bannerList: [],
    navibarList: [],
    articileList: null,
    isBottom: false,
    articileListLength: 0,
    pageSize: {
      offset: 0,
      limit: 10,
    },
  },

  // 获取文章列表
  getArticleListData(refresh = true) {
    wx.showLoading({
      title: '加载中...',
    })
    let pageData = this.data.pageSize
    let userId = getStorageSync(CACHE_KEY.userid) ?
      getStorageSync(CACHE_KEY.userid) :
      ''
    if (userId !== '') {
      pageData.user_id = userId
    }
    if (refresh.detail === 'all') {
      pageData.limit = this.data.articileListLength
      pageData.offset = 0
    }
    getArticleList(pageData).then((res) => {
      let list = res
      let isBottom = false
      if (list.length > 0) {
        for (let i in list) {
          let time = new Date(list[i].create_time).getTime()
          list[i].create_time = apartTime(time)
          list[i].pic = list[i].pic ? list[i].pic.split(",") : []
        }
      }
      if (list.length % 10 !== 0) {
        isBottom = true
      }
      if (!refresh) {
        list = this.data.articileList.concat(list)
      }
      wx.hideLoading()
      this.setData({
        articileList: list,
        articileListLength: list.length,
        isBottom
      })
    })
  },

  // 上传图片
  uploadImg() {
    wx.navigateTo({
      url: '/index/upload/upload',
    })
  },

  // 支付
  pay() {
    let openid = getStorageSync(CACHE_KEY.userInfo).open_id
    wxPay({
      openid: openid
    }).then((res) => {
      console.log(res)
    })
    return
    wx.request({
      url: 'https://www.wzrylt.com/api/wx/prepary', //仅为示例，并非真实的接口地址
      data: {
        // "openid": getStorageSync(CACHE_KEY.userInfo).open_id
        openid: getStorageSync(CACHE_KEY.userInfo).open_id,
      },
      method: 'POST',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded',
        // 'token': getStorageSync(CACHE_KEY.userInfo) ? getStorageSync(CACHE_KEY.userInfo).token : ''
      },
      success(res) {
        res = res.data
        if (res.status === 200) {
          let id = res.data.prepay_id
          console.log(res.data)
          wx.requestPayment({
            timeStamp: res.data.timeStamp,
            nonceStr: res.data.nonceStr,
            package: res.data.package,
            signType: res.data.signType,
            paySign: res.data.paySign,
            success(res) {
              console.log(res)
            },
            fail(res) {
              console.log(res)
            },
          })
        }
      },
    })
  },

  // 切换tabbar
  changeTab(e) {
    console.log(e)
  },

  // 初始化数据
  initData() {
    this.setData({
      navibarList: navibarList,
      bannerList: bannerList,
    })
  },

  onLoad: function () {
    this.initData()
    // this.storeBindings = createMobx(this, ['numA'], ['updateLikeCount'])
  },

  onShow: function () {
    this.setData({
      pageSize: {
        offset: 0,
        limit: 10
      },
      isBottom: false,
      articileListLength: 0
    })
    this.getArticleListData()
  },

  onReachBottom: function () {
    if (!this.data.isBottom) {
      this.setData({
        ['pageSize.offset']: this.data.pageSize.offset + this.data.pageSize.limit,
      })
      this.getArticleListData(false)
    }
  },

  onUnload: function () {
    // destroyMobx(this)
  },
})