<template>
  <div class="statistic">
    <span class="text-secondary my-3 h6">分析圖表</span>
    <div class="row row-cols-1 row-cols-md-2 g-4 mb-4">
      <div class="col">
        <div class="card border-0 shadow-sm">
          <div class="card-body">
            <h6 class="card-title">每日營收累積</h6>
            <canvas ref="dayIncome"></canvas>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card border-0 shadow-sm">
          <div class="card-body">
            <h6 class="card-title">每月營收累積</h6>
            <p ref="month-income"></p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card border-0 shadow-sm">
          <div class="card-body">
            <h6 class="card-title">日營收成長率</h6>
            <p class="card-text"></p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <div class="card-body border-0 shadow-sm">
            <h6 class="card-title">月營收成長率</h6>
            <p class="card-text"></p>
          </div>
        </div>
      </div>
    </div>

    <div class="row row-cols-1 row-cols-md-3 row-cols-lg-6 g-2 mb-4 text-center">
      <div class="col">
        <div class="card h-100 border-0 shadow-sm">
          <div class="card-body">
            <h6 class="card-title">絨毛玩具<br />種類數</h6>
            <p class="card-text fs-4">10</p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100">
          <div class="card-body">
            <h6 class="card-title">木製玩具<br />種類數</h6>
            <p class="card-text fs-4">20</p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100">
          <div class="card-body">
            <h6 class="card-title">樂高玩具<br />種類數</h6>
            <p class="card-text fs-4">32</p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100">
          <div class="card-body">
            <h6 class="card-title">絨毛玩具<br />總剩餘數</h6>
            <p class="card-text fs-4">44</p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100">
          <div class="card-body">
            <h6 class="card-title">木製玩具<br />總剩餘數</h6>
            <p class="card-text fs-4">5</p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100">
          <div class="card-body">
            <h6 class="card-title">樂高玩具<br />總剩餘數</h6>
            <p class="card-text fs-4">10</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import { computed } from 'vue';
import { useStore } from 'vuex';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

export default {
  name: 'Statistic',
  setup() {
    const store = useStore();
    // 取得每個種類擁有的商品數
  },
};
</script>
<style lang="scss" scoped>
@import '@/scss/main.scss';

.card {
  &-title {
    color: $secondary;
    font-weight: 600;
  }
}
</style>
