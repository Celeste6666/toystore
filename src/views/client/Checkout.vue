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
          <div class="card-body px-0 position-relative">
            <div
              class="h5 py-4 px-5 border-bottom d-flex justify-content-between align-items-center"
            >
              <span>購物車清單</span>
              <button class="btn btn-lg" @click.prevent="deleteCarts">
                <i class="bi bi-trash" @click.stop="deleteCarts"></i>
              </button>
            </div>
            <ul class="list-group px-3" v-if="carts">
              <li
                class="list-group-item d-flex justify-content-between align-items-center small my-2"
                v-for="cart of carts"
              >
                <img :src="cart.product.imageUrl[0]" class="w-25" />
                <span class="px-3">
                  <div class="fw-bolder">{{ cart.product.title }}</div>
                  <div>
                    <label>
                      數量：
                      <input
                        type="text"
                        class="form-control form-control-sm w-50 text-center d-inline"
                        v-model="cart.quantity"
                        @change="changeCartQuantity(cart.product.id, cart.quantity)"
                      />
                    </label>
                  </div>
                </span>
                <span class="w-50">
                  $
                  {{ new Intl.NumberFormat().format(cart.product.price * cart.quantity) }}
                </span>
                <button
                  class="btn btn-sm"
                  @click.prevent="deleteCartProduct(cart.product.id)"
                >
                  <i
                    class="bi bi-trash"
                    @click.stop="deleteCartProduct(cart.product.id)"
                  ></i>
                </button>
              </li>
            </ul>
            <Loading v-show="isLoading" />
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
                  v-model="order.coupon"
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
                <span>NT $ {{ new Intl.NumberFormat().format(orderTotal) }}</span>
              </p>
              <p class="d-flex justify-content-between">
                <span>折抵金額</span>
                <span>NT $ {{ new Intl.NumberFormat().format(discount) }}</span>
              </p>
              <p class="d-flex justify-content-between">
                <span>總計</span>
                <span class="fw-bold"
                  >NT $ {{ new Intl.NumberFormat().format(orderTotal - discount) }}</span
                >
              </p>
            </div>
          </div>
        </div>
        <div class="d-grid g-4">
          <button
            class="btn btn-lg btn-danger rounded-pill"
            :class="{
              disabled:
                !carts.length ||
                !order.email ||
                !order.name ||
                !order.tel ||
                !order.address ||
                !order.payment,
            }"
            @click="changeCheckouStep"
          >
            送出
          </button>
        </div>
      </div>
      <div class="col-md-4" v-if="checkouStep === 3">
        <div class="card shadow-sm">
          <div
            class="card-body d-flex flex-column justify-content-center align-items-center"
          >
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
import { useStore } from 'vuex';
import { computed, ref } from 'vue';
import Checkout01 from '@/components/checkout/Checkout01.vue';
import Checkout02 from '@/components/checkout/Checkout02.vue';
import Checkout03 from '@/components/checkout/Checkout03.vue';
import Loading from '@/components/general/Loading.vue';

export default {
  name: 'Checkout',
  components: {
    Checkout01,
    Checkout02,
    Checkout03,
    Loading,
  },
  setup() {
    const store = useStore();
    const carts = computed(() => store.state.client.cartsList);
    const orderTotal = computed(() => {
      let total = 0;
      store.state.client.cartsList.forEach((cart) => {
        total += cart.product.price * cart.quantity;
      });
      return total;
    });

    const isLoading = ref(false);

    //  訂單資料
    const order = computed(() => store.state.client.order);

    const discount = ref(0);

    async function useCoupon() {
      console.log(order.value.coupon);
      if (order.value.coupon === undefined || order.value.coupon === '') {
        discount.value = 0;
      } else {
        const res = await fetch(`${store.getters.client}/coupon/search`, {
          method: 'POST',
          headers: store.getters.requestHeaders,
          body: JSON.stringify({
            code: order.value.coupon,
          }),
        });
        const coupon = await res.json();
        const discountList = carts.value.filter((cart) => {
          if (coupon.data.title === '全部品項') {
            return cart;
          }
          return cart.product.category === coupon.data.title;
        });
        let discountTotal = 0;
        discountList.forEach((item) => {
          discountTotal += item.product.price * item.quantity;
        });
        discount.value = Math.round(discountTotal * (1 - coupon.data.percent / 100));
      }
    }

    // 目前訂單進行到哪一步
    const checkouStep = ref(1);
    async function changeCheckouStep() {
      if (checkouStep.value === 1) {
        // 檢查訂單
        checkouStep.value += 1;
      } else if (checkouStep.value === 2) {
        // 送出訂單
        store.commit('changeIsLoading');
        const res = await store.dispatch('postOrder');
        if (res.ok) {
          checkouStep.value += 1;
        }
        store.commit('changeIsLoading');
      }
    }

    // 刪除整個購物車
    async function deleteCarts() {
      isLoading.value = true;
      await store.dispatch('deleteCarts');
      isLoading.value = false;
    }

    // 刪除某筆購物車產品
    async function deleteCartProduct(id) {
      isLoading.value = true;
      await store.dispatch('deleteCartProduct', id);
      isLoading.value = false;
    }

    // 訂單數量發生變化
    async function changeCartQuantity(id, quantity) {
      if (quantity > 0) {
        isLoading.value = true;
        await store.dispatch('editCart', {
          product: id, quantity,
        });
        isLoading.value = false;
      } else {
        deleteCartProduct(id);
      }
    }

    return {
      checkouStep,
      order,
      carts,
      orderTotal,
      isLoading,
      useCoupon,
      changeCheckouStep,
      changeCartQuantity,
      deleteCarts,
      deleteCartProduct,
      discount,
    };
  },
};
</script>
<style lang="scss" scoped>
.list-group-item {
  border: 0;
}
</style>
