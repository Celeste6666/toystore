<template>
  <div
    class="modal fade"
    id="AdminModal"
    tabindex="-1"
    aria-labelledby="AdminModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-body">
          <div class="container-fluid d-flex flex-column">
            <div class="row" v-if="$route.name == 'Photos'">
              <div class="col-md-6">
                <img
                  src=""
                  class="align-self-center border border-3 p-2 rounded-circle new-photo"
                  alt=""
                  loading="lazy"
                />
              </div>
              <div class="col-md-6">
                <div class="mb-3 text-center">
                  <input
                    class="form-control form-control-sm mt-4"
                    type="file"
                    @change="getImage"
                  />
                  <small>請上傳正確圖片</small>
                </div>
              </div>
            </div>
            <form
              class="needs-validation mt-4"
              novalidate
              v-if="$route.name == 'Coupons'"
            >
              <label for="coupon-id" class="form-label fw-bolder">優惠券代碼</label>
              <input
                type="text"
                class="form-control"
                id="coupon-id"
                v-model="code"
                disabled
              />
              <div class="my-2">
                <label for="coupon-type" class="form-label fw-bolder">適用玩具類型</label>
                <select
                  class="form-select rounded-0"
                  id="coupon-type"
                  required
                  v-model="title"
                >
                  <option selected disabled value="">請選擇正確類型</option>
                  <option value="全部品項">全部品項</option>
                  <option value="絨毛玩具">絨毛玩具</option>
                  <option value="木製玩具">木製玩具</option>
                  <option value="樂高玩具">樂高玩具</option>
                </select>
              </div>
              <div class="my-2">
                <label for="coupon-now-price" class="form-label fw-bolder">折扣(%)</label>
                <input
                  type="text"
                  class="form-control"
                  id="coupon-now-price"
                  required
                  v-model="percent"
                />
              </div>
              <div class="my-2">
                <label for="coupon-date-end" class="form-label fw-bolder">到期日</label>
                <input
                  type="datetime-local"
                  class="form-control"
                  id="coupon-now-price"
                  @change="changeDeadline"
                  required
                />
              </div>
            </form>
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
            @click.prevent="add"
            data-bs-dismiss="modal"
          >
            儲存
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { reactive, toRefs, watchEffect } from 'vue';

export default {
  name: 'AdminModal',
  props: {
    couponId: String,
  },
  setup(props) {
    const store = useStore();
    const router = useRouter();
    const { couponId } = toRefs(props);
    const currentEditCoupon = reactive({
      id: '',
      title: '',
      code: '',
      percent: 0,
      enabled: false,
      deadline_at: '',
    });

    watchEffect(() => {
      if (couponId.value) {
        const coupon = store.getters.currentEditCoupon(couponId.value);
        const keys = Object.keys(currentEditCoupon);
        keys.forEach((key) => {
          currentEditCoupon[key] = coupon[key];
        });
        currentEditCoupon.deadline_at = coupon.deadline.datetime;
      }
    });

    // 變更時間格式
    function changeDeadline() {
      currentEditCoupon.deadline_at = new Date(
        document.querySelector('input[type="datetime-local"]').value,
      )
        .toLocaleString('zh-tw', {
          hour12: false,
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })
        .replaceAll(/\//g, '-');
    }

    async function add() {
      if (router.currentRoute.value.name === 'Photos') {
        const formData = new FormData();
        formData.append('file', document.querySelector('input[type="file"]').files[0]);
        await store.dispatch('addImage', formData);
      } else if (router.currentRoute.value.name === 'Coupons') {
        if (!currentEditCoupon.id) {
          // 新增
          const randomCode = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
          for (let i = 1; i <= 8; i += 1) {
            currentEditCoupon.code +=
              randomCode[Math.floor(Math.random() * randomCode.length)];
          }
          await store.dispatch('addAdminCoupon', currentEditCoupon);
        } else {
          await store.dispatch('editAdminCoupon', currentEditCoupon);
        }
      }
    }
    return {
      ...toRefs(currentEditCoupon),
      add,
      changeDeadline,
    };
  },
  methods: {
    // 選取圖片後預覽圖片
    getImage(e) {
      const img = document.querySelector('.new-photo');
      img.src = URL.createObjectURL(e.target.files[0]);
      img.onload = function () {
        URL.revokeObjectURL(this.src);
      };
    },
  },
};
</script>
<style lang="scss" scoped>
.new-photo {
  width: 120px;
  height: 120px;
}
</style>
