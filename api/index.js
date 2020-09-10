import { requestData } from '../utils/request.js'
import { API_KEY } from '../lib/config'
const request = new requestData()

// 上传图片
export const uploadImg = (params) => {
  return new Promise((resolve) => {
    request.get(API_KEY.uploadImg, params).then(({ data }) => {
      resolve(data)
    })
  })
}

// 获取文章列表（包含分页）
export const getArticleList = (params) => {
  return new Promise((resolve) => {
    request.get(API_KEY.getArticleList, params).then(({ data }) => {
      resolve(data)
    })
  })
}

// 发布文章
export const publsihArticle = (params) => {
  return new Promise((resolve) => {
    request.post(API_KEY.publsihArticle, params).then((data) => {
      resolve(data)
    })
  })
}
