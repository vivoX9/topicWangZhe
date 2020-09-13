// components/auth/auth.js
import {
  CACHE_KEY
} from '../../lib/config'
import {
  getUserInfo
} from '../../api/common'
import {
  setStorageSync,
} from '../../utils/util'
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    showAuth: {
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {},

  /**
   * 组件的方法列表
   */
  methods: {
    // 关闭弹窗
    closeAuth() {
      this.setData({
        showAuth: false
      })
      this.triggerEvent("cancelAuth")
    },
    // 获取用户信息
    getUserInfo(e) {
      this.setData({
        showAuth: false
      })
      wx.showLoading({
        title: '加载中...',
        mask: true,
      })
      let userInfo = e.detail.userInfo
      wx.login({
        success: (res) => {
          // 发送 res.code 到后台换取 openId, sessionKey, unionId
          let params = {
            code: res.code,
            nick_name: userInfo.nickName,
            avatar: userInfo.avatarUrl,
            sex: userInfo.gender,
            country: userInfo.country,
            province: userInfo.province,
            city: userInfo.city,
          }
          getUserInfo(params).then((res) => {
            setStorageSync(CACHE_KEY.userInfo, JSON.stringify(res))
            setStorageSync(CACHE_KEY.openid, res.open_id)
            setStorageSync(CACHE_KEY.userid, res.id)
            wx.hideLoading()
            this.triggerEvent("completeAuth")
          })
        },
      })
    },
  }
})