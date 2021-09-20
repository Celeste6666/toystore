import { createRouter, createWebHashHistory } from 'vue-router';
import Client from '@/views/client/Client.vue';
import Home from '@/views/client/Home.vue';
import Catalog from '@/views/client/Catalog.vue';
import Delivery from '@/views/client/Delivery.vue';
import Contact from '@/views/client/ContactUs.vue';
import Product from '@/views/client/Product.vue';
import Login from '@/views/client/Login.vue';
import Checkout from '@/views/client/Checkout.vue';
// 後台
import Admin from '@/views/admin/Admin.vue';
import Statistic from '@/views/admin/Statistic.vue';
import Products from '@/views/admin/Products.vue';
import Orders from '@/views/admin/Orders.vue';
import Coupons from '@/views/admin/Coupons.vue';
import Photos from '@/views/admin/Photos.vue';

const routes = [
  {
    path: '/',
    name: 'Client',
    component: Client,
    children: [
      {
        path: '/',
        name: 'Home',
        component: Home,
      },
      {
        path: 'catalog',
        name: 'Catalog',
        component: Catalog,
      },
      {
        path: 'delivery',
        name: 'Delivery',
        component: Delivery,
      },
      {
        path: 'about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/client/About.vue'),
      },
      {
        path: 'contact',
        name: 'Contact',
        component: Contact,
      },
      {
        path: 'product/:id',
        name: 'Product',
        component: Product,
      },
      {
        path: 'checkout',
        name: 'Checkout',
        component: Checkout,
      },
      {
        path: 'login',
        name: 'Login',
        component: Login,
      },
    ],
  }, {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    children: [
      {
        path: '/admin',
        name: 'Statistic',
        component: Statistic,
      },
      {
        path: 'products',
        name: 'Products',
        component: Products,
      },
      {
        path: 'orders',
        name: 'Orders',
        component: Orders,
      },
      {
        path: 'coupons',
        name: 'Coupons',
        component: Coupons,
      },
      {
        path: 'photos',
        name: 'Photos',
        component: Photos,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    // 跳轉頁面時，會自動滾回頂部
    return { top: 0 };
  },
});

export default router;
