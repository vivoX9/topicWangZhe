//index.js
//获取应用实例
const app = getApp()
import {navibarList,bannerList,articleList} from "../../mock/mock"
Page({
  data: {
    indicatorDots: true, //显示面板指示点
    autoplay: true, //自动滑动
    interval: 3000, //自动切换时间间隔
    duration: 500, //动画持续时间
    circular: true, //是否衔接滑动
    articleList:[],
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
      bannerList:bannerList,
      articleList:articleList
    })
  },
  onLoad: function () {
    this.initData()
  }
})