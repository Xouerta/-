// index.js

Page({
  navigateToProductDetail: function (event) {
    const productId = event.currentTarget.dataset.productid;
    wx.navigateTo({
      url: `/pages/productDetail/productDetail?id=${productId}`, // 替换为实际的商品展示页路径
    });
  },
});
