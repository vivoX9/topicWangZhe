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

// 点赞文章
export const likeArticle = (params) => {
  return new Promise((resolve) => {
    request.post(API_KEY.likeArticle, params).then((data) => {
      resolve(data)
    })
  })
}

// 获取文章详情
export const getArticleDetailData = (params) => {
  return new Promise((resolve) => {
    request.get(API_KEY.getArticleDetailData, params).then((data) => {
      resolve(data)
    })
  })
}

// 获取文章评论
export const getArticleCommentData = (params) => {
  return new Promise((resolve) => {
    request.get(API_KEY.getArticleCommentData, params).then((data) => {
      resolve(data)
    })
  })
}

// 点赞文章评论
export const likeComment = (params) => {
  return new Promise((resolve) => {
    request.post(API_KEY.likeComment, params).then((data) => {
      resolve(data)
    })
  })
}
