import {
  createStoreBindings,
} from 'mobx-miniprogram-bindings'
import {
  store
} from '../store/store'
import {
  action
} from 'mobx-miniprogram'
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

// 封装mobx函数创建方法
export const createMobx = (_this, fields = [], actions = []) => {
  return createStoreBindings(_this, {
    store,
    fields: fields,
    actions: actions,
  })
}

// 封装mobx函数卸载方法
export const destyoyMobx = (_this) => {
  _this.storeBindings.destroyStoreBindings()
}

// 封装立即更新mobx数据方法
export const updateMobxNow = (_this) => {
  _this.storeBindings.updateStoreBindings()
}

// export default // 更新喜欢数据
// {
//   updateLike: action(
//     function () {
//       console.log(121)
//     }
//   )
// }