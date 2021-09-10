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
              <input type="text" class="form-control" id="coupon-id" disabled />

              <div class="my-2">
                <label for="coupon-type" class="form-label fw-bolder">適用玩具類型</label>
                <select class="form-select rounded-0" id="coupon-type" multiple required>
                  <option selected disabled value="">請選擇正確類型</option>
                  <option>1</option>
                  <option>2</option>
                </select>
                <div class="invalid-feedback">請選擇正確類型</div>
              </div>
              <div class="my-2">
                <label for="coupon-now-price" class="form-label fw-bolder">折扣(%)</label>
                <input type="text" class="form-control" id="coupon-now-price" required />
                <div class="invalid-feedback">請給予正確數字(80~95)</div>
              </div>
              <div class="my-2">
                <label for="coupon-date-end" class="form-label fw-bolder">到期日</label>
                <input type="date" class="form-control" id="coupon-now-price" required />
                <div class="invalid-feedback">請輸入到期日期</div>
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
          <button type="button" class="btn btn-info rounded-0" @click.prevent="save">
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
export default {
  name: 'AdminModal',
  setup() {
    const store = useStore();
    const router = useRouter();

    function save() {}

    return {
      save,
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
