<template>
  <article class="home">
    <Banner />
    <div class="container-lg">
      <Toys title="毛絨玩具" />
      <Toys title="木製玩具" />
      <Toys title="樂高玩具" />
    </div>
    <About />
    <div class="container-lg">
      <News />
    </div>
  </article>
</template>

<script>
// @ is an alias to /src
import Banner from '@/components/home/Banner.vue';
import Toys from '@/components/home/Toys.vue';
import About from '@/components/general/About.vue';
import News from '@/components/home/News.vue';

export default {
  name: 'Home',
  components: {
    Banner,
    Toys,
    About,
    News,
  },
};
</script>
