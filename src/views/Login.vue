<template>
  <div class="login d-flex flex-column justify-content-center align-items-center">
    <component :is="currentTab"></component>
  </div>
</template>
<script>
import LoginArea from '../components/login/LoginArea.vue';
import RegisArea from '../components/login/RegisArea.vue';

export default {
  name: 'login',
  components: { LoginArea, RegisArea },
  data() {
    return {
    };
  },
  computed: {
    currentTab() {
      return this.$store.state.loginTab;
    },
  },
};
</script>
<style lang="scss" scoped>
.login{
  max-width: 100vw;
  height: 100vh;
  background-attachment: fixed;
  background-image: url('../assets/fronted/home03.jpg');
  background-size: cover;
}
</style>
