import {
  createStoreBindings,
} from 'mobx-miniprogram-bindings'
import {
  store
} from '../store/store'
import {CACHE_KEY} from "../lib/config"
export const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

export const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

// 设置本地缓存，同步
export const setStorageSync = (key, data) => {
  wx.setStorageSync(key, data)
}

// 获取本地缓存，同步
export const getStorageSync=key=>{
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
export const isLogin=()=>{
  let data=""
  wx.getStorage({
    key: CACHE_KEY.userInfo,
    success (res) {
      data=res.data
    },
    fail:(res)=>{
      data=false
    }
  })
  return data
}

