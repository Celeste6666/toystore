<template>
  <div
  class="navbar navbar-expand-lg navbar-light bg-white
  d-flex flex-column py-0 fixed-top">
    <div class="container-fluid bg-danger text-white">
      <div class="container d-flex justify-content-between">
        <div class="me-auto small">
          <span class="me-4">聯絡我們：+886 928-123456</span>
          <span>Email：aafree2014@gmail.com</span>
        </div>
        <div class="social-icon fs-6">
          <a href="#" class="text-white p-2"><i class="bi bi-twitter"></i></a>
          <a href="#" class="text-white p-2"><i class="bi bi-facebook"></i></a>
          <a href="#" class="text-white p-2"><i class="bi bi-instagram"></i></a>
          <a href="#" class="text-white p-2"><i class="bi bi-youtube"></i></a>
        </div>
      </div>
    </div>
    <div class="container-fluid py-2">
      <div class="container">
        <div class="row w-100">
          <div class="col-2 d-flex align-items-center">
            <a class="navbar-brand fs-3 fw-bold" href="#">玩具城</a>
          </div>
          <div class="col-10 d-flex flex-row-reverse">
            <span class="w-25 text-end">
              <button class="btn btn-lg">
                <i class="bi bi-cart3 fs-4"></i>
              </button>
              <button class="navbar-toggler"
              type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarNav" aria-controls="navbarNav"
              aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
            </span>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav fs-6">
                <li class="nav-item">
                  <router-link to="/" class="nav-link">首頁</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/catalog" class="nav-link">目錄</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/about" class="nav-link">關於我們</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/login" class="nav-link">登入</router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <router-view style="background-color:#f8f8f8;" />
</template>
<script>
export default {
  name: 'Main',
};
</script>
<style lang="scss">
@import "@/scss/main.scss";
.navbar {
  a {
    color: #2c3e50;

    &.router-link-exact-active {
      color: $danger !important;
    }
  }
}
</style>
