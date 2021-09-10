<template>
  <div class="banner d-flex justify-content-center align-items-center">
    <div class="card text-center banner_card px-4 py-3">
      <div class="card-body">
        <p class="text-success fs-6 mb-2">歡迎來到玩具城！</p>
        <h5 class="card-title fs-1 fw-bolder">還在尋找嗎？</h5>
        <h5 class="card-title fs-1 fw-bolder">給小朋友啟蒙最好的禮物</h5>
        <p class="card-text"></p>
        <router-link to="/catalog"
        class="btn btn-danger rounded-pill text-white px-3">
          去看看
        </router-link>
      </div>
    </div>
  </div>
  <section class="container my-6 text-white text-center">
    <div class="row pt-5">
      <div class="col">
        <div class="card mb-3 bg-warning position-relative">
          <div class="row g-0">
            <div class="col-md-6">
            </div>
            <div class="col-md-6">
              <div class="card-body p-4">
                <h2 class="card-title mb-4">毛絨<br/>玩具</h2>
                <router-link to="/catalog"
                class="btn btn-white rounded-pill px-3">
                  馬上買
                </router-link>
              </div>
            </div>
          </div>
          <img src="../../assets/fronted/stuffed01.png"
          class="position-absolute card-toy" alt="">
        </div>
      </div>
      <div class="col">
        <div class="card mb-3 bg-info position-relative">
          <img src="../../assets/fronted/wooden01.png"
          class="position-absolute card-toy" alt="">
          <div class="row g-0">
            <div class="col-md-6">
            </div>
            <div class="col-md-6">
              <div class="card-body p-4">
                <h2 class="card-title mb-4">木製<br/>玩具</h2>
                <router-link to="/catalog"
                class="btn btn-white rounded-pill px-3">
                  馬上買
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card mb-3 bg-success position-relative">
          <img src="../../assets/fronted/lego05.png"
          class="position-absolute card-toy" alt="">
          <div class="row g-0">
            <div class="col-md-6">
            </div>
            <div class="col-md-6">
              <div class="card-body p-4">
                <h2 class="card-title mb-4">樂高<br/>玩具</h2>
                <router-link to="/catalog"
                class="btn btn-white rounded-pill px-3">
                  馬上買
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Banner',
};
</script>
<style lang="scss" scoped>
.banner {
  width: 100%;
  height: 100vh;
  background-image: url('../../assets/fronted/home09.jpg');
  background-size: cover;
  background-position: 0 -150px;
}
.card{
  &-toy{
    width:220px;
    z-index:100;
    left:10px;
    top:0px;
    transition: all .5s;
  }
  &:hover>&-toy{
    top:-35px
  }
}
</style>
