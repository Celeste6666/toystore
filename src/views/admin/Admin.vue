<template>
  <section class="admin container-fluid">
    <div class="row">
      <aside class="col-md-3 col-lg-2 shadow position-relative">
        <nav class="navbar">
          <div class="container-fluid px-2 flex-column align-items-start">
            <h2 class="my-4 px-3">玩具城</h2>
            <div>
              <ul class="navbar-nav fs-6 flex-column align-items-stretch">
                <li class="nav-item">
                  <router-link to="/admin" class="nav-link p-3">
                    <i class="bi bi-graph-up"></i>
                    首頁</router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link to="/admin/products" class="nav-link p-3">
                    <i class="bi bi-menu-up"></i>
                    產品管理</router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link to="/admin/orders" class="nav-link p-3">
                    <i class="bi bi-card-checklist"></i>
                    訂單管理</router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link to="/admin/coupons" class="nav-link p-3">
                    <i class="bi bi-card-image"></i>
                    優惠券管理</router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link to="/admin/photos" class="nav-link p-3">
                    <i class="bi bi-card-image"></i>
                    圖片管理</router-link
                  >
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <button
          class="btn fs-3 position-absolute bottom-0 end-0"
          @click.prevent="signOut"
        >
          <i class="bi bi-box-arrow-right"></i>
        </button>
      </aside>
      <article class="col-md-9 col-lg-10 admin-app">
        <div class="container-fluid px-2">
          <div class="row px-3">
            <div class="col-12 mt-3 mb-4 mb-lg-0 text-end">
              <button
                class="btn rounded-circle shadow fs-5 me-5 admin-notes position-relative"
              >
                <i class="bi bi-bell-fill"></i>
                <span
                  class="position-absolute top-8 start-95 translate-middle p-1 bg-danger border border-light rounded-circle"
                >
                  <span class="visually-hidden">New alerts</span>
                </span>
              </button>
              <img
                src="https://randomuser.me/api/portraits/women/12.jpg"
                class="admin-user rounded-circle"
                alt=""
                srcset=""
              />
            </div>
            <div class="col-12 admin-content">
              <router-view></router-view>
            </div>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>
<script>
import { useStore } from 'vuex';

export default {
  name: 'Admin',
  setup() {
    const store = useStore();
    const cookieReg = /(?:(?:^|.*;\s*)toyStoreToken\s*=\s*([^;]*).*$)|^.*$/;
    const myAdminCookieToken = document.cookie.replace(cookieReg, '$1');
    store.commit('getToken', myAdminCookieToken);
    store.dispatch('getAdminProducts'); // 取得porducts
    store.dispatch('getAdminOrders'); // 取得orders
    store.dispatch('getAdminCoupons'); // 取得coupons
    store.dispatch('getAdminImages'); // 取得photos
  },
  methods: {
    signOut() {
      document.cookie = "toyStoreToken=''; expires=''; path=/";
      this.$store.commit('getToken', '');
      this.$router.push('/');
    },
  },
};
</script>
<style lang="scss" scoped>
@import '@/scss/main.scss';

.admin {
  &-app {
    background-color: #f8f8f8;
  }
  &-content {
    min-height: calc(100vh - 45px - 16px);
  }
  .navbar {
    .nav-link {
      color: $secondary;
      transition: color 0.5s;
      &.router-link-exact-active {
        color: $dark !important;
        font-weight: 600;
        border-left: 2px solid $danger;
      }
    }
  }
  &-notes {
    position: relative;
    &::after {
      content: '';
      position: absolute;
      right: -24px;
      top: 20%;
      width: 2px;
      height: 60%;
      background: lighten($secondary, 45%);
    }
  }
  &-user {
    width: 45px;
    height: 45px;
  }
}
</style>
