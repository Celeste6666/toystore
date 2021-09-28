<template>
  <div class="login_area container card w-50">
    <div class="row g-3">
      <div class="col-6">
        <div class="card-body">
          <div class="card-title text-center h3">會員登入</div>
          <div class="form-floating mb-3">
            <!--eslint-disable-next-line-->
            <input
              type="email"
              class="form-control border-bottom login_area-email"
              placeholder="請輸入帳號"
              v-model="loginUser.email"
            />
            <label>電子信箱</label>
          </div>
          <div class="form-floating mb-3">
            <!--eslint-disable-next-line-->
            <input
              type="password"
              class="form-control border-bottom login_area-password"
              placeholder="請輸入密碼"
              v-model="loginUser.password"
            />
            <label>密碼</label>
          </div>
          <div class="d-grid gap-2 mt-5">
            <button
              class="btn btn-danger rounded-pill"
              @click.prevent="getLoginUserToken"
            >
              登入
            </button>
            <small class="text-success text-center">
              尚未擁有帳戶？
              <a
                href="#"
                class="text-danger text-decoration-none"
                @click.prevent="changeLoginTab"
                >註冊</a
              >
            </small>
          </div>
        </div>
      </div>
      <div class="col-6 d-flex flex-column justify-content-center align-items-center">
        <div class="d-grid gap-4 w-100">
          <button
            class="btn btn-primary rounded-1 shadow-sm"
            @click.prevent="socialMediaLogin('fb')"
          >
            <i class="bi bi-facebook me-1"></i>
            Facebook
          </button>
          <button
            class="btn btn-light text-dark rounded-1 shadow-sm"
            @click.prevent="socialMediaLogin('google')"
          >
            <i class="bi bi-google me-1"></i>
            Google
          </button>
          <div v-if="firebaseUserName">
            <div class="text-center">
              {{ firebaseUserName }} 登入中
              <button class="btn fs-2" @click.prevent="logOut">
                <i class="bi bi-box-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { initializeApp } from 'firebase/app';
import { getAuth,
  signInWithPopup,
  FacebookAuthProvider,
  GoogleAuthProvider,
  signOut } from 'firebase/auth';
import { ref, reactive } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default {
  name: 'login',
  setup() {
    const store = useStore();
    const router = useRouter();

    const firebaseUserName = ref('');

    // Firebase 基本配置
    const { firebaseConfig } = store.state.api;
    const firebaseApp = initializeApp(firebaseConfig);
    const authInstance = getAuth(firebaseApp);
    authInstance.languageCode = 'zh-tw';

    // FB 登入
    const FacebookProvider = new FacebookAuthProvider();
    const GoogleProvider = new GoogleAuthProvider();

    async function socialMediaLogin(socialMedia) {
      if (socialMedia === 'fb') {
        signInWithPopup(authInstance, FacebookProvider)
          .then((result) => {
            // The signed-in user info.
            const { user } = result;
            firebaseUserName.value = user.displayName;
          })
          .catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            console.log(errorCode);
          });
      } else if (socialMedia === 'google') {
        signInWithPopup(authInstance, GoogleProvider)
          .then((result) => {
            // The signed-in user info.
            console.log(result);
            const { user } = result;
            firebaseUserName.value = user.displayName;
          })
          .catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            console.log(errorCode);
          });
      }
    }

    async function logOut() {
      signOut(authInstance)
        .then(() => {
          // Sign-out successful.
          firebaseUserName.value = '';
          console.log('Sign-out successful');
        })
        .catch((error) => {
          // An error happened.
          console.log(error);
        });
    }

    const loginUser = reactive({
      email: 'aafree2014@gmail.com',
      password: 'aafree2014',
    });

    async function getLoginUserToken() {
      store.commit('changeIsLoading');
      const adminToken = await store.dispatch('login', loginUser);
      if (!adminToken.success) {
        router.push('/');
      } else {
        router.push('/admin');
        const expired = new Date(Date.now() + 9000000);
        document.cookie = `toyStoreToken=${adminToken.token}; expires=${expired}; path=/`;
      }
      store.commit('changeIsLoading');
    }

    return {
      socialMediaLogin,
      firebaseUserName,
      logOut,
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
