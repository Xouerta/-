// product-detail.js

Page({
  data: {
    product: {},
  },

  onLoad(options) {
    // 获取商品详情数据，这里可以通过 options.productId 获取对应商品的 ID
    // 实际开发中可能需要通过接口请求获取商品信息
    const productId = options.productId || 1; // 默认展示第一个商品的详情
    const product = this.getProductDetails(productId);
    this.setData({
      product,
    });
  },

  getProductDetails(productId) {
    // 这里模拟通过商品ID获取商品详情的逻辑，实际中可能需要调用接口
    return {
      id: productId,
      name: `商品${productId}`,
      price: 99.99,
      image: `/images/product${productId}.jpg`,
      description: '这是商品的详细描述，可以包含更多信息。',
      // 添加更多商品详情信息
    };
  },
});
