<template>
  <article class="checkout container-lg my-5">
    <nav aria-label="breadcrumb" class="mb-6">
      <ol class="breadcrumb py-2 px-4 border border-2 rounded-pill">
        <li class="breadcrumb-item">首頁</li>
        <li class="breadcrumb-item" aria-current="page">購物車</li>
      </ol>
    </nav>
    <div class="row g-4">
      <div class="col-md-8">
        <div class="card shadow-sm">
          <div class="card-body p-6">
            <Checkout01 v-if="checkouStep === 1" />
            <Checkout02 v-else-if="checkouStep === 2" />
            <Checkout03 v-else-if="checkouStep === 3" />
          </div>
        </div>
      </div>
      <div class="col-md-4" v-if="checkouStep < 3">
        <div class="card mb-4 shadow-sm">
          <div class="card-body px-0">
            <div class="h5 py-4 px-5 border-bottom">購物車清單</div>
            <ul class="list-group px-4">
              <li class="list-group-item d-flex justify-content-between">
                <img src="../../assets/fronted/wooden05.jpeg" class="w-25" />
                <span>
                  <div class="fw-bolder">木頭</div>
                  <div>數量</div>
                </span>
                <span> NT $ 2000 </span>
              </li>
              <li class="list-group-item d-flex justify-content-between">
                <img src="../../assets/fronted/wooden03.jpeg" class="w-25" />
                <span>
                  <div class="fw-bolder">木頭</div>
                  <div>數量</div>
                </span>
                <span> NT $ 2000 </span>
              </li>
            </ul>
          </div>
        </div>
        <div class="card shadow-sm mb-4" v-if="checkouStep < 2">
          <div class="card-body p-5">
            <div class="h5">折價券代碼</div>
            <form action="" class="row g-2">
              <div class="col-md-9">
                <input
                  type="text"
                  name="coupon"
                  class="form-control rounded-pill border-2 bg-light coupon"
                />
              </div>
              <div class="col-md-3">
                <div class="d-grid gap-2">
                  <button class="btn btn-danger rounded-pill" @click.prevent="useCoupon">
                    使用
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="card mb-4 shadow-sm">
          <div class="card-body px-0">
            <div class="h5 py-4 px-5 border-bottom">訂單總計</div>
            <div class="px-5 mt-4">
              <p class="d-flex justify-content-between">
                <span>購物金額</span>
                <span>NT $ 5000</span>
              </p>
              <p class="d-flex justify-content-between">
                <span>折抵金額</span>
                <span>NT $ 500</span>
              </p>
              <p class="d-flex justify-content-between">
                <span>總計</span>
                <span class="fw-bold">NT $ 4500</span>
              </p>
            </div>
          </div>
        </div>
        <div class="d-grid g-4">
          <button class="btn btn-lg btn-danger rounded-pill" @click="changeCheckouStep">
            送出
          </button>
        </div>
      </div>
      <div class="col-md-4" v-if="checkouStep === 3">
        <div class="card shadow-sm">
          <div class="card-body d-flex flex-column justify-content-center align-items-center">
            <p class="fs-4">購物遇到問題了嗎？</p>
            <router-link to="/contact" class="btn btn-danger rounded-pill py-2 px-4 mt-3">
              聯絡我們</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </article>
</template>
<script>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import Checkout01 from '@/components/checkout/Checkout01.vue';
import Checkout02 from '@/components/checkout/Checkout02.vue';
import Checkout03 from '@/components/checkout/Checkout03.vue';

export default {
  name: 'Checkout',
  components: { Checkout01, Checkout02, Checkout03 },
  setup() {
    const store = useStore();

    const checkouStep = ref(1);
    const order = computed(() => store.state.client.order);

    function useCoupon() {
      order.value.coupon = document.querySelector('.coupon').value;
    }

    function changeCheckouStep() {
      if (checkouStep.value === 1) {
        // 檢查訂單

        checkouStep.value += 1;
      } else if (checkouStep.value === 2) {
        // 送出訂單

        checkouStep.value += 1;
      }
    }

    return {
      checkouStep,
      order,
      useCoupon,
      changeCheckouStep,
    };
  },
};
</script>
<style lang="scss" scoped>
.list-group-item {
  border: 0;
}
</style>
