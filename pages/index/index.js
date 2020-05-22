import { createMobx,destroyMobx } from '../../utils/util'
//获取应用实例
const app = getApp()
import {navibarList,bannerList} from "../../mock/mock"
Page({
  data: {
    indicatorDots: true, //显示面板指示点
    autoplay: true, //自动滑动
    interval: 5000, //自动切换时间间隔
    duration: 500, //动画持续时间
    circular: true, //是否衔接滑动
    bannerList:[],
    navibarList:[]
  },
  // 切换tabbar
  changeTab(e){
    console.log(e)
  },
  // 初始化数据
  initData(){
    this.setData({
      navibarList:navibarList,
      bannerList:bannerList
    })
  },
  onLoad: function () {
    this.initData()
    this.storeBindings = createMobx(this,["numA"],['updateLikeCount'])
  },
  onShow:function(){
    // wx.navigateTo({
    //   url: '/index/articleDetail/articleDetail',
    // })
  },
  onUnload:function(){
    destroyMobx(this)
  }
})