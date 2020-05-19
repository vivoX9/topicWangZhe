<<<<<<< HEAD
import { createMobx,destyoyMobx } from '../../utils/util'
//获取应用实例
const app = getApp()
import {navibarList,bannerList} from "../../mock/mock"
=======
//index.js
//获取应用实例
const app = getApp()
import {navibarList,bannerList,articleList} from "../../mock/mock"
>>>>>>> 49c729e0e666f004629e5b912967b1849e587443
Page({
  data: {
    indicatorDots: true, //显示面板指示点
    autoplay: true, //自动滑动
<<<<<<< HEAD
    interval: 5000, //自动切换时间间隔
    duration: 500, //动画持续时间
    circular: true, //是否衔接滑动
=======
    interval: 3000, //自动切换时间间隔
    duration: 500, //动画持续时间
    circular: true, //是否衔接滑动
    articleList:[],
>>>>>>> 49c729e0e666f004629e5b912967b1849e587443
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
<<<<<<< HEAD
      bannerList:bannerList
=======
      bannerList:bannerList,
      articleList:articleList
>>>>>>> 49c729e0e666f004629e5b912967b1849e587443
    })
  },
  onLoad: function () {
    this.initData()
<<<<<<< HEAD
    this.storeBindings = createMobx(this,["numA"],['updateLikeCount'])
  },
  onUnload:function(){
    destyoyMobx(this)
=======
>>>>>>> 49c729e0e666f004629e5b912967b1849e587443
  }
})