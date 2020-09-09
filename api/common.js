import {
  requestData
} from '../utils/request.js'
import {
  API_KEY
} from '../lib/config'
const request = new requestData()

// 支付
export const wxPay = (params) => {
  return new Promise((resolve) => {
    request.get(API_KEY.wxPay, params).then(({
      data
    }) => {
      resolve(data)
    })
  })
}
// 获取用户信息(openid)
export const getUserInfo = (params) => {
  return new Promise((resolve) => {
    request.post(API_KEY.login, params).then(({
      data
    }) => {
      resolve(data)
    })
  })
}