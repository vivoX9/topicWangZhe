import { requestData } from '../utils/request.js'
import { API_KEY } from '../lib/config'
const request = new requestData()
const HOST = 'https://www.wzrylt.com/api'

// 上传图片
export const uploadImg = (params) => {
  return new Promise((resolve) => {
    request.get(API_KEY.uploadImg).then(({ data }) => {
      resolve(data)
    })
  })
}

// 获取文章列表（包含分页）
export const getArticleList = (params) => {
  return new Promise((resolve) => {
    request.get(API_KEY.getArticleList).then(({ data }) => {
      resolve(data)
    })
  })
}
