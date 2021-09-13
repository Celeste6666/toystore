<template>
  <section>
    <table class="table text-center align-middle">
      <thead>
        <tr v-if="$route.name == 'Photos'">
          <th scope="col">照片</th>
          <th scope="col" class="w-50">網址</th>
          <th scope="col">編輯</th>
        </tr>
        <tr v-if="$route.name == 'Coupons'">
          <th scope="col">啟用</th>
          <th scope="col">折價券代碼</th>
          <th scope="col">適用產品</th>
          <th scope="col">折扣</th>
          <th scope="col">到期日</th>
          <th scope="col">編輯</th>
        </tr>
      </thead>
      <tbody>
        <template v-if="$route.name == 'Coupons'">
          <tr v-for="coupon of coupons" :key="coupon.id">
            <th scope="row">
              <input class="form-check-input coupon-enabled" type="checkbox" :checked="coupon.enabled" :data-id="coupon.id" @change="editCoupon" />
            </th>
            <td>{{ coupon.code }}</td>
            <td>
              <span class="badge bg-warning text-white">{{ coupon.title }}</span>
            </td>
            <td>{{ coupon.percent }} %</td>
            <td>{{ coupon.deadline.datetime }}</td>
            <td>
              <button class="btn fs-4" @click.prevent="couponId = coupon.id" data-bs-toggle="modal" data-bs-target="#AdminModal">
                <i class="bi bi-pencil-square me-lg-2" @click.prevent="couponId = coupon.id"></i>
              </button>
              <button class="btn fs-4" :data-id="coupon.id" @click.prevent="delete">
                <i class="bi bi-trash" :data-id="coupon.id" @click.stop="delete"></i>
              </button>
            </td>
          </tr>
        </template>
        <template v-if="$route.name == 'Photos'">
          <tr v-for="img of photos" :key="img.id">
            <td scope="col">
              <img :src="img.path" alt="" />
            </td>
            <td scope="col">
              <span class="small text-break">
                {{ img.path }}
              </span>
            </td>
            <td scope="col">
              <button class="btn fs-4" :data-id="img.id" @click.prevent="delete">
                <i class="bi bi-trash" :data-id="img.id" @click.stop="delete"></i>
              </button>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </section>
  <AdminModal :couponId="couponId" />
</template>
<script>
import AdminModal from '@/components/admin/AdminModal.vue';

export default {
  name: 'AdminList',
  components: { AdminModal },
  props: {
    photos: Object,
    coupons: Object,
  },
  data() {
    return {
      couponId: '',
    };
  },
  methods: {
    async editCoupon(e) {
      const editDate = { id: e.target.dataset.id, enabled: document.querySelector('.coupon-enabled').checked };
      this.$store.dispatch('editAdminCoupon', editDate);
    },
    async delete(e) {
      if (this.$route.name === 'Photos') {
        await this.$store.dispatch('deleteAdminImage', e.target.dataset.id);
      }
      if (this.$route.name === 'Coupons') {
        await this.$store.dispatch('deleteAdminCoupon', e.target.dataset.id);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
img {
  width: 80px;
  height: 80px;
}
</style>
