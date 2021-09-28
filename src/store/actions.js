export default {
  // client
  // 取得所有產品
  async getClientProducts({ getters, commit }) {
    commit('changeIsLoading');
    const res = await fetch(`${getters.client}/products`, {
      method: 'GET',
      headers: getters.requestHeaders,
    });
    const products = await res.json();
    commit('getProductsList', products.data);
    commit('changeIsLoading');
  },
  // 取得指定頁面產品
  async getClientCurrentProducts({ getters, commit }, page = 1) {
    commit('changeIsLoading');
    const res = await fetch(`${getters.client}/products?page=${page}&paged=12`, {
      method: 'GET',
      headers: getters.requestHeaders,
    });
    const CurrentProducts = await res.json();
    commit('getCurrentPage', CurrentProducts);
    commit('changeIsLoading');
  },
  // 取得產品資料
  async getProduct({ getters, commit }, productId) {
    commit('changeIsLoading');
    const res = await fetch(`${getters.client}/product/${productId}`);
    const product = await res.json();
    commit('getProduct', product.data);
    commit('changeIsLoading');
  },
  // 取得指定類別頁面產品
  async filterClientCurrentProducts({ getters, commit }, payload) {
    commit('changeIsLoading');
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
    commit('changeIsLoading');
  },
  // 取得購物車所有資料
  async getCartsList({ getters, commit }) {
    const res = await fetch(`${getters.client}/shopping`, {
      method: 'GET',
      headers: getters.requestHeaders,
    });
    const cart = await res.json();
    commit('getCartsList', cart.data);
  },
  // 加入購物車
  async addToCart({ getters, dispatch }, payload) {
    fetch(`${getters.client}/shopping`, {
      method: 'POST',
      headers: getters.requestHeaders,
      body: JSON.stringify(payload),
    })
      .then(() => {
        dispatch('getCartsList');
      });
  },
  // 編輯購物車
  async editCart({ getters, dispatch }, payload) {
    fetch(`${getters.client}/shopping`, {
      method: 'PATCH',
      headers: getters.requestHeaders,
      body: JSON.stringify(payload),
    })
      .then(() => {
        dispatch('getCartsList');
      });
  },
  // 刪除某筆購物車產品
  async deleteCartProduct({ getters, dispatch }, id) {
    fetch(`${getters.client}/shopping/${id}`, {
      method: 'DELETE',
      headers: getters.requestHeaders,
      body: JSON.stringify({
        product: id,
      }),
    })
      .then(() => {
        dispatch('getCartsList');
      });
  },
  // 刪除整個購物車產品
  async deleteCarts({ getters, dispatch }) {
    fetch(`${getters.client}/shopping/all/product`, {
      method: 'DELETE',
      headers: getters.requestHeaders,
    })
      .then(() => {
        dispatch('getCartsList');
      });
  },
  async postOrder({ state, getters, dispatch }) {
    const res = await fetch(`${getters.client}/orders`, {
      method: 'POST',
      headers: getters.requestHeaders,
      body: JSON.stringify(state.client.order),
    });
    if (res.ok) {
      const orderId = await res.json();
      fetch(`${getters.client}/orders/${orderId.data.id}/paying`, {
        methods: 'POST',
        headers: getters.requestHeaders,
      })
        .then(() => {
          dispatch('getCartsList');
        });
    }
    return res;
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
    commit('changeIsLoading');
    const res = await fetch(`${getters.admin}/products`, {
      method: 'GET',
      headers: getters.requestHeaders,
    });
    const adminProducts = await res.json();
    commit('getAdminProducts', adminProducts.data);
    commit('changeIsLoading');
  },
  // 取得指定頁面產品
  async getAdminCurrentProducts({ getters, commit }, page = 1) {
    commit('changeIsLoading');
    const res = await fetch(`${getters.admin}/products?page=${page}&paged=10&orderBy=created_at&sort=desc`, {
      method: 'GET',
      headers: getters.requestHeaders,
    });
    const CurrentProducts = await res.json();
    commit('getCurrentPage', CurrentProducts);
    commit('changeIsLoading');
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
  async getAdminSingleProduct({ getters, commit }, id) {
    commit('changeIsLoading');
    const res = await fetch(`${getters.admin}/product/${id}`, {
      method: 'GET',
      headers: getters.requestHeaders,
    });
    return res.json();
  },
  // 編輯產品
  async editProduct({ getters, commit }, product) {
    commit('changeIsLoading');
    const res = await fetch(`${getters.admin}/product/${product.id}`, {
      method: 'PATCH',
      headers: getters.requestHeaders,
      body: JSON.stringify(product),
    });
    if (res.status === 200) {
      const editedProduct = await res.json();
      commit('editProduct', editedProduct.data);
      commit('changeIsLoading');
    }
  },
  // 取得所有 orders
  async getAdminOrders({ getters, commit }) {
    commit('changeIsLoading');
    const res = await fetch(`${getters.admin}/orders`, {
      method: 'GET',
      headers: getters.requestHeaders,
    });
    let adminOrders = await res.json();
    adminOrders = adminOrders.data.filter((order) => new Date(order.created.datetime) > new Date('2021'));
    commit('getAdminoOders', adminOrders);
    commit('changeIsLoading');
  },
  // 取得指定頁面訂單
  async getAdminCurrentOrders({ getters, commit }, page = 1) {
    commit('changeIsLoading');
    const res = await fetch(`${getters.admin}/orders?page=${page}&paged=10&orderBy=created_at&sort=desc`, {
      method: 'GET',
      headers: getters.requestHeaders,
    });
    const CurrentOrders = await res.json();
    CurrentOrders.data = CurrentOrders.data.filter((order) => new Date(order.created.datetime) > new Date('2021'));
    commit('getCurrentPage', CurrentOrders);
    commit('changeIsLoading');
  },
  // 取得指定id訂單
  async getAdminSingleOrder({ getters }, id) {
    const res = await fetch(`${getters.admin}/orders/${id}`, {
      method: 'GET',
      headers: getters.requestHeaders,
    });
    return res.json();
  },
  // 變更指定 id 的訂單為已付款
  async changeAdminOrderPaid({ getters }, id) {
    fetch(`${getters.admin}/orders/${id}/paid`, {
      method: 'PATCH',
      headers: getters.requestHeaders,
    });
  },
  // 變更指定 id 的訂單為未付款
  async changeAdminOrderUnpaid({ getters }, id) {
    fetch(`${getters.admin}/orders/${id}/unpaid`, {
      method: 'PATCH',
      headers: getters.requestHeaders,
    });
  },
  // 取得所有 coupons
  async getAdminCoupons({ getters, commit }) {
    commit('changeIsLoading');
    const res = await fetch(`${getters.admin}/coupons`, {
      method: 'GET',
      headers: getters.requestHeaders,
    });
    const adminCoupons = await res.json();
    commit('getAdminCoupons', adminCoupons.data);
    commit('changeIsLoading');
  },
  // 取得指定頁面優惠券
  async getAdminCurrentCoupons({ getters, commit }, page = 1) {
    commit('changeIsLoading');
    const res = await fetch(`${getters.admin}/coupons?page=${page}&paged=10&orderBy=created_at&sort=desc`, {
      method: 'GET',
      headers: getters.requestHeaders,
    });
    const CurrentCoupons = await res.json();
    commit('getCurrentPage', CurrentCoupons);
    commit('changeIsLoading');
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
    commit('changeIsLoading');
    const res = await fetch(`${getters.admin}/coupon/${coupon.id}`, {
      method: 'PATCH',
      headers: getters.requestHeaders,
      body: JSON.stringify(coupon),
    });
    if (res.status === 200) {
      const editCoupon = await res.json();
      commit('editAdminCoupon', editCoupon.data);
      commit('changeIsLoading');
    }
  },
  // 取得所有照片
  async getAdminImages({ state, getters, commit }) {
    commit('changeIsLoading');
    const res = await fetch(`${state.api.baseAPI}/${state.api.uuid}/admin/storage`, {
      method: 'GET',
      headers: getters.requestHeaders,
    });
    const images = await res.json();
    commit('getAdminPhotos', images.data);
    commit('changeIsLoading');
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
    commit('changeIsLoading');
    const res = await fetch(`${state.api.baseAPI}/${state.api.uuid}/admin/storage?page=${page}&paged=10&orderBy=created_at&sort=desc`, {
      method: 'GET',
      headers: getters.requestHeaders,
    });
    const CurrentImages = await res.json();
    commit('getCurrentPage', CurrentImages);
    commit('changeIsLoading');
  },
};
