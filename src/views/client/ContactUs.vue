<template>
  <article class="contact container-lg my-5">
    <nav aria-label="breadcrumb" class="mb-6">
      <ol class="breadcrumb py-2 px-4 border border-2 rounded-pill">
        <li class="breadcrumb-item">首頁</li>
        <li class="breadcrumb-item" aria-current="page">聯絡我們</li>
      </ol>
    </nav>
    <section class="card">
      <div class="card-body p-6">
        <div class="row g-5">
          <div class="col-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3646.042085729954!2d120.60139331402767!3d23.958951886696237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346936db9077f0df%3A0x9a03ace8fdae207f!2zNTEw5b2w5YyW57ij5ZOh5p6X5biC5bGx6IWz6Lev5LiJ5q61MuW3tzc25byEOeiZnw!5e0!3m2!1szh-TW!2stw!4v1629976705651!5m2!1szh-TW!2stw"
              width="100%"
              height="450"
              class="rounded"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
          <form class="col-1 col-md-7 d-flex flex-column justify-content-start align-content-between">
            <p class="h2 mb-4">留下您的訊息</p>
            <div class="mb-3">
              <label class="form-label">您的名字</label>
              <input
                type="text"
                class="form-control border border-2 rounded-pill w-75 px-4 py-2"
                v-model="msg.from_name"
                placeholder="輸入您的名字"
              />
            </div>
            <div class="mb-3">
              <label class="form-label">電子信箱</label>
              <input
                type="email"
                class="form-control border border-2 rounded-pill w-75 px-4 py-2"
                v-model="msg.from_email"
                placeholder="輸入您的電子信箱"
              />
            </div>
            <div class="mb-3">
              <label class="form-label">留下您的訊息</label>
              <textarea class="form-control border border-2 rounded w-75 px-4 py-2" rows="3" v-model="msg.message"> </textarea>
              <div class="mt-3">
                <button
                  class="btn btn-danger rounded-pill py-2 px-4 mt-3"
                  :class="{
                    disabled: !msg.from_name || !msg.from_email || !msg.message,
                  }"
                  @click.prevent="sendMsg"
                >
                  送出訊息
                </button>
              </div>
            </div>
          </form>
          <div class="col-1 col-md-5">
            <p class="h2 mb-4">聯絡方式</p>
            <p class="mb-3 lh-lg">
              彰化縣員林市鎮興里山腳路三段2巷76弄9號<br />
              <a href="#" class="text-decoration-none text-dark border-bottom border-2 p-2 contact-link">aafree2014@gmail.com </a>
            </p>
            <div class="mt-5">
              <p class="h5 mb-3">Follow Us</p>
              <div>
                <a href="#" class="btn btn-info rounded-circle contact-icon p-2 me-2"><i class="bi bi-twitter text-white"></i></a>
                <a href="#" class="btn rounded-circle contact-icon p-2 me-2" style="background-color: var(--bs-primary)"
                  ><i class="bi bi-facebook text-white"></i
                ></a>
                <a href="#" class="btn rounded-circle contact-icon p-2 me-2" style="background-color: var(--bs-pink)"
                  ><i class="bi bi-instagram text-white"></i
                ></a>
                <a href="#" class="btn btn-info rounded-circle contact-icon p-2 me-2" style="background-color: var(--bs-red)"
                  ><i class="bi bi-youtube text-white"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </article>
</template>
<script>
import { useStore } from 'vuex';
import { reactive } from 'vue';
import emailjs from 'emailjs-com';

export default {
  name: 'Contact',
  setup() {
    const store = useStore();
    const msg = reactive({
      from_name: '',
      from_email: '',
      message: '',
    });

    function clearMsg() {
      Object.keys(msg).forEach((key) => {
        msg[key] = '';
      });
      store.commit('changeIsLoading');
    }

    async function sendMsg() {
      store.commit('changeIsLoading');
      const customerAlert = (info) => alert(info);
      await emailjs.send('service_xgzg1tc', 'template_4h4tdpo', msg, 'user_szxmWISaEOgthSkYrXeeB').then(
        (response) => {
          customerAlert(`${msg.from_name} 您好，我們已經收到您的來信，我們將在 3 ~ 5 天內回信，請您注意查收！`);
          console.log('SUCCESS!', response.status, response.text);
          clearMsg();
        },
        (error) => {
          customerAlert(`${msg.from_name} 您好，您的來信似乎出了點錯誤，請您重新來信或直接撥打本公司電話！`);
          console.log('FAILED...', error);
          clearMsg();
        },
      );
    }

    return {
      msg,
      sendMsg,
    };
  },
};
</script>
<style lang="scss" scoped>
@import '@/scss/main.scss';
.contact {
  &-link {
    transition: all 0.5s;
    &:hover {
      border-color: $success !important;
    }
  }
  &-icon {
    width: 40px;
    height: 40px;
  }
}
</style>
