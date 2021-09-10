<template>
  <section class="coupon mt-6">
    <div class="card border-0 text-center container p-4">
      <div class="card-body row g-4 align-items-center">
        <div class="col-5 fs-4 d-flex flex-row align-items-center justify-content-evenly">
          <div
            class="bg-success rounded-circle p-2 fs-3"
            style="width: 60px; height: 60px"
          >
            <i class="bi bi-stars text-white"></i>
          </div>
          <div class="text-start">
            訂閱我們的最新消息<br />
            即時得知本店最新活動<br />
            並取得 <span class="text-success">10% 折扣</span> ！
          </div>
        </div>
        <div class="col">
          <form action="" class="row">
            <div class="col-7 offset-1">
              <input
                type="email"
                class="form-control border border-2 rounded-pill w-100 px-4 py-2"
                placeholder="輸入您的電子信箱"
              />
            </div>
            <div class="col-3">
              <button class="btn btn-danger px-4 py-2 rounded-pill">訂閱我們</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
