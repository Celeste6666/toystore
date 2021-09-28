export default {
  api: {
    baseAPI: 'https://course-ec-api.hexschool.io/api',
    uuid: '8ef975e4-f1b6-4328-932c-fe911c580ec7',
    token: '',
    firebaseConfig: {
      apiKey: 'AIzaSyDPikzW7b0RYqmtIqRsjbXfeD0JgX0uuFo',
      authDomain: 'p-firestore.firebaseapp.com',
      projectId: 'p-firestore',
      storageBucket: 'p-firestore.appspot.com',
      messagingSenderId: '383633033055',
      appId: '1:383633033055:web:1b27a853f6024e257998ea',
      measurementId: 'G-2QTLME3FKW',
    },
  },
  currentLoginTab: 'LoginArea',
  isLoading: false,
  allCategory: ['絨毛玩具', '木製玩具', '樂高玩具'],
  client: {
    product: {
    },
    productsList: {
      絨毛玩具: [],
      木製玩具: [],
      樂高玩具: [],
    },
    order: {
      name: '',
      email: '',
      tel: '',
      address: '',
      payment: '',
      coupon: '',
      message: '',
    },
    cartsList: [],
  },
  admin: {
    productsList: [],
    ordersList: [],
    couponsList: [],
    photosList: [],
  },
  currentPageData: [],
  currentPagination: {
  },
};
