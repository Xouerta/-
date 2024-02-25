// index.js

Page({
  data: {
    products: [
      { id: 1, name: '爱仕达锈不了健康炒锅，型号JXF8330B', price: 150.00, image: '../images/product1.jpg' },
      { id: 2, name: '爱仕达猛火爆炒少油烟炒锅，型号QSW2330BE', price: 150.00, image: '../images/product2.jpg' },
      {id: 3, name:'爱仕达猛火爆炒少油烟炒锅，型号QSW2330BE',price:150.00,image:'../images/product3.jpg'},
      {id: 4, name:'爱仕达电压力锅，型号APY5005ED,2个锅胆',price:200.00,image:'../images/product4.jpg'},
      // 添加更多商品项
    ],
  },
  goToDetail(event) {
    const productId = event.currentTarget.dataset.productId;
    wx.navigateTo({
      url: `/pages/detail/detail?productId=${productId}`,
    });
  },
  search() {
    // 处理搜索逻辑
  },
  ShareMessage(){
    wx.updateShareMenu({
      withShareTicket: true,
      success () { }
    })
  }
});

