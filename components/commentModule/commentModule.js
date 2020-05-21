// components/commentModule/commentModule.js
import {
  createMobx,
  destyoyMobx
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

  },
  created() {
    //初始化文章数据
    createMobx(this, ['articleListData','articleDataCurrent'], ['initArticle', 'updateLike', 'updateCurrentArticle'])
    this.initArticle()
    setTimeout(() => {
      console.log(this.data.articleDataCurrent)
    }, 3000);
  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})
