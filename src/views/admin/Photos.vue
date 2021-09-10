<template>
  <span class="text-secondary my-3 h6">圖片列表</span>
  <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#AdminModal">
    <i class="bi bi-file-earmark-plus-fill text-danger fs-3"></i>
  </button>
  <section>
    <AdminList :photos="adminImages" />
  </section>
  <AdminModal />
</template>
<script>
import { useStore } from 'vuex';
import { computed } from 'vue';
import AdminList from '@/components/admin/AdminList.vue';
import AdminModal from '@/components/admin/AdminModal.vue';

export default {
  name: 'Coupons',
  components: { AdminList, AdminModal },
  setup() {
    const store = useStore();
    const adminImages = computed(() => store.state.admin.photosList);

    return {
      adminImages,
    };
  },
};
</script>
