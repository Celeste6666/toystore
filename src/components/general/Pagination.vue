<template>
  <nav aria-label="Page navigation" class="mt-6">
    <ul class="pagination justify-content-end">
      <li :class="['page-item', pagination.current_page === 1 ? 'disabled' : '']">
        <a class="page-link fs-5" @click.prevent="changePage(pagination.current_page - 1)">
          <i
            class="bi bi-arrow-left-short"
            @click.prevent="changePage(pagination.current_page - 1)"
          ></i>
        </a>
      </li>
      <li
        v-for="page of pagination.total_pages"
        :key="page"
        :class="['page-item', pagination.current_page === page ? 'active' : '']"
      >
        <a class="page-link fs-5" @click.prevent="changePage(page)">{{ page }}</a>
      </li>
      <li
        :class="['page-item', pagination.current_page === pagination.total_pages ? 'disabled' : '']"
      >
        <a class="page-link fs-5" href="#" @click.prevent="changePage(pagination.current_page + 1)">
          <i
            class="bi bi-arrow-right-short"
            @click.prevent="changePage(pagination.current_page + 1)"
          ></i>
        </a>
      </li>
    </ul>
  </nav>
</template>
<script>
import { computed, watch } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'Pagination',
  props: {
    currentPageFunction: String,
    currentCategory: String,
  },
  setup(props) {
    const store = useStore();

    async function changePage(page = 1) {
      if (props.currentCategory !== '所有玩具' && props.currentCategory !== undefined) {
        await store.dispatch(props.currentPageFunction, {
          page,
          category: props.currentCategory,
        });
      } else {
        await store.dispatch(props.currentPageFunction, page);
      }
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
    changePage(1);

    watch(props, () => {
      changePage(1);
    });

    const pagination = computed(() => store.state.currentPagination);

    return {
      pagination,
      changePage,
    };
  },
};
</script>
<style lang="scss" scoped>
.page-item {
  &:hover {
    cursor: pointer;
  }
  &.active {
    font-weight: 900;
  }
}
</style>
