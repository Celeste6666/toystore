<template>
  <div class="login d-flex flex-column justify-content-center align-items-center">
    <component :is="currentLoginTab" />
  </div>
</template>
<script>
import { useStore } from 'vuex';
import { computed } from 'vue';
import LoginArea from '@/components/login/LoginArea.vue';
import RegisArea from '@/components/login/RegisArea.vue';

export default {
  name: 'Login',
  components: { LoginArea, RegisArea },
  setup() {
    const store = useStore();
    const currentLoginTab = computed(() => store.state.currentLoginTab);
    return {
      currentLoginTab,
    };
  },
};
</script>
<style lang="scss" scoped>
.login {
  max-width: 100vw;
  height: 100vh;
  background-attachment: fixed;
  background-image: url('../../assets/fronted/home04.jpg');
  background-size: cover;
}
</style>
