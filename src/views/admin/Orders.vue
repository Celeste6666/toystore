<template>
  <span class="text-secondary my-3 h6">訂單列表</span>
  <section>
    <ul class="list-group list-unstyled">
      <li
        class="card border-0 shadow-sm my-2"
        v-for="order of adminOrders"
        :key="order.id"
      >
        <div class="card-body d-flex align-items-center justify-content-around">
          <span class="order-buyer text-center">
            <img
              src="https://randomuser.me/api/portraits/women/12.jpg"
              alt=""
              class="order-buyer-img border border-3 rounded-circle"
            />
            <div class="small mt-1">Celeste KUO</div>
          </span>
          <span class="text-center order-price">
            {{ order.amount }}<br />
            <span class="small text-secondary">購買總價</span>
          </span>
          <span class="text-center order-num">
            {{ order.products.length }}<br />
            <span class="small text-secondary">購買總類</span>
          </span>
          <span class="text-center order-delivery-fee">
            <i
              class="bi fs-5"
              :class="[order.amount > 1000 ? 'bi-check2-circle' : 'bi-x-circle']"
            ></i
            ><br />
            <span class="small text-secondary">免運</span>
          </span>
          <span class="text-center order-delivery-fee">
            <i
              class="bi fs-5"
              :class="[order.coupon === null ? 'bi-x-circle' : 'bi-check2-circle']"
            ></i
            ><br />
            <span class="small text-secondary">使用折價券</span>
          </span>
          <span class="text-center order-delivery-fee">
            <i
              class="bi bi-circle-fill small"
              :class="[order.paid ? 'text-success' : 'text-danger']"
            ></i>
            {{ order.paid ? '已付款' : '未付款' }}<br />
            <span class="small text-secondary">目前進度</span>
          </span>
          <div class="order-edit">
            <button
              class="btn fs-4"
              @click.prevent="changeOrderId(order.id)"
              data-bs-toggle="modal"
              data-bs-target="#ordersModal"
            >
              <i
                class="bi bi-box-arrow-up-right"
                @click.prevent="changeOrderId(order.id)"
              ></i>
            </button>
          </div>
        </div>
      </li>
    </ul>
  </section>
  <Pagination current-page-function="getAdminCurrentOrders" />
  <OrdersModal :orderId="orderId" />
</template>
<script>
import { computed, ref, watch } from 'vue';
import { useStore } from 'vuex';
import OrdersModal from '@/components/admin/OrdersModal.vue';
import Pagination from '@/components/general/Pagination.vue';

export default {
  name: 'Orders',
  components: {
    OrdersModal,
    Pagination,
  },
  setup() {
    const store = useStore();
    const adminOrders = computed(() => store.state.currentPageData);
    const orderId = ref('');

    watch(adminOrders, () => {
      adminOrders.value.forEach((order) => {
        if (order.coupon) {
          const orderItem = order;
          const discountList = order.products.filter(
            (item) => item.product.category === order.coupon.title,
          );
          let discountTotal = 0;
          discountList.forEach((item) => {
            discountTotal += item.product.price * item.quantity;
          });
          orderItem.amount =
            discountTotal - Math.round(discountTotal * (1 - order.coupon.percent / 100));
        }
      });
    });

    function changeOrderId(id) {
      orderId.value = id;
    }

    return {
      adminOrders,
      orderId,
      changeOrderId,
    };
  },
};
</script>
<style lang="scss" scoped>
.order {
  &-buyer-img {
    width: 50px;
    height: 50px;
  }
}
.small {
  font-size: 12px;
}
</style>
