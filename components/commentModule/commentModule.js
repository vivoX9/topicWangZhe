// components/commentModule/commentModule.js
import {
  createMobx,
  isLogin,
  getStorageSync
} from '../../utils/util'
import {
  getArticleCommentData,
  likeComment
} from '../../api/index'
import {
  CACHE_KEY
} from '../../lib/config'
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    articleId: {
      type: Number,
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    commentLike: 'https://wzrylt.oss-cn-beijing.aliyuncs.com/miniWeb/like-active.png',
    commentUnlike: 'https://wzrylt.oss-cn-beijing.aliyuncs.com/miniWeb/like.png',
    pageParams: {
      limit: 10,
      offset: 0,
    },
    commentContent: '',
    showCommentBox: false,
    commentData: null,
  },
  created() {},
  /**
   * 组件的方法列表
   */
  observers: {
    articleId: function (newVal) {
      if (newVal !== 0) {
        this.ArticleComment({
          id: newVal,
          refresh: true
        })
      }
    },
  },
  methods: {
    // 失焦隐藏输入框
    cancelComment() {
      this.setData({
        commentContent: '',
        showCommentBox: false,
      })
    },

    // 实时改变评论内容
    getComment(e) {
      this.setData({
        commentContent: e.detail.value,
      })
    },

    // 发表评论
    comment() {
      this.setData({
        showCommentBox: true,
      })
    },

    // 获取评论内容
    ArticleComment({
      id,
      refresh = false
    }) {
      let userId = getStorageSync(CACHE_KEY.userid) ?
        getStorageSync(CACHE_KEY.userid) :
        ''
      if (userId !== '') {
        this.setData({
          ['pageParams.user_id']: userId,
        })
      }
      this.setData({
        ['pageParams.article_id']: id,
      })
      getArticleCommentData(this.data.pageParams).then((res) => {
        if (res.status === 200) {
          if (refresh) {
            this.setData({
              commentData: res.data,
            })
          } else {
            this.setData({
              commentData: this.data.commentData.list.push(res.data),
            })
          }
        }
      })
    },

    // 点赞评论
    like(e) {
      let params = {
        article_id: this.data.articleId,
        user_id: getStorageSync(CACHE_KEY.userid),
        comment_id: e.currentTarget.dataset.item.id,
      }
      wx.showLoading({
        title: '加载中...',
      })
      likeComment(params).then((res) => {
        wx.hideLoading()
        this.ArticleComment({
          id: this.data.articleId,
          refresh: true
        })
        wx.showToast({
          title: res.data,
          duration: 1000,
        })
      })
    },
  },
})