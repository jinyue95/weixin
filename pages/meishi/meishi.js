// pages/meishi/meishi.js
var app = getApp()  
Page({  
  data: {  
    navbar: ['全部分类', '3KM', '综合榜','筛选'],  
    currentTab: 0,
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
      "src":"/images/imgs/index2.jpg",
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
      "src":"/images/imgs/index2.jpg",
      "money":"36元",
      "mi":"770m",
      "num":"45645"
    }
  ]  
  },  
  navbarTap: function(e){  
    this.setData({  
      currentTab: e.currentTarget.dataset.idx  
    })  
  }  
})  