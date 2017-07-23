//index.js
//获取应用实例
Page({
  data: {
    imgUrls: [
      '/images/imgs/food1.jpg',
      '/images/imgs/food2.jpg',
      '/images/imgs/food3.jpg',
      '/images/imgs/food2.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
  
  arr:[
    {
      "name":"鸿毛饺子",
      "src":"/images/imgs/index1.jpg",
      "money":"36元",
      "mi":"770m",
      "num":"45645"
    },
    {
      "name":"鸿毛饺子",
      "src":"/images/imgs/index2.jpg",
      "money":"36元",
      "mi":"770m",
      "num":"45645"
    },
    {
      "name":"鸿毛饺子",
      "src":"/images/imgs/index1.jpg",
      "money":"36元",
      "mi":"770m",
      "num":"45645"
    },
    {
      "name":"鸿毛饺子",
      "src":"/images/imgs/index2.jpg",
      "money":"36元",
      "mi":"770m",
      "num":"45645"
    }
  ],
 
  },
  meishi:function(){
    wx.navigateTo({
      url:'../meishi/meishi'
    })
  },
  waimai:function(){
    wx.navigateTo({
      url:'../waimai/waimai'
    })
  },
  zizhu:function(){
    wx.navigateTo({
      url:'../zizhu/zizhu'
    })
  },
  tiandian:function(){
    wx.navigateTo({
      url:'../tiandian/tiandian'
    })
  },
  jinri:function(){
    wx.navigateTo({
      url:'../jinri/jinri'
    })
  },
  zhoubian:function(){
    wx.navigateTo({
      url:'../zhoubian/zhoubian'
    })
  },
  KTV:function(){
    wx.navigateTo({
      url:'../KTV/KTV'
    })
  },
  xindan:function(){
    wx.navigateTo({
      url:"../xindan/xindan"
    })
  },
  dianying:function(){
    wx.navigateTo({
      url:'../dianying/dianying'
    })
  },
  onShareAppMessage: function () {
    return {
      title: '分享',
      path: '/page/user?id=123'
    }
  },
  vv:function(){
    wx.navigateTo({
      url:"../list/list"
    })
  }
})
 