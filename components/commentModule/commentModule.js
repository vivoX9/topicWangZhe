// components/commentModule/commentModule.js
import {
  createMobx,
  getStorageSync,
  hasUserInfo
} from '../../utils/util'
import {
  getArticleCommentData,
  publishComment,
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
    showAuth: false
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
    // 点击蒙层关闭
    closeCoverBg() {
      this.setData({
        showCommentBox: false
      })
    },

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

    // 打开评论弹窗
    comment() {
      let userId = getStorageSync(CACHE_KEY.userid) ?
        getStorageSync(CACHE_KEY.userid) :
        ''
      if (userId === '') {
        this.setData({
          showAuth: true
        })
        return
      }
      this.setData({
        showCommentBox: true,
      })
    },

    // 发表评论
    sendComment() {
      if (hasUserInfo()) {
        publishComment({
          article_id: this.data.articleId,
          user_id: getStorageSync(CACHE_KEY.userid),
          content: this.data.commentContent
        }).then(res => {
          this.setData({
            showCommentBox: false
          })
          wx.showToast({
            title: '发表成功',
            icon: "success",
            duration: 1500
          })
          this.ArticleComment({
            id: this.data.articleId,
            refresh: true
          })
        })
      } else {
        this.setData({
          showAuth: true
        })
      }
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
      if (!hasUserInfo()) {
        this.setData({
          showAuth: true
        })
        return
      }
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