import { createApp } from 'vue';
import * as bootstrap from 'bootstrap';
// 解決Bootstrap變數問題
// 一定要放入main.js中，才會載入變更後的Bootstrap樣式
import './scss/main.scss';
// 要使用 bootstrap-icons 就要載入樣式
import 'bootstrap-icons/font/bootstrap-icons.css';
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './App.vue';
import router from './router';
import store from './store';

createApp(App).use(bootstrap);
createApp(App).use(VueAxios, axios);
createApp(App).config.globalProperties.$axios = axios;
createApp(App).use(store).use(router).mount('#app');
