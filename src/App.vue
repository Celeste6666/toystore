<template>
  <router-view />
</template>
<script>
export default {
  name: 'Main',
  watch: {
    // 讓頁面跳轉時，先清空 CurrentPage 的資料，避免跳轉後的頁面拿跳轉前資料去做渲染(error)
    $route() {
      this.$store.commit('getCurrentPage', {
        data: [],
        meta: {
          pagination: {},
        },
      });
    },
  },
};
</script>
