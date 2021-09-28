<template>
  <article class="product container-lg my-5">
    <nav aria-label="breadcrumb" class="mb-6">
      <ol class="breadcrumb py-2 px-4 border border-2 rounded-pill">
        <li class="breadcrumb-item">首頁</li>
        <li class="breadcrumb-item" aria-current="page">產品目錄</li>
        <li class="breadcrumb-item" aria-current="page">{{ product.title }}</li>
      </ol>
    </nav>
    <div class="card p-5 mb-6" v-if="product.id">
      <div class="row px-6">
        <div class="col-md-6 order-md-1 order-2">
          <div class="card-body">
            <h1 class="mb-4">{{ product.title }}</h1>
            <p class="fs-5 text-muted pe-6">
              {{ product.description }}
            </p>
            <p class="fs-3 text-success pe-6">
              NT $ {{ new Intl.NumberFormat().format(product.price) }}
            </p>
            <input
              type="text"
              class="form-control border border-2 bg-light rounded-pill px-3 py-2 fs-5 w-25 text-center mb-3"
              v-model.number="orderNum"
            />
            <button
              class="btn btn-lg btn-danger px-3 py-2 rounded-pill me-2"
              @click.prevent="addToCart"
            >
              加入購物車
            </button>
            <button
              class="btn btn-lg btn-outline-secondary border border-2 px-3 py-2 rounded-pill"
              @click.prevent="buyNow"
            >
              馬上購買
            </button>
          </div>
        </div>
        <div class="col-md-6 order-md-2 order-1 d-flex align-items-center">
          <img :src="product.imageUrl[0]" class="img-fluid" />
        </div>
      </div>
      <div class="px-6 mt-6">
        <p class="productInfo h5 mb-6">產品介紹</p>
        <div class="row g-5">
          <div class="col-md-6">
            <p class="h3">購物須知</p>
            <p class="lh-lg">
              訂購付款後依照訂單順序現貨商品約3~5個工作天出貨，
              客製化商品約18個工作天出貨，國內地區出貨後2~4天內送達；
              國外地區2~7天送達。(配送時間皆不包含例假日以及國定假日)
              ANVI部份產品組裝與配件供應鏈來自海外，
              由於COVID-19疫情之影響，如過程中遇到班機縮減、
              通關抽檢可能導致商品配送延遲7~14個工作天(含出貨作業時間)，
              若您的訂單有上述之情形影響，我們將會提前以Email通知，
              造成您的不便敬請見諒。請理解後再下單。 (客製化商品下單後即無法退換貨)
            </p>
            <p class="h3 mt-5">訂單取消/退貨須知</p>
            <p class="lh-lg">
              依照消費者保護法第19條規定：：
              為維護消費者權益，線上購物的消費者均享有商品到貨七天內猶豫期的服務，您享有商品到貨七天猶豫期隨時解約退貨之權益。
              若您購買的是預購商品，因需與廠商特別訂購，當已與廠商訂購並進行發貨事宜，則無法受理訂單取消作業。訂單購買者不得以任何理由要求辦理退貨退款，本站購物均不受理並拒絕接受您的退貨退款要求。
            </p>
            <p class="lh-lg text-danger">
              提醒您： 商品退貨時必須為全新狀態且完整包裝 (
              包含商品主體、附件、內外包裝、隨附文件、贈品等），故需請您保持商品、附件、包裝、廠商紙箱及所有隨附文件資料的完整，以寄送時的包裝再原封備妥，若有相關贈品請一併退回，原廠外盒損毀、商品缺件或是明顯有組裝痕跡恕無法受理退貨。
              為加速作業您的訂單需求，網路購物目前未提供換貨服務，若您購買的商品有瑕疵及不符需求之情況，煩請您於網站申請退貨程序。
              下列情形將可能影響您的退貨權益：
              商品包裝毀損、封條移除、吊牌拆除、貼膠移除、標籤拆除或已組裝、使用等情形。其他逾越檢查之必要或可歸責於買受人或收件人之事由，致商品有毀損、滅失或變更者。
            </p>
          </div>
          <div class="col-md-4 offset-2">
            <ul class="list-group list-group-flush p-3 rounded border border-3">
              <li
                class="list-group-item d-flex justify-content-between align-items-center"
              >
                <div>長</div>
                <div>{{ product.options.length }} cm</div>
              </li>
              <li
                class="list-group-item d-flex justify-content-between align-items-center"
              >
                <span>寬</span>
                <span>{{ product.options.width }} cm</span>
              </li>
              <li
                class="list-group-item d-flex justify-content-between align-items-center"
              >
                <span>高</span>
                <span>{{ product.options.height }} cm</span>
              </li>
              <li
                class="list-group-item d-flex justify-content-between align-items-center"
              >
                <span>重</span>
                <span>{{ product.options.weight }} g</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <Toys :title="product.category" :id="product.id" v-if="product.id" />
  </article>
</template>
<script>
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { ref, computed, watch } from 'vue';
import Toys from '@/components/home/Toys.vue';

export default {
  name: 'product',
  components: {
    Toys,
  },
  setup() {
    const router = useRouter();
    const store = useStore();

    // 當在同一個 component 中進行頁面跳轉時, productId 可透過 computed 得知 router 變更
    // 產品詳細資料頁面轉第二個產品資料頁面，如果不透過 computed 的話，頁面無法重新執行，因為頁面已經執行過 setup
    // ref(router.currentRoute.value.params.id) 及 純router.currentRoute.value.params.id 都是不可用的
    const productId = computed(() => router.currentRoute.value.params.id);
    const orderNum = ref(1);

    // 在第一次進入頁面就執行
    store.dispatch('getProduct', productId.value);

    // 由 watch 監控 productId，如果變更就重新執行 getProduct
    watch(productId, () => {
      if (productId.value && productId.value !== undefined) {
        store.dispatch('getProduct', productId.value);
      }
    });

    const product = computed(() => store.state.client.product);

    // 加入購物車
    async function addToCart() {
      const productInCart = store.state.client.cartsList.some(
        (cart) => cart.product.id === productId.value,
      );
      if (productInCart) {
        // 購物車中有相同產品
        await store.dispatch('EditCart', {
          product: productId.value,
          quantity: orderNum.value,
        });
      } else {
        await store.dispatch('addToCart', {
          product: productId.value,
          quantity: orderNum.value,
        });
      }
      orderNum.value = 1;
    }

    async function buyNow() {
      await addToCart();
      router.push('/checkout');
    }

    return {
      product,
      orderNum,
      addToCart,
      buyNow,
    };
  },
};
</script>
<style lang="scss" scoped>
@import '@/scss/main.scss';
.productInfo {
  position: relative;
  &::after {
    content: '';
    position: absolute;
    bottom: -20px;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(
      to right,
      $success 0%,
      $success 12%,
      #e5e5e5 12%,
      #e5e5e5 100%
    );
  }
}
</style>
