<template>
  <article class="catalog container-lg my-5">
    <!-- eslint-disable-next-line  -->
    <nav aria-label="breadcrumb" class="mb-6">
      <ol class="breadcrumb py-2 px-4 border border-2 rounded-pill">
        <li class="breadcrumb-item">首頁</li>
        <li class="breadcrumb-item" aria-current="page">目錄</li>
      </ol>
    </nav>
    <div class="d-flex justify-content-between align-items-center catalog-header my-5">
      <div class="h1">所有玩具</div>
      <div class="d-flex justify-content-between align-items-center">
        <button type="button" class="btn btn-sm btn-success rounded-pill px-3 py-1">
          所有玩具
        </button>
        <button type="button" class="btn btn-sm rounded-pill px-3 py-1">絨毛玩具</button>
        <button type="button" class="btn btn-sm rounded-pill px-3 py-1">木製玩具</button>
        <button type="button" class="btn btn-sm rounded-pill px-3 py-1">樂高玩具</button>
      </div>
    </div>
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 mt-1">
      <div class="col">
        <div class="card h-100 py-3 d-flex flex-column align-items-center">
          <img src="@/assets/fronted/stuffed01.png" class="card-img-top" alt="" />
          <div class="card-body pt-5">
            <h6 class="card-title text-center">Teddy Bear</h6>
            <router-link to="/catalog" class="btn btn-success btn-sm rounded-pill px-3">
              $ 200 NT
            </router-link>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100 py-3 d-flex flex-column align-items-center">
          <img src="@/assets/fronted/stuffed02.png" class="card-img-top" alt="" />
          <div class="card-body pt-5">
            <h6 class="card-title text-center">Cute Dog</h6>
            <router-link to="/catalog" class="btn btn-success btn-sm rounded-pill px-3">
              $ 200 NT
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <Pagination />
  </article>
</template>
<script>
import Pagination from '@/components/general/Pagination.vue';

export default {
  name: 'Catalog',
  components: { Pagination },
};
</script>
<style lang="scss" scoped>
@import '@/scss/main.scss';
.catalog {
  &-header {
    position: relative;
    &::after {
      content: '';
      position: absolute;
      bottom: -20px;
      left: 0;
      width: 100%;
      height: 3px;
      background: linear-gradient(
        to right,
        $success 0%,
        $success 12%,
        #e5e5e5 12%,
        #e5e5e5 100%
      );
    }
    & i {
      position: relative;
      animation: arrowMove 0.8s linear infinite;
    }
  }
}
.card {
  transition: transform 0.3s;
  border: 0;
  box-shadow: 0 2px 4px 0px #e3e3e3;
  &-img-top {
    max-width: 150px;
  }
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 2px 10px 0px #e3e3e3, 0 2px 20px 0px #e3e3e3;
  }
}
</style>
