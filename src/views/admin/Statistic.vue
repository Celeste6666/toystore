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
            <canvas ref="monthIncome"></canvas>
          </div>
        </div>
      </div>
    </div>

    <div class="row row-cols-1 row-cols-md-3 row-cols-lg-6 g-2 mb-4 text-center">
      <div class="col" v-for="(typeNum, typeName) in categoryNum" :key="typeName">
        <div class="card h-100 border-0 shadow-sm">
          <div class="card-body">
            <h6 class="card-title">{{ typeName }}<br />種類數</h6>
            <p class="card-text fs-4">{{ typeNum }}</p>
          </div>
        </div>
      </div>
      <div class="col" v-for="(typeNum, typeName) in categoryRestTotal" :key="typeName">
        <div class="card h-100">
          <div class="card-body">
            <h6 class="card-title">{{ typeName }}<br />總剩餘數</h6>
            <p class="card-text fs-4">{{ typeNum }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, computed, watch } from 'vue';
import { useStore } from 'vuex';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

export default {
  name: 'Statistic',
  setup() {
    const store = useStore();
    const dayIncome = ref(null);
    const monthIncome = ref(null);

    // 取得每個種類擁有的商品數
    const categoryNum = computed(() => store.getters.categoryNum);
    const categoryRestTotal = computed(() => store.getters.categoryRestTotal);

    // chart
    const order = computed(() => store.state.admin.ordersList);
    watch(order, () => {
      const month = new Date().getMonth();
      const year = new Date().getFullYear();
      console.log(year);

      // 日營收
      const dayIncomeLabel = Array.from({ length: 31 }, (v, i) => i + 1);
      const dayIncomeData = dayIncomeLabel.map((date) => store.getters.dayIncome(month, date));
      const dayIncomeChart = new Chart(dayIncome.value, {
        type: 'line',
        data: {
          labels: dayIncomeLabel,
          datasets: [
            {
              label: `${month + 1}月 日營收`,
              backgroundColor: '#a5c926',
              borderColor: '#a5c926',
              borderJoinStyle: 'bevel',
              tension: 0.2,
              data: dayIncomeData,
            },
          ],
        },
      });

      // 月營收
      const monthIncomeLabel = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ];
      // eslint-disable-next-line
      const monthIncomeData = monthIncomeLabel.map((month, index) => store.getters.monthIncome(index));
      const monthIncomeChart = new Chart(monthIncome.value, {
        type: 'line',
        data: {
          labels: monthIncomeLabel,
          datasets: [
            {
              label: `${year}年 月營收`,
              backgroundColor: '#4ba6f5',
              borderColor: '#4ba6f5',
              borderJoinStyle: 'bevel',
              tension: 0.2,
              data: monthIncomeData,
            },
          ],
        },
      });
      console.log(dayIncomeChart, monthIncomeChart);
    });

    return {
      dayIncome,
      monthIncome,
      categoryNum,
      categoryRestTotal,
    };
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
