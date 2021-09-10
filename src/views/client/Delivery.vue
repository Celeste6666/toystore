<template>
  <article class="delivery container-lg my-5">
    <nav aria-label="breadcrumb" class="mb-6">
      <ol class="breadcrumb py-2 px-4 border border-2 rounded-pill">
        <li class="breadcrumb-item">首頁</li>
        <li class="breadcrumb-item" aria-current="page">運送須知</li>
      </ol>
    </nav>
    <section class="card">
      <div class="card-body p-6">
        <div class="row g-5">
          <div class="col-1 col-md-7 d-flex flex-column justify-content-start">
            <div class="notes mb-5">
              <p class="h2 mb-4 fw-bolder">運送須知</p>
              <p class="card-text">
                訂購付款後依照訂單順序現貨商品約3~5個工作天出貨，
                客製化商品約18個工作天出貨，國內地區出貨後2~4天內送達；
                國外地區2~7天送達。(配送時間皆不包含例假日以及國定假日)
                ANVI部份產品組裝與配件供應鏈來自海外，
                由於COVID-19疫情之影響，如過程中遇到班機縮減、
                通關抽檢可能導致商品配送延遲7~14個工作天(含出貨作業時間)，
                若您的訂單有上述之情形影響，我們將會提前以Email通知，
                造成您的不便敬請見諒。請理解後再下單。 (客製化商品下單後即無法退換貨)
              </p>
            </div>
            <div class="notes mb-5">
              <p class="h2 mb-3 fw-bolder">台灣地區運費與運送方式</p>
              <ul class="card-text">
                <li>
                  單筆付款金額滿600元以上，即享有「宅配到府」配送服務，
                  若達1000元以上，另可選擇「貨到付款」配送服務。
                </li>
                <li>
                  選擇貨到付款，如無故拒收、將被列入為觀察名單，暫停使用貨到付款、超商取貨付款服務，
                  待確定以線上刷卡/ATM 付款購物乙次後，始可繼讀使用貨到付款之服務。
                </li>
                <li>
                  黑貓宅配之訂單，將於二個工作天內送達，
                  週六日或例假日訂購者，將於四個工作天內送達。(
                  訂購未滿600元、網路異常、天災影響日或遇不可抗力因素除外)
                  配送過程偶有無法準時送達的情形，宅配人員將以電話先行與您聯繫
                  ，敬請見諒。若配送當日無人簽收、宅配人員會再擇期聯繫配送。
                </li>
                <li>宅配單筆訂單金額未滿600元將採用便利帶/郵局寄送。</li>
                <li>宅配無法配達地區之顧客，將改由郵局掛號寄送。</li>
              </ul>
            </div>
            <div class="notes mb-5">
              <p class="h2 mb-3 fw-bolder">退換貨說明</p>
              <ul class="card-text">
                <li>
                  為了提供更好的服務，<span class="text-success">玩具城</span
                  >超越消費者保護法規7天鑑賞期的規定， 特將鑑賞期延長達14天。
                </li>
                <li>
                  若在14天鑑賞期間內前7日退貨，運費全額由<span class="text-success"
                    >玩具城</span
                  >
                  負擔，我們將安排宅配人員向您收件；
                  若於鑑賞期第8日至14日止，則需由您自行寄回並負擔運費。
                </li>
                <li>
                  若您收到的商品因運送過程產生瑕疵或產品不符，
                  請來電客服中心，我們將為您辦理換貨。
                </li>
                <li>
                  若因退換貨導致未達滿額贈品標準，須連贈品一同退回，
                  若贈品已開封使用，退款將扣除贈品金額。
                </li>
                <li>
                  特惠組合若需退換部分產品，其他產品須以原價計算，
                  退款為實際購買金額扣除未退產品之原價。
                </li>
              </ul>
            </div>
          </div>
          <div class="col-1 col-md-4 offset-1">
            <div class="card border-2 py-4">
              <div
                class="card-body d-flex flex-column justify-content-center align-items-center"
              >
                <p class="fs-4">沒有找到問題答案？</p>
                <router-link
                  to="/contact"
                  class="btn btn-danger rounded-pill py-2 px-4 mt-3"
                >
                  聯絡我們</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </article>
</template>
