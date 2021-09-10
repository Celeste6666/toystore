<template>
  <section class="about d-flex justify-content-center align-items-center">
    <div class="card border-0 text-center px-4 py-3 bg-transparent">
      <div class="card-body text-white">
        <p class="fs-6 mb-2">關於我們</p>
        <p class="card-title fs-1 fw-bold">我們的故事</p>
        <p class="text-center fs-6 mb-2">
          一群想要孩子能更安全玩玩具的一夥人，在機緣巧合下湊再一起的故事。<br />
          一起為孩子的童年增添色彩吧！
        </p>
        <router-link
          to="/catalog"
          class="btn bg-success rounded-circle mt-4"
          style="width: 60px; height: 60px"
        >
          <i class="bi bi-caret-right-fill fs-2 text-white"></i>
        </router-link>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'About',
};
</script>
<style lang="scss" scoped>
.about {
  width: 100%;
  height: 100vh;
  /* background-image 上加入linear-gradient()背景圖片變暗 */
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('../../assets/fronted/home08.jpg');
  background-size: 100% 115%;
  background-attachment: fixed;
}
</style>
