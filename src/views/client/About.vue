<template>
  <article class="about container-lg my-5">
    <nav aria-label="breadcrumb" class="mb-6">
      <ol class="breadcrumb py-2 px-4 border border-2 rounded-pill">
        <li class="breadcrumb-item">首頁</li>
        <li class="breadcrumb-item" aria-current="page">關於我們</li>
      </ol>
    </nav>
    <section class="container">
      <div class="text-center w-50 mx-auto">
        <p class="text-success fs-6">不一樣的童年</p>
        <h1>玩具城簡介</h1>
        <p class="text-muted fs-6">
          玩具城成立於2021年，由一群志同道合的年輕人創立，
          擁有專業的研發、生產、業務與行銷團隊， 目前專注於線上經營。
          我們秉持高品質、低價格的產品理念， 並以嬰幼兒為中心，提供最專業的客戶服務，
          滿足不同年齡層小孩各式各樣的消費需求。
        </p>
      </div>
      <img
        src="@/assets/fronted/home06.jpg"
        alt=""
        class="w-100 rounded my-5"
        style="height: 90vh"
      />
      <section class="container-fluid">
        <div class="text-center h1">我們提供</div>
        <div class="row row-cols-1 row-cols-md-2 mt-5 g-5">
          <div class="col px-5">
            <div class="h1 text-title">獨特的商品</div>
            <p class="fs-5 text-muted mt-5 lh-sm">
              除了一般造型的填充玩具以外，我們還生產一系列的泰迪熊、抱枕以及動物背包等。
              我們曾獲華特迪士尼公司的授權，製造過許多迪士尼電影裡的卡通造型動物，
              也曾獲三麗鷗公司的授權，承製KITTY、MELODY等玩偶。
              此外，如果您需要其它的造型，歡迎您隨時與我們聯絡！
            </p>
            <router-link to="/contact" class="btn btn-danger rounded-pill py-2 px-4 mt-3">
              聯絡我們
            </router-link>
          </div>
          <div class="col">
            <img src="@/assets/fronted/home10.jpg" alt="" class="img-fluid rounded" />
          </div>
        </div>
        <div class="row row-cols-1 row-cols-md-2 mt-5 g-5">
          <div class="col">
            <img src="@/assets/fronted/home11.jpg" alt="" class="img-fluid rounded" />
          </div>
          <div class="col px-5">
            <div class="h1 text-title">無塵、消毒的製造過程</div>
            <p class="fs-5 text-muted mt-5 lh-sm">
              市面上兒童玩具的種類很多，因玩具所採用的原料及設計不安全造成兒童發生意外時有所聞。
              為了讓兒童安全使用玩具，本公司採取嚴格的製造作業流程。
              所有本公司生產的玩具均經過嚴密的品質管理，
              並完全符合我國與日本ＳＴ的要求，以及歐市的ＣＥ和美國的ＡＳＴＭ安全標準。
            </p>
            <router-link to="/catalog" class="btn">
              <p class="fs-6 border-bottom border-2">
                看看所有商品
                <i class="bi bi-arrow-right-short"></i>
              </p>
            </router-link>
          </div>
        </div>
      </section>
    </section>
  </article>
</template>
<style lang="scss" scoped>
@import '@/scss/main.scss';

.text-title {
  position: relative;
  &::after {
    content: '';
    position: absolute;
    bottom: -20px;
    left: 0;
    width: 20%;
    height: 3px;
    border-radius: 5px;
    background-color: $success;
  }
}
</style>
