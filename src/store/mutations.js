export default {
  // client
  // 從資料庫取得資料
  getClientProducts(state, payload) {
    state.client.productsList = payload;
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
  getAdminProducts(state, payload) {
    state.admin.productsList = payload;
  },
  // 刪除指定id產品
  deleteAdminProduct(state, id) {
    state.admin.productsList = state.admin.productsList.filter((product) => product.id !== id);
  },
  // 新增產品
  addAdminProduct(state, product) {
    state.admin.productsList = [...state.admin.productsList, product];
    console.log(state.admin.productsList);
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
  // 新增coupons
  addAdminCoupon(state, coupon) {
    state.admin.couponsList = [...state.admin.couponsList, coupon];
  },
  // 編輯coupon
  editAdminCoupon(state, editCoupon) {
    const index = state.admin.couponsList.findIndex((coupon) => coupon.id === editCoupon.id);
    state.admin.couponsList.splice(index, 1, editCoupon);
  },
  // 刪除指定 id 的優惠券
  deleteAdminCoupon(state, id) {
    state.admin.couponsList = state.admin.couponsList.filter((coupon) => coupon.id !== id);
  },
  // 取得照片
  getAdminPhotos(state, payload) {
    state.admin.photosList = payload;
  },
  // 新增圖片
  addNewPhoto(state, photo) {
    state.admin.photosList = [...state.admin.photosList, photo];
  },
  // 刪除指定id照片
  deleteAdminPhoto(state, id) {
    state.admin.photosList = state.admin.photosList.filter((photo) => photo.id !== id);
  },
};
