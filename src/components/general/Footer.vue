<template>
  <footer class="container-fluid bg-danger py-5">
    <div class="container-lg">
      <div class="row justify-content-between align-items-center">
        <div class="col-auto">
          <span class="fs-2 fw-bold text-white">玩具城</span>
        </div>
        <div class="col-auto">
          <router-link to="/" class="btn text-white">首頁</router-link>
          <router-link to="/catalog" class="btn text-white">目錄</router-link>
          <router-link to="/delivery" class="btn text-white">運送須知</router-link>
          <router-link to="/about" class="btn text-white">關於我們</router-link>
          <router-link to="/contact" class="btn text-white">聯絡我們</router-link>
        </div>
        <div class="col-auto social-icon fs-6">
          <a href="#" class="p-2 text-white"><i class="bi bi-twitter"></i></a>
          <a href="#" class="p-2 text-white"><i class="bi bi-facebook"></i></a>
          <a href="#" class="p-2 text-white"><i class="bi bi-instagram"></i></a>
          <a href="#" class="p-2 text-white"><i class="bi bi-youtube"></i></a>
        </div>
      </div>
    </div>
  </footer>
</template>
