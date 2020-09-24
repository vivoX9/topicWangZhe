//app.js
// 本项目icon颜色统一为#8a8a8a
import {
  getStorageSync
} from "./utils/util"
import {
  CACHE_KEY
} from "./lib/config"
App({
  onLaunch: function () {
    // let userInfo = getStorageSync(CACHE_KEY.userInfo) ? JSON.parse(getStorageSync(CACHE_KEY.userInfo)) : ""
    // if (userInfo) {
    //   // 已登陆
    // } else {
    //   // 未登录
    // }
  },
  globalData: {
    userInfo: null
  }
})