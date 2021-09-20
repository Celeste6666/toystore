<template>
  <div class="customer-info mb-6">
    <div class="h2 py-4 border-bottom mb-5 d-flex justify-content-between align-items-end">
      購物資訊
    </div>
    <div class="mb-5">
      <p class="fw-bolder">Email</p>
      <p>,,,,#hkhklk</p>
    </div>
    <div class="mb-5">
      <p class="fw-bolder">電話號碼</p>
      <p>090ioipjp7u</p>
    </div>
    <div class="mb-5">
      <p class="fw-bolder">運送地址</p>
      <p>090ioipjp7u</p>
    </div>
  </div>
  <div class="payment-info mb-6">
    <div class="h2 py-4 border-bottom mb-5 d-flex justify-content-between align-items-end">
      付款資訊
    </div>
    <div class="mb-5">
      <p class="fw-bolder">付款方式</p>
      <p>Line Pay</p>
    </div>
    <div class="mb-5">
      <p class="fw-bolder">付款方式</p>
      <p>Pi 拍錢包</p>
    </div>
    <div class="mb-5">
      <p class="fw-bolder">付款方式</p>
      <p>信用卡</p>
      <form class="row g-4">
        <div class="col-12">
          <label for="creditCardNumber" class="form-label"
            >卡片號碼
            <span class="text-danger">*</span>
          </label>
          <input
            type="text"
            class="form-control rounded-pill bg-light border-2"
            id="creditCardNumber"
            required
          />
        </div>
        <div class="col-6">
          <label for="creditCardExpired" class="form-label"
            >到期日
            <span class="text-danger">*</span>
          </label>
          <input
            type="text"
            class="form-control rounded-pill bg-light border-2"
            id="creditCardExpired"
            required
          />
        </div>

        <div class="col-6">
          <label for="creditCardCode" class="form-label"
            >授權碼
            <span class="text-danger">*</span>
          </label>
          <input
            type="text"
            class="form-control rounded-pill bg-light border-2"
            id="creditCardCode"
            required
          />
        </div>
      </form>
    </div>
  </div>
</template>
