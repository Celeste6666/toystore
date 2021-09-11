<template>
  <div id="client-app">
    <div
      class="navbar navbar-expand-lg navbar-light bg-white d-flex flex-column py-0 fixed-top"
    >
      <div class="container-fluid bg-danger">
        <div class="container-md d-flex justify-content-between align-items-center">
          <div class="me-auto text-white small">
            <span class="me-4">聯絡我們：+886 928-123456</span>
            <span>Email：aafree2014@gmail.com</span>
          </div>
          <div class="social-icon fs-6">
            <a href="#" class="p-2"><i class="bi bi-twitter text-white"></i></a>
            <a href="#" class="p-2"><i class="bi bi-facebook text-white"></i></a>
            <a href="#" class="p-2"><i class="bi bi-instagram text-white"></i></a>
            <a href="#" class="p-2"><i class="bi bi-youtube text-white"></i></a>
          </div>
        </div>
      </div>
      <div class="container-fluid py-2">
        <div class="container-md">
          <div class="row w-100">
            <div class="col-4 col-md-2 d-flex align-items-center">
              <a class="navbar-brand fs-2 fw-bold" href="#">玩具城</a>
            </div>
            <div class="col-8 col-md-10 d-flex flex-row-reverse">
              <div class="w-md-50 text-end">
                <button class="btn btn-lg">
                  <i class="bi bi-cart3 fs-4"></i>
                </button>
                <router-link to="/login" class="btn btn-lg">
                  <i class="bi bi-person-fill fs-4"></i>
                </router-link>
                <button
                  class="navbar-toggler border-0"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
              </div>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav fs-6">
                  <li class="nav-item">
                    <router-link to="/" class="nav-link">首頁</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/catalog" class="nav-link">目錄</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/delivery" class="nav-link">運送須知</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/about" class="nav-link">關於我們</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/contact" class="nav-link">聯絡我們</router-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <router-view />
    <article class="container-lg">
      <Coupon />
      <FollowUs />
    </article>
    <Footer />
  </div>
</template>

<script>
import { useStore } from 'vuex';
import Coupon from '@/components/general/Coupon.vue';
import FollowUs from '@/components/general/FollowUs.vue';
import Footer from '@/components/general/Footer.vue';

export default {
  name: 'Main',
  components: {
    Coupon,
    FollowUs,
    Footer,
  },
  setup() {
    const store = useStore();
    store.dispatch('getClientProducts');
  },
};
</script>
<style lang="scss" scoped>
@import '@/scss/main.scss';

#client-app {
  background-color: #f8f8f8;
  overflow: hidden;
}

.navbar {
  a {
    color: #2c3e50;

    &.router-link-exact-active {
      color: $danger !important;
    }
  }
}
</style>
