<template>
  <Loading v-show="isLoading" />
  <router-view v-show="!isLoading" />
</template>
<script>
import { mapState } from 'vuex';
import Loading from '@/components/general/Loading.vue';

export default {
  name: 'Main',
  components: {
    Loading,
  },
  computed: {
    ...mapState([
      // map this.count to store.state.count
      'isLoading',
    ]),
  },
  watch: {
    // 讓頁面跳轉時，先清空 CurrentPage 的資料，避免跳轉後的頁面拿跳轉前資料去做渲染(error)
    $route() {
      this.$store.commit('getCurrentPage', {
        data: [],
        meta: {
          pagination: {
          },
        },
      });
    },
  },
};
</script>
