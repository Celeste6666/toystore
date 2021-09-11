export default {
  // client
  async getClientProducts({ getters, commit }) {
    const products = await fetch(`${getters.client}/products`);
    const clientProducts = await products.json();
    commit('getClientProducts', clientProducts);
  },
  async login({ state }, payload) {
    const admin = await fetch(`${state.api.baseAPI}/auth/login`, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }),
      body: JSON.stringify(payload),
    });
    return admin.json();
  },
  // admin
  // 取得所有產品
  async getAdminProducts({ getters, commit }) {
    const res = await fetch(`${getters.admin}/products`, {
      method: 'GET',
      headers: getters.requestHeaders,
    });
    const adminProducts = await res.json();
    commit('getAdminProducts', adminProducts.data);
  },
  // 刪除產品
  async deleteAdminProduct({ getters, commit }, id) {
    fetch(`${getters.admin}/product/${id}`, {
      method: 'DELETE',
      headers: getters.requestHeaders,
    }).then(() => {
      commit('deleteAdminProduct', id);
    });
  },
  // 新增圖片
  async addImage({ state }, formData) {
    const res = await fetch(`${state.api.baseAPI}/${state.api.uuid}/admin/storage`, {
      method: 'POST',
      headers: new Headers({
        Authorization: `Bearer ${state.api.token}`,
      }),
      body: formData,
    });

    return res.json();
  },
  // 新增產品
  async addAdminProduct({ getters, commit }, product) {
    const res = await fetch(`${getters.admin}/product`, {
      method: 'POST',
      headers: getters.requestHeaders,
      body: JSON.stringify(product),
    });
    const newProduct = await res.json();
    commit('addAdminProduct', newProduct);
  },
  // 取得單一產品
  async getAdminSingleProduct({ getters }, id) {
    const res = await fetch(`${getters.admin}/product/${id}`, {
      method: 'GET',
      headers: getters.requestHeaders,
    });
    return res.json();
  },
  // 編輯產品
  async editProduct({ getters, commit }, product) {
    const res = await fetch(`${getters.admin}/product/${product.id}`, {
      method: 'PATCH',
      headers: getters.requestHeaders,
      body: JSON.stringify(product),
    });
    const editedProduct = await res.json();
    commit('editProduct', editedProduct.data);
  },
  // 取得所有 orders
  async getAdminOrders({ getters, commit }) {
    const res = await fetch(`${getters.admin}/orders`, {
      method: 'GET',
      headers: getters.requestHeaders,
    });
    const adminOrders = await res.json();
    commit('getAdminoOders', adminOrders.data);
  },
  // 取得所有 coupons
  async getAdminCoupons({ getters, commit }) {
    const res = await fetch(`${getters.admin}/coupons`, {
      method: 'GET',
      headers: getters.requestHeaders,
    });
    const adminCoupons = await res.json();
    commit('getAdminCoupons', adminCoupons.data);
  },
  // 刪除指定 id 的優惠券
  async deleteAdminCoupon({ getters, commit }, id) {
    fetch(`${getters.admin}/coupon/${id}`, {
      method: 'DELETE',
      headers: getters.requestHeaders,
    }).then(() => {
      commit('deleteAdminCoupon', id);
    });
  },
  // 新增 Coupon
  async addAdminCoupon({ getters, commit }, coupon) {
    const res = await fetch(`${getters.admin}/coupon`, {
      method: 'POST',
      headers: getters.requestHeaders,
      body: JSON.stringify(coupon),
    });
    const newCoupon = await res.json();
    commit('addAdminCoupon', newCoupon.data);
  },
  // 更新指定id Coupon
  async editAdminCoupon({ getters, commit }, coupon) {
    const res = await fetch(`${getters.admin}/coupon/${coupon.id}`, {
      method: 'PATCH',
      headers: getters.requestHeaders,
      body: JSON.stringify(coupon),
    });
    const editCoupon = await res.json();
    commit('editAdminCoupon', editCoupon.data);
  },
  // 取得所有照片
  async getAdminImages({ state, getters, commit }) {
    const res = await fetch(`${state.api.baseAPI}/${state.api.uuid}/admin/storage`, {
      method: 'GET',
      headers: getters.requestHeaders,
    });
    const images = await res.json();
    commit('getAdminPhotos', images.data);
  },
  // 刪除圖片
  async deleteAdminImage({ state, getters, commit }, id) {
    fetch(`${state.api.baseAPI}/${state.api.uuid}/admin/storage/${id}`, {
      method: 'DELETE',
      headers: getters.requestHeaders,
    }).then(() => {
      commit('deleteAdminPhoto', id);
    });
  },
};
