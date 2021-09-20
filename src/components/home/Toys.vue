<template>
  <section class="toys pt-5">
    <div class="d-flex justify-content-between align-items-center toys-header">
      <div class="h1" v-if="$route.path == '/'">{{ title }}</div>
      <div class="h1" v-if="$route.name == 'Product'">你可能會喜歡</div>
      <router-link to="/catalog" class="btn">
        <p class="fs-6 border-bottom border-2">
          所有商品
          <i class="bi bi-arrow-right-short"></i>
        </p>
      </router-link>
    </div>
    <div class="toys-items py-5">
      <div class="row row-cols-1 row-cols-md-4 g-4 mt-1">
        <div class="col" v-for="toy of toys" :key="toy.id">
          <router-link
            :to="{ name: 'Product', params: { id: toy.id } }"
            class="card h-100 py-5 d-flex flex-column align-items-center text-dark text-decoration-none"
          >
            <img :src="toy.imageUrl[0]" class="card-img-top h-50" alt="" />
            <div class="card-body pt-5">
              <h5 class="card-title text-center">{{ toy.title }}</h5>
              <p class="btn btn-success btn-sm rounded-pill px-3">NT $ {{ toy.price }}</p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'Toys',
  props: {
    title: String,
    id: '',
  },
  setup(props) {
    const store = useStore();

    const toys = computed(() => store.state.client.productsList[props.title].slice(0, 4));

    return {
      toys,
    };
  },
};
</script>
<style lang="scss" scoped>
@import '@/scss/main.scss';
.toys {
  &-header {
    position: relative;
    &::after {
      content: '';
      position: absolute;
      bottom: -20px;
      left: 0;
      width: 100%;
      height: 3px;
      background: linear-gradient(to right, $success 0%, $success 12%, #e5e5e5 12%, #e5e5e5 100%);
    }
    & i {
      position: relative;
      animation: arrowMove 0.8s linear infinite;
    }
  }
}
@keyframes arrowMove {
  0% {
    left: -5px;
  }
  100% {
    left: 5px;
  }
}

.card {
  transition: transform 0.3s;
  border: 0;
  box-shadow: 0 2px 4px 0px #e3e3e3;
  transform: scale(0.95);
  &-img-top {
    max-width: 150px;
  }
  &:hover {
    transform: scale(1);
    box-shadow: 0 2px 10px 0px #e3e3e3, 0 2px 20px 0px #e3e3e3;
  }
}
</style>
