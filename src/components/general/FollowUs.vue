<template>
  <section class="follow my-6">
    <div class="h1 text-center mb-5">追蹤我們的 Insgram</div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-2 col-md-4">
          <a href="#">
            <img
              src="../../assets/fronted/home09.jpg"
              class="img-fluid h-100 rounded follow-img"
              alt=""
            />
          </a>
        </div>
        <div class="col-lg-2 col-md-4">
          <a href="#">
            <img
              src="../../assets/fronted/home07.jpg"
              class="img-fluid h-100 rounded follow-img"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.follow {
  &-img {
    transition: transform 0.3s;
    box-shadow: 0 2px 4px 0px #e3e3e3;
    &:hover {
      transform: scale(1.05);
      box-shadow: 0 2px 10px 0px #e3e3e3, 0 2px 20px 0px #e3e3e3;
    }
  }
}
</style>
