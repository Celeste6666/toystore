import { createApp } from 'vue';
import * as bootstrap from 'bootstrap';
// 解決Bootstrap變數問題
// 改變後的custom.scss 一定要放入main.js中，才會載入變更後的Bootstrap樣式
import './scss/main.scss';
// 要使用 bootstrap-icons 就要載入樣式
import 'bootstrap-icons/font/bootstrap-icons.css';
import store from './store';
import router from './router';
import App from './App.vue';

const app = createApp(App);

app.use(bootstrap);

app.use(store).use(router).mount('#app');
