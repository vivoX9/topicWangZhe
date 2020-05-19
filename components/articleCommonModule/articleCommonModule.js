<<<<<<< HEAD
import {
  createMobx,
  destyoyMobx
} from "../../utils/util"
=======
// components/articleCommonModule/articleCommonModule.js
>>>>>>> 49c729e0e666f004629e5b912967b1849e587443
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    articleListData: {
      type: Array
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
<<<<<<< HEAD
    showAllContent: false,
    hasLike: true
=======
    showAllContent:false
>>>>>>> 49c729e0e666f004629e5b912967b1849e587443
  },

  /**
   * 组件的方法列表
   */
  methods: {
<<<<<<< HEAD
    // 分享
    share() {

    },
    // 跳转详情页
    toDetail(e) {
      this.updateCurrentArticle(e.currentTarget.dataset.item).then(() => {
        wx.navigateTo({
          url: '/index/articleDetail'
        })
      })

    },
    // 点赞
    like(e) {
      let item = e.currentTarget.dataset.item
      this.updateLike(item)
    },
    // 显示全部内容
    showAllContent() {
      this.setData({
        showAllContent: !this.data.showAllContent
      })
    },
  },
  created() {
    //初始化文章数据
    createMobx(this, ['articleListData'], ['initArticle', 'updateLike', 'updateCurrentArticle'])
    this.initArticle()
  },
  // 在组件实例进入页面节点树时执行
  ready: function () {

  },
  detached() {
    destyoyMobx(this)
  }
=======
    // 显示全部内容
    showAllContent(){
      this.setData({
        showAllContent:!this.data.showAllContent
      })
    },
  },
  // 在组件实例进入页面节点树时执行
  ready: function () {
    this.data.articleListData.forEach(element => {
      element.handle_content = element.content.length >= 50 ? element.content.slice(0, 60) + "..." : element.content
      element.showAll=element.content.length >= 50?true:false
    });
    this.setData({
      articleListData: this.data.articleListData
    })
  },
>>>>>>> 49c729e0e666f004629e5b912967b1849e587443
})