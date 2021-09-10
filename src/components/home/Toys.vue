<template>
  <div class="toys pt-5">
    <div class="h1 toys-title">{{title}}</div>
    <div class="toys-items py-5">
      <div class="row row-cols-1 row-cols-md-4 g-4">
        <div class="col">
          <div class="card h-100 py-5 d-flex flex-column align-items-center">
            <img src="../../assets/fronted/stuffed01.png" class="card-img-top" alt="">
            <div class="card-body pt-5">
              <h6 class="card-title text-center">Teddy Bear</h6>
              <router-link to="/catalog"
                class="btn btn-success btn-sm text-white rounded-pill px-3">
                $ 200 NT
              </router-link>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100 py-5 d-flex flex-column align-items-center">
            <img src="../../assets/fronted/stuffed02.png" class="card-img-top" alt="">
            <div class="card-body pt-5">
              <h6 class="card-title text-center">Cute Dog</h6>
              <router-link to="/catalog"
                class="btn btn-success btn-sm text-white rounded-pill px-3">
                $ 200 NT
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Toys',
  props: {
    title: String,
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/main.scss";
.toys{
  &-title{
    position: relative;
    &::after{
      content: '';
      position: absolute;
      bottom: -20px;
      left: 0;
      width: 100%;
      height: 3px;
      background: linear-gradient(to right,$success 0%,$success 12%,#e5e5e5 12%,#e5e5e5 100%);
    }
  }
}
.card{
  transition: transform .3s;
  border: 0;
  box-shadow: 0 2px 4px 0px #e3e3e3;
  &-img-top{
    max-width: 150px;
  }
  &:hover{
    transform: scale(1.05);
    box-shadow: 0 2px 10px 0px #e3e3e3,
                0 2px 20px 0px #e3e3e3;
  }
}
</style>
