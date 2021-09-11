import { createApp } from 'vue';
import * as bootstrap from 'bootstrap';
// 解決Bootstrap變數問題
// 改變後的custom.scss 一定要放入main.js中，才會載入變更後的Bootstrap樣式
import './scss/main.scss';
// 要使用 bootstrap-icons 就要載入樣式
import 'bootstrap-icons/font/bootstrap-icons.css';
import axios from 'axios';
import store from './store';
import router from './router';
import App from './App.vue';

const app = createApp(App);

app.use(bootstrap);
// import only axios and define as a global property
// https://stackoverflow.com/questions/64269587/how-to-correctly-import-axios-in-vue-3-after-creating-new-project-with-cli
app.config.globalProperties.$axios = axios;

app.use(store).use(router).mount('#app');
