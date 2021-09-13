<template>
  <span class="text-secondary my-3 h6">優惠券列表</span>
  <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#AdminModal">
    <i class="bi bi-bag-plus-fill text-danger fs-3"></i>
  </button>
  <section>
    <AdminList :coupons="adminCoupons" />
  </section>
  <Pagination current-page-function="getAdminCurrentCoupons" />
  <AdminModal />
</template>
<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import AdminList from '@/components/admin/AdminList.vue';
import AdminModal from '@/components/admin/AdminModal.vue';
import Pagination from '@/components/general/Pagination.vue';

export default {
  name: 'Coupons',
  components: { AdminList, AdminModal, Pagination },
  setup() {
    const store = useStore();
    const adminCoupons = computed(() => store.state.currentPageData);
    return {
      adminCoupons,
    };
  },
};
</script>
