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
  // 取得指定 id 的值
  currentEditCoupon: (state) => (id) => state.admin.couponsList.find((coupon) => coupon.id === id),
  // 取得每個類別產品的種類數
  categoryNum: (state) => {
    let typeNum = {};
    state.allCategory.forEach((type) => {
      typeNum = {
        ...typeNum,
        [type]: state.admin.productsList.filter((item) => item.category === type).length,
      };
    });
    return typeNum;
  },
  // 取得每個類別產品的總剩餘數
  categoryRestTotal: (state) => {
    let restNum = {};
    state.allCategory.forEach((type) => {
      let quantity = 0;
      state.admin.productsList.filter((item) => item.category === type).forEach((item) => {
        quantity += item.options.quantity;
      });
      restNum = {
        ...restNum,
        [type]: quantity,
      };
      quantity = 0;
    });
    return restNum;
  },
};
