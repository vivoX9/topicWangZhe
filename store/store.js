import {
  observable,
  action
} from 'mobx-miniprogram'
import {
  articleList
} from "../mock/mock"
import articlePayList from "../utils/util"
export const store = observable({
  articleListData: [], //文章列表
  articleDataCurrent:{},//当前详情页文章
  // 初始化文章列表数据
  initArticle: action(function () {
    articleList.forEach(element => {
      element.handle_content = element.content.length >= 50 ? element.content.slice(0, 60) + "..." : element.content
      element.showAll = element.content.length >= 50 ? true : false
    });
    this.articleListData = articleList
  }),
  // 更新文章喜欢数据
  updateLike: action(function (e) {
    for(let i in articleList){
      if(articleList[i].id===e.id){
        if(e.has_like){
          e.like_count-=1
        }else{
          e.like_count+=1
        }
        e.has_like=!e.has_like
        articleList[i]=e
        this.updateCurrentArticle(e)
        break
      }
    }
    this.articleListData=articleList
  }),

  // 更新当前详情页文章
  updateCurrentArticle:action(function(res){
    return new Promise(resolve=>{
      this.articleDataCurrent=res
      resolve(res)
    })
  })
})