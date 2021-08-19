import { createStore } from 'vuex';

export default createStore({
  state: {
    baseAPI: 'https://course-ec-api.hexschool.io/api',
    uuid: '8ef975e4-f1b6-4328-932c-fe911c580ec7',
    loginTab: 'LoginArea',
  },
  mutations: {
    changeLoginTab(state) {
      state.loginTab = state.loginTab === 'LoginArea' ? 'RegisArea' : 'LoginArea';
    },
  },
  actions: {
  },
  modules: {
  },
});
