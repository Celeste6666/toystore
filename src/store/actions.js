export default {
  // client
  // 取得所有產品
  async getClientProducts({ getters, commit }) {
    const res = await fetch(`${getters.client}/products`, {
      method: 'GET',
      headers: getters.requestHeaders,
    });
    const products = await res.json();
    commit('getProductsList', products.data);
  },
  // 取得指定頁面產品
  async getClientCurrentProducts({ getters, commit }, page = 1) {
    const res = await fetch(`${getters.client}/products?page=${page}&paged=12`, {
      method: 'GET',
      headers: getters.requestHeaders,
    });
    const CurrentProducts = await res.json();
    commit('getCurrentPage', CurrentProducts);
  },
  // 取得產品資料
  async getProduct({ getters, commit }, productId) {
    const res = await fetch(`${getters.client}/product/${productId}`);
    const product = await res.json();
    commit('getProduct', product.data);
  },
  // 取得指定類別頁面產品
  async filterClientCurrentProducts({ getters, commit }, payload) {
    const res = await fetch(`${getters.client}/products?page=${payload.page}&orderBy=created_at&sort=desc`, {
      method: 'GET',
      headers: getters.requestHeaders,
    });
    const CurrentProducts = await res.json();

    CurrentProducts.data = CurrentProducts.data.filter((product) => product.category === payload.category);
    // 自動分頁
    CurrentProducts.meta.pagination = {
      total: CurrentProducts.data.length,
      per_page: 12,
      current_page: payload.page,
    };

    const { total, current_page: currentPage, per_page: perPage } = CurrentProducts.meta.pagination;

    CurrentProducts.meta.pagination.total_pages = Math.ceil(total / perPage);

    CurrentProducts.data = CurrentProducts.data.slice((currentPage - 1) * perPage, currentPage * perPage);

    CurrentProducts.meta.pagination.count = CurrentProducts.data.length;
    commit('getCurrentPage', CurrentProducts);
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
  // 取得指定頁面產品
  async getAdminCurrentProducts({ getters, commit }, page = 1) {
    const res = await fetch(`${getters.admin}/products?page=${page}&paged=10`, {
      method: 'GET',
      headers: getters.requestHeaders,
    });
    const CurrentProducts = await res.json();
    commit('getCurrentPage', CurrentProducts);
  },
  // 刪除產品
  async deleteAdminProduct({ getters, dispatch }, id) {
    fetch(`${getters.admin}/product/${id}`, {
      method: 'DELETE',
      headers: getters.requestHeaders,
    }).then(() => {
      dispatch('getAdminCurrentProducts');
    });
  },
  // 新增產品
  async addAdminProduct({ getters, dispatch }, product) {
    fetch(`${getters.admin}/product`, {
      method: 'POST',
      headers: getters.requestHeaders,
      body: JSON.stringify(product),
    }).then(() => {
      dispatch('getAdminCurrentProducts');
    });
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
    if (res.status === 200) {
      const editedProduct = await res.json();
      commit('editProduct', editedProduct.data);
    }
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
  // 取得指定頁面訂單
  async getAdminCurrentOrders({ getters, commit }, page = 1) {
    const res = await fetch(`${getters.admin}/orders?page=${page}&paged=10`, {
      method: 'GET',
      headers: getters.requestHeaders,
    });
    const CurrentOrders = await res.json();
    commit('getCurrentPage', CurrentOrders);
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
  // 取得指定頁面優惠券
  async getAdminCurrentCoupons({ getters, commit }, page = 1) {
    const res = await fetch(`${getters.admin}/coupons?page=${page}&paged=10`, {
      method: 'GET',
      headers: getters.requestHeaders,
    });
    const CurrentCoupons = await res.json();
    commit('getCurrentPage', CurrentCoupons);
  },
  // 刪除指定 id 的優惠券
  async deleteAdminCoupon({ getters, dispatch }, id) {
    fetch(`${getters.admin}/coupon/${id}`, {
      method: 'DELETE',
      headers: getters.requestHeaders,
    }).then(() => {
      dispatch('getAdminCurrentCoupons');
    });
  },
  // 新增 Coupon
  async addAdminCoupon({ getters, dispatch }, coupon) {
    fetch(`${getters.admin}/coupon`, {
      method: 'POST',
      headers: getters.requestHeaders,
      body: JSON.stringify(coupon),
    }).then(() => {
      dispatch('getAdminCurrentCoupons');
    });
  },
  // 更新指定id Coupon
  async editAdminCoupon({ getters, commit }, coupon) {
    const res = await fetch(`${getters.admin}/coupon/${coupon.id}`, {
      method: 'PATCH',
      headers: getters.requestHeaders,
      body: JSON.stringify(coupon),
    });
    if (res.status === 200) {
      const editCoupon = await res.json();
      commit('editAdminCoupon', editCoupon.data);
    }
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
  // 新增圖片
  async addImage({ state, dispatch }, formData) {
    fetch(`${state.api.baseAPI}/${state.api.uuid}/admin/storage`, {
      method: 'POST',
      headers: new Headers({
        Authorization: `Bearer ${state.api.token}`,
      }),
      body: formData,
    }).then(() => {
      dispatch('getAdminCurrentImages');
    });
  },
  // 刪除圖片
  async deleteAdminImage({ state, getters, dispatch }, id) {
    fetch(`${state.api.baseAPI}/${state.api.uuid}/admin/storage/${id}`, {
      method: 'DELETE',
      headers: getters.requestHeaders,
    }).then(() => {
      dispatch('getAdminCurrentImages');
    });
  },
  // 取得指定頁面圖片
  async getAdminCurrentImages({ state, getters, commit }, page = 1) {
    const res = await fetch(`${state.api.baseAPI}/${state.api.uuid}/admin/storage?page=${page}&paged=10`, {
      method: 'GET',
      headers: getters.requestHeaders,
    });
    const CurrentImages = await res.json();
    commit('getCurrentPage', CurrentImages);
  },
};
