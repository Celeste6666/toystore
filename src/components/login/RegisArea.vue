<template>
  <div class="regis_area container card w-50">
    <div class="row g-0">
      <div class="col-6">
        <div class="card-body form">
          <div class="card-title text-center h3">會員註冊</div>
          <div class="form-floating mb-3">
            <input type="text"
            class="form-control border-bottom regis_area-user"
            placeholder="用戶名"
            v-model="regisUser.name">
            <label>用戶名</label>
          </div>
          <div class="form-floating mb-3">
            <input type="email"
            class="form-control border-bottom regis_area-email"
            placeholder="請輸入帳號"
            v-model="regisUser.email">
            <label>電子信箱</label>
          </div>
          <div class="form-floating mb-3">
            <input type="password"
            class="form-control  border-bottom regis_area-password"
            placeholder="請輸入密碼"
            v-model="regisUser.password">
            <label>密碼</label>
          </div>
          <div class="form-check text-start mb-3">
            <input class="form-check-input"
            type="checkbox"
            name="news"
            id="news"
            v-model="regisUser.news">
            <label class="form-check-label" for="news">
              訂閱最新資訊
            </label>
          </div>
          <div class="d-grid gap-2">
            <button class="btn btn-danger rounded-pill text-white">註冊</button>
            <small class="text-success">
              已經擁有帳戶？
              <a href="#"
              class="text-danger text-decoration-none"
              @click.prevent="changeLoginTab">登入</a>
            </small>
          </div>
        </div>
      </div>
      <div class="col-6">
        <span>Facebook</span>
        <span>Line</span>
        <span>Google</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'login',
  data() {
    return {
      regisUser: {
        name: '',
        email: '',
        password: '',
        news: false,
      },
    };
  },
  methods: {
    changeLoginTab() {
      this.$store.commit('changeLoginTab');
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/main.scss";
.regis_area{
  border-radius: 20px;
  &-user,
  &-email,
  &-password{
    border-bottom-width: 2px !important;
    border-bottom-color: lighten($success, 25%) !important;
    &+label{
      top: 15px;
    }
  }
  &-user:focus,
  &-email:focus,
  &-password:focus,
  &-user:not(:placeholder-shown),
  &-email:not(:placeholder-shown),
  &-password:not(:placeholder-shown){
    border-bottom-color:$success !important;
    &+label{
      top: -5px;
    }
  }
}
</style>
