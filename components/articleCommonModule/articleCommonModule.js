import {
  createMobx,
  destroyMobx,
  dateFormat,
  getStorageSync,
  setStorageSync,
} from '../../utils/util'
import {
  likeArticle
} from '../../api/index'
import {
  CACHE_KEY
} from '../../lib/config'
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    articleListData: {
      type: Array,
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    showAllContent: false,
    hasLike: true,
    iconSrc: {
      like: 'https://wzrylt.oss-cn-beijing.aliyuncs.com/miniWeb/like.png',
      liked: 'https://wzrylt.oss-cn-beijing.aliyuncs.com/miniWeb/like-active.png',
      comment: 'https://wzrylt.oss-cn-beijing.aliyuncs.com/miniWeb/comment.png',
      share: 'https://wzrylt.oss-cn-beijing.aliyuncs.com/miniWeb/share.png',
    },
    userInfo: null,
    showAuth: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 分享
    share() {},

    // 跳转详情页
    toDetail(e) {
      let id = e.currentTarget.dataset.item.id
      wx.navigateTo({
        url: `/index/articleDetail/articleDetail?article_id=${id}`,
      })
    },

    // 点赞
    like(e) {
      let userId = getStorageSync(CACHE_KEY.userid) ?
        getStorageSync(CACHE_KEY.userid) :
        ''
      if (userId === '') {
        this.setData({
          showAuth: true
        })
        return
      }
      let item = e.currentTarget.dataset.item
      let params = {
        article_id: item.id,
        user_id: userId,
      }
      wx.showLoading({
        title: '加载中',
      })
      likeArticle(params).then((res) => {
        if (res.code == 200) {
          wx.hideLoading()
          wx.showToast({
            title: res.data,
            duration: 1000,
          })
          this.triggerEvent('getArticleList', 'all')
        }
      })
    },

    // 授权完成
    completeAuth() {
      this.triggerEvent("getArticleList", 'all')
    },

    // 显示全部内容
    showAllContent() {
      this.setData({
        showAllContent: !this.data.showAllContent,
      })
    },
  },
  created() {},
  // 在组件实例进入页面节点树时执行
  ready: function () {},
  detached() {
    destroyMobx(this)
  },
})