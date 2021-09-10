<template>
  <div
    class="modal fade"
    id="ordersModal"
    tabindex="-1"
    aria-labelledby="ordersModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-body">
          <div class="h2 text-center mb-3">訂單詳細資料</div>
          <div class="container-fluid d-flex flex-column">
            <div class="row">
              <div class="col-lg-8">
                <table class="table table-sm align-middle">
                  <tbody>
                    <tr>
                      <th>姓名</th>
                      <td>
                        <img
                          src="https://randomuser.me/api/portraits/women/12.jpg"
                          alt=""
                          class="order-buyer-img me-2 border border-3 rounded-circle"
                        />
                        <span> Celeste</span>
                      </td>
                    </tr>
                    <tr>
                      <th>住址</th>
                      <td>彰化縣員林是山腳路3段2向76甕9號</td>
                    </tr>
                    <tr>
                      <th>信箱</th>
                      <td>aafree2014@gmail.com</td>
                    </tr>
                    <tr>
                      <th>電話</th>
                      <td>0928019348</td>
                    </tr>
                    <tr>
                      <th>總金額</th>
                      <td>99</td>
                    </tr>
                    <tr>
                      <th>折價券代碼</th>
                      <td>CDFRDE</td>
                    </tr>
                    <tr>
                      <th>免運</th>
                      <td><i class="bi bi-check2-circle fs-5 text-success"></i></td>
                    </tr>
                    <tr>
                      <th>備註</th>
                      <td>不要早上送過來</td>
                    </tr>
                    <tr>
                      <th>進度</th>
                      <td>
                        <select class="form-select rounded-0" id="product-type" required>
                          <option selected disabled value="">請選擇目前進度</option>
                          <option>...</option>
                        </select>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="col-lg-4">
                <div class="fw-bold">物品清單</div>
                <ul class="list-unstyled p-2 border border-2 border-dark rounded-1">
                  <li>玩具*6</li>
                  <li>玩具*6</li>
                </ul>
                <div class="fw-bold">備註</div>
                <textarea
                  class="form-control border border-2 border-dark"
                  id="exampleFormControlTextarea1"
                  rows="4"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary rounded-0"
            data-bs-dismiss="modal"
          >
            關閉
          </button>
          <button type="button" class="btn btn-info rounded-0">儲存</button>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.order {
  &-buyer-img {
    width: 40px;
    height: 40px;
    object-fit: contain;
  }
}
</style>
