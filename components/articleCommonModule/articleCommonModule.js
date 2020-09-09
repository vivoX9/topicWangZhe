import {
  createMobx,
  destroyMobx
} from "../../utils/util"
import {
  CACHE_KEY
} from "../../lib/config"
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
    showAllContent: false,
    hasLike: true,
    userInfo: null
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 分享
    share() {

    },
    // 跳转详情页
    toDetail(e) {
      this.updateCurrentArticle(e.currentTarget.dataset.item).then(() => {
        wx.navigateTo({
          url: '/index/articleDetail/articleDetail'
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
    // 获取用户信息
    getUserInfo(e) {
      let _this=this
      if (e.detail.errMsg === 'getUserInfo:ok') {
        wx.setStorage({
          data: e.detail.userInfo,
          key: CACHE_KEY.userInfo,
          success:(res)=>{
            _this.setData({
              userInfo: e.detail.userInfo
            })
          }
        })
      }
    },
    // 获取本地用户信息
    getLocalUserInfo() {
      let _this = this
      wx.getStorage({
        key: CACHE_KEY.userInfo,
        success(res) {
          _this.setData({
            userInfo: res.data
          })
        },
      })
    },
  },
  created() {
    //初始化文章数据
    // createMobx(this, ['articleListData'], ['initArticle', 'updateLike', 'updateCurrentArticle'])
    // this.initArticle()
    // 获取用户信息
    this.getLocalUserInfo()
  },
  // 在组件实例进入页面节点树时执行
  ready: function () {

  },
  detached() {
    destroyMobx(this)
  }
})