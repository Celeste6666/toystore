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
      <div class="h1">{{ currentCategory }}</div>
      <div class="d-flex justify-content-between align-items-center">
        <button
          type="button"
          class="btn btn-sm rounded-pill px-3 py-1"
          :class="[currentCategory === '所有玩具' ? 'btn-success' : '']"
          @click.prevent="changeCategory('所有玩具')"
        >
          所有玩具
        </button>
        <button
          type="button"
          v-for="cate of categories"
          :key="cate"
          @click.prevent="changeCategory(cate)"
          class="btn btn-sm rounded-pill px-3 py-1"
          :class="[currentCategory === cate ? 'btn-success' : '']"
        >
          {{ cate }}
        </button>
      </div>
    </div>
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 mt-1">
      <div class="col" v-for="product of products" :key="products.id">
        <router-link
          :to="{ name: 'Product', params: { id: product.id } }"
          class="text-decoration-none text-dark"
        >
          <div class="card h-100 py-3 d-flex flex-column align-items-center">
            <img :src="product.imageUrl[0]" class="card-img-top h-50" alt="" />
            <div class="card-body pt-5">
              <h6 class="card-title text-center">{{ product.title }}</h6>
              <span class="btn btn-success btn-sm rounded-pill px-3">
                NT $ {{ product.price }}
              </span>
            </div>
          </div>
        </router-link>
      </div>
    </div>
    <Pagination :current-page-function="currentPageFunction" :current-category="currentCategory" />
  </article>
</template>
<script>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import Pagination from '@/components/general/Pagination.vue';

export default {
  name: 'Catalog',
  components: { Pagination },
  setup() {
    const store = useStore();

    const currentPageFunction = ref('getClientCurrentProducts');
    const currentCategory = ref('所有玩具');

    const categories = computed(() => store.state.allCategory);
    const products = computed(() => store.state.currentPageData);

    function changeCategory(cate) {
      if (cate === '所有玩具') {
        currentPageFunction.value = 'getClientCurrentProducts';
      } else {
        currentPageFunction.value = 'filterClientCurrentProducts';
      }
      currentCategory.value = cate;
    }

    return {
      currentPageFunction,
      currentCategory,
      changeCategory,
      categories,
      products,
    };
  },
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
      background: linear-gradient(to right, $success 0%, $success 12%, #e5e5e5 12%, #e5e5e5 100%);
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
