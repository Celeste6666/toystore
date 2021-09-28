<template>
  <div
    class="modal fade"
    id="ordersModal"
    tabindex="-1"
    aria-labelledby="ordersModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg">
      <div class="modal-content position-relative">
        <div class="modal-body">
          <div class="h2 text-center mb-3">訂單詳細資料</div>
          <div class="container-fluid d-flex flex-column" v-if="order.id">
            <div class="row">
              <div class="col-lg-8">
                <table class="table table-sm align-middle">
                  <tbody>
                    <tr>
                      <th>姓名</th>
                      <td>
                        <img
                          src="https://randomuser.me/api/portraits/women/12.jpg"
                          alt=""
                          class="order-buyer-img me-2 border border-3 rounded-circle"
                        />
                        <span> {{ order.user.name }}</span>
                      </td>
                    </tr>
                    <tr>
                      <th>住址</th>
                      <td>{{ order.user.address }}</td>
                    </tr>
                    <tr>
                      <th>信箱</th>
                      <td>{{ order.user.email }}</td>
                    </tr>
                    <tr>
                      <th>電話</th>
                      <td>{{ order.user.tel }}</td>
                    </tr>
                    <tr>
                      <th>總金額</th>
                      <td>{{ order.amount }}</td>
                    </tr>
                    <tr>
                      <th>折價券代碼</th>
                      <td v-if="order.coupon">{{ order.coupon.code }}</td>
                      <td v-else>{{ '無' }}</td>
                    </tr>
                    <tr>
                      <th>折價券折扣</th>
                      <td v-if="order.coupon">{{ order.coupon.percent }}</td>
                      <td v-else>{{ '無' }}</td>
                    </tr>
                    <tr>
                      <th>免運</th>
                      <td>
                        <i
                          class="bi bi-check2-circle fs-5 text-success"
                          :class="[
                            order.amount > 1000 ? 'bi-check2-circle' : 'bi-x-circle',
                            order.amount > 1000 ? ' text-success' : ' text-danger',
                          ]"
                        ></i>
                      </td>
                    </tr>
                    <tr>
                      <th>備註</th>
                      <td>{{ order.message }}</td>
                    </tr>
                    <tr>
                      <th>進度</th>
                      <td>
                        <select
                          class="form-select rounded-0"
                          id="product-type"
                          v-model="order.paid"
                        >
                          <option selected disabled value="">請選擇付款進度</option>
                          <option :value="false">未付款</option>
                          <option :value="true">已付款</option>
                        </select>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="col-lg-4">
                <div class="fw-bold">物品清單</div>
                <ul class="list-unstyled p-2 border border-2 border-dark rounded-1">
                  <li v-for="product of order.products" :key="product.product.id">
                    {{ product.product.title }}*{{ product.quantity }}
                  </li>
                </ul>
                <div class="fw-bold">備註</div>
                <textarea
                  class="form-control border border-2 border-dark"
                  id="exampleFormControlTextarea1"
                  rows="4"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary rounded-0"
            data-bs-dismiss="modal"
          >
            關閉
          </button>
          <button
            type="button"
            class="btn btn-info rounded-0"
            @click.prevent="changeOrder"
            data-bs-dismiss="modal"
          >
            儲存
          </button>
        </div>
        <Loading v-show="isLoading" />
      </div>
    </div>
  </div>
</template>
<script>
import { useStore } from 'vuex';
import { ref, toRefs, reactive, watch } from 'vue';
import Loading from '@/components/general/Loading.vue';

export default {
  name: 'OrderModal',
  components: {
    Loading,
  },
  props: {
    orderId: String,
  },
  setup(props) {
    const store = useStore();
    const { orderId } = toRefs(props);
    const order = reactive({
      paid: false,
    });
    const isLoading = ref(false);

    // 當傳進來的 orderId 發生變化，就透過 API 得到詳細訂單資料
    watch(orderId, async () => {
      isLoading.value = true;
      const orderResponse = await store.dispatch('getAdminSingleOrder', orderId.value);
      Object.keys(orderResponse.data).forEach((key) => {
        order[key] = orderResponse.data[key];
      });
      isLoading.value = false;
    });

    async function changeOrder() {
      if (order.paid) {
        await store.dispatch('changeAdminOrderPaid', orderId.value);
      } else {
        await store.dispatch('changeAdminOrderUnpaid', orderId.value);
      }
      await store.dispatch('getAdminOrders');
      await store.dispatch('getAdminCurrentOrders');
    }

    return {
      order,
      isLoading,
      changeOrder,
    };
  },
};
</script>
<style lang="scss" scoped>
.order {
  &-buyer-img {
    width: 40px;
    height: 40px;
    object-fit: contain;
  }
}
</style>
