// components/articleCommonModule/articleCommonModule.js
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
    showAllContent:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
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
})