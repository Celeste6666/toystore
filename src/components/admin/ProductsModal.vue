<template>
  <div
    class="modal fade"
    id="productModal"
    tabindex="-1"
    aria-labelledby="productModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-body">
          <div class="container-fluid d-flex flex-column">
            <img
              :src="currentEditProduct.imageUrl[0]"
              class="align-self-center border border-3 p-2 rounded-circle new-product-img"
              alt=""
              loading="lazy"
            />
            <div class="mb-3 w-50 mx-auto text-center">
              <input
                class="form-control form-control-sm mt-4 file-upload"
                type="file"
                name="file"
                @change="getImage"
              />
              <small>請上傳正確圖片</small>
            </div>
            <form class="row g-3 needs-validation mt-4" novalidate>
              <div class="col-md-6">
                <label for="product-name" class="form-label fw-bolder">玩具名</label>
                <input
                  type="text"
                  class="form-control"
                  id="product-name"
                  v-model="currentEditProduct.title"
                  required
                />
                <div class="valid-feedback">Looks good!</div>
              </div>
              <div class="col-md-6">
                <label for="product-type" class="form-label fw-bolder">玩具類型</label>
                <select
                  class="form-select rounded-0"
                  id="product-type"
                  required
                  v-model="currentEditProduct.category"
                >
                  <option selected disabled value="">請選擇正確類型</option>
                  <option value="絨毛玩具">絨毛玩具</option>
                  <option value="木製玩具">木製玩具</option>
                  <option value="樂高玩具">樂高玩具</option>
                </select>
                <div class="invalid-feedback">請選擇正確類型</div>
              </div>
              <div class="col-12">
                <label for="product-description" class="form-label fw-bolder"
                  >玩具簡述</label
                >
                <input
                  v-model="currentEditProduct.content"
                  type="text"
                  class="form-control"
                  id="product-description"
                  required
                />
                <div class="valid-feedback">Looks good!</div>
              </div>
              <div class="col-md-4">
                <label for="product-origin-price" class="form-label fw-bolder"
                  >原價</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="product-origin-price"
                  required
                  v-model.number="currentEditProduct.origin_price"
                />
                <div class="invalid-feedback">請給予正確價格</div>
              </div>
              <div class="col-md-4">
                <label for="product-now-price" class="form-label fw-bolder">售價</label>
                <input
                  type="text"
                  class="form-control"
                  id="product-now-price"
                  v-model.number="currentEditProduct.price"
                  required
                />
                <div class="invalid-feedback">請給予正確價格</div>
              </div>
              <div class="col-md-4">
                <label for="product-now-price" class="form-label fw-bolder"
                  >目前數量</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="product-now-price"
                  required
                  v-model.number="currentEditProduct.options.quantity"
                />
                <div class="invalid-feedback">目前數量</div>
              </div>
              <div class="col-md-4">
                <label for="product-length" class="form-label fw-bolder">商品長</label>
                <input
                  type="text"
                  class="form-control"
                  id="product-length"
                  required
                  v-model.number="currentEditProduct.options.length"
                />
                <div class="invalid-feedback">請輸入正確長度</div>
              </div>
              <div class="col-md-4">
                <label for="product-width" class="form-label fw-bolder">商品寬</label>
                <input
                  type="text"
                  class="form-control"
                  id="product-width"
                  required
                  v-model.number="currentEditProduct.options.width"
                />
                <div class="invalid-feedback">請輸入正確寬度</div>
              </div>
              <div class="col-md-4">
                <label for="product-height" class="form-label fw-bolder">商品高</label>
                <input
                  type="text"
                  class="form-control"
                  id="product-height"
                  required
                  v-model.number="currentEditProduct.options.height"
                />
                <div class="invalid-feedback">請輸入正確高度</div>
              </div>
              <div class="col-12">
                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label fw-bolder"
                    >商品詳述</label
                  >
                  <textarea
                    v-model="currentEditProduct.description"
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></textarea>
                </div>
              </div>
              <div class="col-12 form-check">
                <label class="form-check-label text-danger">上架</label>
                <input
                  class="form-check-input border-danger text-danger"
                  type="checkbox"
                  v-model="currentEditProduct.enabled"
                />
              </div>
            </form>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary rounded-0"
            @click.prevent="deleteCurrentEditProduct"
            data-bs-dismiss="modal"
          >
            關閉
          </button>
          <button
            type="submit"
            class="btn btn-info rounded-0"
            data-bs-dismiss="modal"
            @click.prevent="addProduct"
          >
            儲存
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { reactive, toRef, watchEffect } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'ProductsModal',
  props: {
    productId: String,
  },
  setup(props) {
    const store = useStore();
    const productId = toRef(props, 'productId');

    const currentEditProduct = reactive({
      id: '',
      title: '',
      category: '',
      content: '',
      description: '',
      imageUrl: ['@/assets/admin/default.jpg'],
      enabled: true,
      origin_price: 0,
      price: 0,
      options: {
        quantity: 0,
        width: 0,
        height: 0,
        length: 0,
      },
    });
    function deleteCurrentEditProduct() {
      const product = reactive({
        id: '',
        title: '',
        category: '',
        content: '',
        description: '',
        imageUrl: ['@/assets/admin/default.jpg'],
        enabled: true,
        origin_price: 0,
        price: 0,
        options: {
          quantity: 0,
          width: 0,
          height: 0,
          length: 0,
        },
      });
      const keys = Object.keys(currentEditProduct);
      keys.forEach((key) => {
        currentEditProduct[key] = product[key];
      });
      // 清空 currentEditProduct 內的資料
    }

    watchEffect(async () => {
      if (productId.value === 'add') {
        deleteCurrentEditProduct();
      } else {
        const product = await store.dispatch('getAdminSingleProduct', productId.value);
        const keys = Object.keys(currentEditProduct);
        keys.forEach((key) => {
          currentEditProduct[key] = product[key];
        });
      }
    });
    // 按下儲存，透過currentEditProduct.id判斷是編輯還是新增
    async function addProduct() {
      if (currentEditProduct.id) {
        // 編輯產品
        console.log(currentEditProduct);
        await store.dispatch('editProduct', currentEditProduct);
      } else {
        // 新增產品
        // 儲存後，先將圖片上傳到資料庫，
        // 之後取得資料庫裡的圖片網址再帶入 currentEditProduct.imageUrl內
        const formData = new FormData();
        formData.append('file', document.querySelector('.file-upload').files[0]);
        const imgResponse = await store.dispatch('addImage', formData);
        currentEditProduct.imageUrl[0] = imgResponse.data.path;
        await store.dispatch('addAdminProduct', currentEditProduct);
      }
    }

    return {
      currentEditProduct,
      addProduct,
    };
  },
  methods: {
    // 選取圖片後預覽圖片
    getImage(e) {
      const img = document.querySelector('.new-product-img');
      img.src = URL.createObjectURL(e.target.files[0]);
      img.onload = function () {
        URL.revokeObjectURL(this.src);
      };
    },
  },
};
</script>
<style lang="scss" scoped>
.new-product-img {
  width: 120px;
  height: 120px;
  object-fit: cover;
}
</style>
