<template>
  <nav aria-label="Page navigation" class="mt-6">
    <ul class="pagination justify-content-end">
      <li class="page-item disabled">
        <a class="page-link fs-5" href="#" tabindex="-1" aria-disabled="true">
          <i class="bi bi-arrow-left-short"></i>
        </a>
      </li>
      <li class="page-item active"><a class="page-link fs-5" href="#">1</a></li>
      <li class="page-item"><a class="page-link fs-5" href="#">2</a></li>
      <li class="page-item"><a class="page-link fs-5" href="#">3</a></li>
      <li class="page-item">
        <a class="page-link fs-5" href="#">
          <i class="bi bi-arrow-right-short"></i>
        </a>
      </li>
    </ul>
  </nav>
</template>
<style lang="scss" scoped>
.page-item {
  &.active {
    font-weight: 900;
  }
}
</style>
