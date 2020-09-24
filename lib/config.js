export const CACHE_KEY = {
  userInfo: 'userInfo', //用户信息
  openid: 'openid', //openid
  userid: 'userid', //userid
}
const HEADER = '/api'
export const API_KEY = {
  login: HEADER + '/login', //登录
  wxPay: HEADER + '/wx/prepary', //微信支付
  uploadImg: HEADER + '/upload/img', //上传图片
  publsihArticle: HEADER + '/article/publish', //发布文章
  getArticleList: HEADER + '/article/list', //上传图片
  likeArticle: HEADER + '/article/like', //点赞文章
  getArticleDetailData: HEADER + '/article/detail', //获取文章详情
  getArticleCommentData: HEADER + '/comment/list', //获取文章评论
  likeComment: HEADER + '/comment/like', //点赞文章评论
  selfPublish: HEADER + "/article/list/self", //获取我发布的文章列表
  selfVisit: HEADER + "/article/visit/list", //获取我的浏览记录
  recordVisit: HEADER + "/article/record/visit", //记录文章浏览记录
}