<template>
  <div class="navbar navbar-expand-lg navbar-light bg-light d-flex flex-column py-0">
    <div class="container-fluid bg-danger text-white py-1">
      <div class="me-auto small">
        <span class="me-4">聯絡我們：+886 928-123456</span>
        <span>Email：aafree2014@gmail.com</span>
      </div>
      <div class="social-iconfs-6">
        <a href="#" class="text-white p-2"><i class="bi bi-twitter"></i></a>
        <a href="#" class="text-white p-2"><i class="bi bi-facebook"></i></a>
        <a href="#" class="text-white p-2"><i class="bi bi-instagram"></i></a>
        <a href="#" class="text-white p-2"><i class="bi bi-youtube"></i></a>
      </div>
    </div>
    <div class="container-fluid p-3">
      <a class="navbar-brand fs-4 fw-bold" href="#">ToyStore</a>
      <!--eslint-disable-next-line-->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">About</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/login" class="nav-link">Login</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <router-view/>
</template>

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
