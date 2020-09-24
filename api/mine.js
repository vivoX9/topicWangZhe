import {
  requestData
} from '../utils/request.js'
import {
  API_KEY
} from '../lib/config'
const request = new requestData()

// 获取浏览列表
export const visitList = (params) => {
  return new Promise((resolve) => {
    request.get(API_KEY.selfVisit, params).then(({
      data
    }) => {
      resolve(data)
    })
  })
}

// 获取我发布的列表
export const selfPublish = (params) => {
  return new Promise((resolve) => {
    request.get(API_KEY.selfPublish, params).then(({
      data
    }) => {
      resolve(data)
    })
  })
}