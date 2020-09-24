import {
  CACHE_KEY
} from "../../lib/config"
import {
  getStorageSync
} from "../../utils/util"
import {
  visitList,
  selfPublish
} from "../../api/mine"
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    listType: {
      type: String,
      value: "visit"
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    list: null,
    pageParams: {
      offset: 0,
      limit: 10
    }
  },
  created() {
    this.getList()
  },
  /**
   * 组件的方法列表
   */
  methods: {
    // 获取列表
    getList() {
      let userId = getStorageSync(CACHE_KEY.userid)

      if (this.data.listType === 'visit') {
        // 浏览记录
        this.setData({
          ['pageParams.user_id']: userId
        })
        visitList(this.data.pageParams).then(res => {
          // 处理图片
          let list = []
          for (let i in res.list) {
            list.push(res.list[i].article)
          }
          list.map(item => item.pic = item.pic === '' ? [] : item.pic.split(","))
          this.setData({
            list: list
          })
        })
      } else if (this.data.listType === 'publish') {
        // 发贴记录
        this.setData({
          ['pageParams.userId']: userId
        })
        selfPublish(this.data.pageParams).then(res => {
          // 处理图片
          res.list.map(item => item.pic = item.pic === '' ? [] : item.pic.split(","))
          this.setData({
            list: res.list
          })
        })
      }

    }
  }
})