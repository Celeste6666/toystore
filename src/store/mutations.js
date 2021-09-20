export default {
  // client
  // 取得所有產品後分類
  getProductsList(state, products) {
    state.allCategory.forEach((cate) => {
      state.client.productsList[cate] = products.filter((product) => product.category === cate);
    });
  },
  // 取得產品資料
  getProduct(state, productInfo) {
    state.client.product = productInfo;
  },
  // 改變註冊或登入頁面
  changeLoginTab(state) {
    state.currentLoginTab = state.currentLoginTab === 'LoginArea' ? 'RegisArea' : 'LoginArea';
  },
  // 登入的 token
  getToken(state, payload) {
    state.api.token = payload;
  },
  // admin
  // 帶入所有產品
  getAdminProducts(state, products) {
    state.admin.productsList = products;
  },
  // 變更指定id產品值
  editProduct(state, editedProduct) {
    const index = state.admin.productsList.findIndex((product) => product.id === editedProduct.id);
    state.admin.productsList.splice(index, 1, editedProduct);
  },
  // 帶入所有 orders
  getAdminoOders(state, payload) {
    state.admin.ordersList = payload;
  },
  // 帶入所有coupons
  getAdminCoupons(state, payload) {
    state.admin.couponsList = payload;
  },
  // 編輯coupon
  editAdminCoupon(state, editCoupon) {
    const index = state.admin.couponsList.findIndex((coupon) => coupon.id === editCoupon.id);
    state.admin.couponsList.splice(index, 1, editCoupon);
  },
  // 取得照片
  getAdminPhotos(state, payload) {
    state.admin.photosList = payload;
  },
  // 取得頁面顯示資料
  getCurrentPage(state, payload) {
    state.currentPageData = payload.data;
    state.currentPagination = payload.meta.pagination;
  },
};
