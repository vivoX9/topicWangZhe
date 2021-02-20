import {
  createStoreBindings
} from 'mobx-miniprogram-bindings'
import {
  store
} from '../store/store'
import {
  CACHE_KEY
} from '../lib/config'
// 初始化时间
export const formatTime = (date) => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
  return (
    [year, month, day].map(formatNumber).join('/') +
    ' ' + [hour, minute, second].map(formatNumber).join(':')
  )
}

// 格式化后台传过来的数据库时间
export const dateFormat = (fmt, date) => {
  let ret = ''
  date = new Date(date)
  const opt = {
    'Y+': date.getFullYear().toString(), // 年
    'm+': (date.getMonth() + 1).toString(), // 月
    'd+': date.getDate().toString(), // 日
    'H+': date.getHours().toString(), // 时
    'M+': date.getMinutes().toString(), // 分
    'S+': date.getSeconds().toString(), // 秒
    // 有其他格式化字符需求可以继续添加，必须转化成字符串
  }
  for (let k in opt) {
    ret = new RegExp('(' + k + ')').exec(fmt)
    if (ret) {
      fmt = fmt.replace(
        ret[1],
        ret[1].length == 1 ? opt[k] : opt[k].padStart(ret[1].length, '0')
      )
    }
  }
  return fmt
}

// 数字补0
export const formatNumber = (n) => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

// 设置本地缓存，同步
export const setStorageSync = (key, data) => {
  wx.setStorageSync(key, data)
}

// 获取本地缓存，同步
export const getStorageSync = (key) => {
  return wx.getStorageSync(key)
}

// 封装mobx函数创建方法
export const createMobx = (_this, fields = [], actions = []) => {
  return createStoreBindings(_this, {
    store,
    fields: fields,
    actions: actions,
  })
}

// 封装mobx函数卸载方法
export const destroyMobx = (_this) => {
  _this.storeBindings.destroyStoreBindings()
}

// 封装立即更新mobx数据方法
export const updateMobxNow = (_this) => {
  _this.storeBindings.updateStoreBindings()
}

// 封装是否登陆检测
export const isLogin = () => {
  let userInfo = getStorageSync(CACHE_KEY.userInfo) ? getStorageSync(CACHE_KEY.userInfo) : ''
  let isLogin = userInfo === '' ? false : true
  return isLogin
}

// 处理某个特定时间戳距今天多少分钟/小时
export const apartTime = (dateTimeStamp) => {
  let minute = 1000 * 60
  let hour = minute * 60
  let day = hour * 24
  let month = day * 30
  let now = new Date().getTime()
  let diffValue = now - dateTimeStamp
  let result = ''
  let monthC = diffValue / month
  let weekC = diffValue / (7 * day)
  let dayC = diffValue / day
  let hourC = diffValue / hour
  let minC = diffValue / minute
  if (diffValue < 0) {
    return
  }
  if (monthC >= 1) {
    result = '' + parseInt(monthC) + '月前'
  } else if (weekC >= 1) {
    result = '' + parseInt(weekC) + '周前'
  } else if (dayC >= 1) {
    result = '' + parseInt(dayC) + '天前'
  } else if (hourC >= 1) {
    result = '' + parseInt(hourC) + '小时前'
  } else if (minC >= 1) {
    result = '' + parseInt(minC) + '分钟前'
  } else result = '刚刚'
  return result
}

// 判断是否有用户信息
export const hasUserInfo = () => {
  let userInfo = getStorageSync(CACHE_KEY.userInfo)
  userInfo = userInfo ? true : false
  return userInfo
}

// 查询token
export const queryToken = () => {
  let userInfo = getStorageSync(CACHE_KEY.userInfo)
  let token = userInfo ? JSON.parse(userInfo).token : ''
  return token
}

// 查询userId
export const queryUserId = () => {
  let userInfo = getStorageSync(CACHE_KEY.userInfo)
  let userId = userInfo ? JSON.parse(userInfo).id : ''
  return userId
}