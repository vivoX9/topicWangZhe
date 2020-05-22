// components/commentModule/commentModule.js
import {
  createMobx,
  destroyMobx
} from "../../utils/util"
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    commentLike:"https://wzrylt.oss-cn-beijing.aliyuncs.com/miniWeb/like-active.png",
    commentUnlike:"https://wzrylt.oss-cn-beijing.aliyuncs.com/miniWeb/like.png"
  },
  created() {
    //初始化文章数据
    createMobx(this, ['articleListData','articleDataCurrent'], ['initArticle', 'updateLike', 'updateCurrentArticle','updateCommentLike'])
    this.initArticle()
    setTimeout(() => {
      console.log(this.data.articleDataCurrent)
    }, 3000);
  },
  /**
   * 组件的方法列表
   */
  methods: {
    // 点赞评论
    like(e){
      let item = e.currentTarget.dataset.item
      this.updateCommentLike(item).then(res=>{
        this.setData({
          articleDataCurrent:res
        })
      })
    }
  }
})
