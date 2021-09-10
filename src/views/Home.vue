<template>
  <div class="home">
    <Banner />
    <div class="container">
      <Toys title="毛絨玩具" />
      <Toys title="木製玩具" />
      <Toys title="樂高玩具" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from '@/components/home/Banner.vue';
import Toys from '@/components/home/Toys.vue';

export default {
  name: 'Home',
  components: {
    Banner,
    Toys,
  },
};
</script>
