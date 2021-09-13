<template>
  <div class="products">
    <span class="text-secondary my-3 h6">產品列表</span>
    <section>
      <ul class="list-group list-unstyled">
        <li class="card border-0 shadow-sm my-2" v-for="product of adminProducts" :key="product.id">
          <div class="card-body d-flex align-items-center justify-content-around">
            <img :src="product.imageUrl[0]" alt="" class="product-img" />
            <span class="text-start">
              {{ product.title }}<br />
              <span class="badge rounded-pill bg-success small product-type">{{ product.category }}</span>
            </span>
            <span class="text-center">
              NT $ {{ product.origin_price }}<br />
              <span class="small text-secondary">原始價格</span>
            </span>
            <span class="text-center">
              NT $ {{ product.price }}<br />
              <span class="small text-secondary">目前價格</span>
            </span>
            <span class="text-center product-num">
              {{ product.options.quantity }}<br />
              <span class="small text-secondary">剩餘數量</span>
            </span>
            <div class="form-check align-middle">
              <label class="form-check-label">上架</label>
              <input class="form-check-input" type="checkbox" v-model="product.enabled" />
            </div>
            <div class="product-edit">
              <button class="btn fs-4" :data-id="product.id" @click.prevent="setProductId" data-bs-toggle="modal" data-bs-target="#productModal">
                <i class="bi bi-pencil-square me-lg-2" :data-id="product.id" @click.stop="setProductId"></i>
              </button>
              <button class="btn fs-4" :data-id="product.id" @click.prevent="delete">
                <i class="bi bi-trash" :data-id="product.id" @click.stop="delete"></i>
              </button>
            </div>
          </div>
        </li>
      </ul>
      <button
        class="btn btn-lg btn-danger px-5 roun'ded-pill my-3 position-fixed bottom-0 start-50 translate-middle-x"
        @click.prevent="setProductId"
        data-id="add"
        data-bs-toggle="modal"
        data-bs-target="#productModal"
      >
        <i class="bi bi-plus-lg" data-id="add" @click.stop="setProductId"></i>
        新增產品
      </button>
    </section>
    <ProductsModal :productId="productId" />
  </div>
  <Pagination current-page-function="getAdminCurrentProducts" />
</template>

<script>
import { useStore } from 'vuex';
// eslint-disable-next-line
import { ref, computed } from 'vue';
import ProductsModal from '@/components/admin/ProductsModal.vue';
import Pagination from '@/components/general/Pagination.vue';

export default {
  name: 'Products',
  components: {
    ProductsModal,
    Pagination,
  },
  setup() {
    const store = useStore();
    const productId = ref('add');

    const adminProducts = computed(() => store.state.currentPageData);

    function setProductId(e) {
      productId.value = e.target.dataset.id;
    }

    return {
      adminProducts,
      productId,
      setProductId,
    };
  },
  methods: {
    // 刪除產品
    delete(e) {
      this.$store.dispatch('deleteAdminProduct', e.target.dataset.id);
      this.$store.dispatch('getAdminCurrentProducts');
    },
  },
};
</script>

<style lang="scss" scoped>
.product {
  &-img {
    width: 50px;
    height: 50px;
  }
}

.small {
  font-size: 12px;
}
</style>
