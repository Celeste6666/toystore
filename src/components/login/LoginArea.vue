<template>
  <div class="login_area container card w-50">
    <div class="row g-0">
      <div class="col-6">
        <div class="card-body">
          <div class="card-title text-center h3">會員登入</div>
          <div class="form-floating mb-3">
            <!--eslint-disable-next-line-->
            <input type="email" class="form-control border-bottom login_area-email" placeholder="請輸入帳號" v-model="loginUser.email" />
            <label>電子信箱</label>
          </div>
          <div class="form-floating mb-3">
            <!--eslint-disable-next-line-->
            <input type="password" class="form-control border-bottom login_area-password" placeholder="請輸入密碼" v-model="loginUser.password" />
            <label>密碼</label>
          </div>
          <div class="d-grid gap-2 mt-5">
            <button class="btn btn-danger rounded-pill" @click.prevent="getLoginUserToken">登入</button>
            <small class="text-success text-center">
              尚未擁有帳戶？
              <a href="#" class="text-danger text-decoration-none" @click.prevent="changeLoginTab">註冊</a>
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
import { reactive } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default {
  name: 'login',
  setup() {
    const store = useStore();
    const router = useRouter();

    const loginUser = reactive({
      email: 'aafree2014@gmail.com',
      password: 'aafree2014',
    });

    async function getLoginUserToken() {
      const adminToken = await store.dispatch('login', loginUser);
      if (!adminToken.success) {
        router.push('/');
      } else {
        store.commit('getToken', adminToken.token);
        router.push('/admin');
        const expired = new Date(Date.now() + 9000000);
        document.cookie = `toyStoreToken=${store.state.api.token}; expires=${expired}; path=/`;
      }
    }

    return {
      loginUser,
      getLoginUserToken,
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
@import '@/scss/main.scss';
.login_area {
  border-radius: 20px;
  &-email,
  &-password {
    border-bottom-width: 2px !important;
    border-bottom-color: lighten($success, 25%) !important;
    & + label {
      top: 15px;
    }
  }
  &-email:focus,
  &-password:focus,
  &-email:not(:placeholder-shown),
  &-password:not(:placeholder-shown) {
    border-bottom-color: $success !important;
    & + label {
      top: -5px;
    }
  }
}
.form-control {
  border: 0;
}
</style>
