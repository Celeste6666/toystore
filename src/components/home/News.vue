<template>
  <section class="news mt-6">
    <div class="h1 text-center mb-5">最新消息</div>
    <div class="row g-5">
      <div class="col">
        <ul class="fs-5">
          <li>
            <router-link to="/about"
            class="btn d-flex flex-nowrap justify-content-between align-items-center">
              <span class="fs-5 text-truncate text-start w-75">訂購疑難排除問題</span>
              <small>2021-08-25</small>
            </router-link>
          </li>
          <li>
            <router-link to="/about"
            class="btn d-flex flex-nowrap justify-content-between align-items-center">
              <span class="fs-5 text-truncate text-start w-75">會員防詐騙權益提醒通知!【提醒您請勿隨意轉帳】</span>
              <small>2021-08-25</small>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="col px-5">
        <img src="../../assets/fronted/home04.jpg" alt="" class="rounded w-100 h-100">
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'LimitedOffer',
};
</script>
