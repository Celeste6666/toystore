export default {
  client: (state) => `${state.api.baseAPI}/${state.api.uuid}/ec`,
  admin: (state) => `${state.api.baseAPI}/${state.api.uuid}/admin/ec`,
  requestHeaders: (state) => {
    const headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${state.api.token}`,
    };
    return headers;
  },
  // 取得所有 category
  allCategory: (state) => {
    const category = state.admin.productsList.map((product) => product.category);
    return [...new Set(category)];
  },
  // 取得指定 id 的值
  currentEditCoupon: (state) => (id) => state.admin.couponsList.find((coupon) => coupon.id === id),
};
