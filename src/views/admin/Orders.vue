<template>
  <span class="text-secondary my-3 h6">訂單列表</span>
  <section>
    <ul class="list-group list-unstyled">
      <li class="card border-0 shadow-sm my-2">
        <div class="card-body d-flex align-items-center justify-content-around">
          <span class="order-buyer text-center">
            <img src="https://randomuser.me/api/portraits/women/12.jpg" alt="" class="order-buyer-img border border-3 rounded-circle" />
            <div class="small mt-1">Celeste KUO</div>
          </span>
          <span class="text-center order-price">
            799<br />
            <span class="small text-secondary">購買總價</span>
          </span>
          <span class="text-center order-num">
            15<br />
            <span class="small text-secondary">購買數量</span>
          </span>
          <span class="text-center order-delivery-fee">
            <i class="bi bi-check2-circle fs-5"></i><br />
            <span class="small text-secondary">免運</span>
          </span>
          <span class="text-center order-delivery-fee">
            <i class="bi bi-x-circle fs-5"></i><br />
            <span class="small text-secondary">使用折價券</span>
          </span>
          <span class="text-center order-delivery-fee">
            <i class="bi bi-circle-fill small text-danger"></i>
            未付款<br />
            <span class="small text-secondary">目前進度</span>
          </span>
          <div class="order-edit">
            <button class="btn fs-4" data-bs-toggle="modal" data-bs-target="#ordersModal">
              <i class="bi bi-box-arrow-up-right"></i>
            </button>
          </div>
        </div>
      </li>
    </ul>
  </section>
  <Pagination current-page-function="getAdminCurrentOrders" />
  <OrdersModal />
</template>
<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import OrdersModal from '@/components/admin/OrdersModal.vue';
import Pagination from '@/components/general/Pagination.vue';

export default {
  name: 'Orders',
  components: { OrdersModal, Pagination },
  setup() {
    const store = useStore();
    const adminOrders = computed(() => store.state.currentPageData);
    return {
      adminOrders,
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
