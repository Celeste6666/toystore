# toystore

# 路由及模組規劃

## 路由

```js
                                  |-Home.vue('/')
                                  |-Catalog.vue('catalog')
              |-Client.vue('/')-  |-About.vue('about')
              |                   |-Delivery.vue('delivery')
              |                   |-News.vue('news/:id')
              |                   |-Product.vue('product/:id')
              |                   |-Login.vue('login')
              |                   |-Checkout.vue('checkout')
APP.vue('/') -|                   |-404.vue('404')
              |
              |                     |-Statistic.vue('statistic')
              |                     |-Products.vue('products')
              |-Admin.vue('/admin')-|-Coupons.vue('coupons')
                                    |-Orders.vue('order')
                                    |-Photos.vue('photos')
```

## 模組

```js
                                                              |-components/home/Banner.vue
                                                              |-components/home/Toys.vue
                                                |-Home.vue ---|-components/home/News.vue
                                                |-Catalog.vue
                                                |-News.vue
                                                |-ContactUS.vue
                                                |-Delivery.vue
                         |-Router-view  ------- |-Login.vue
                         |                      |-Checkout.vue
                         |
views/client/Client.vue- |-components/general/About.vue
                         |-components/general/Coupon.vue
                         |-components/general/FollowUS.vue
                         |-components/general/Footer.vue








                      |-Statistic.vue
                      |
                      |
                      |-Products.vue --|-components/admin/ProductsModal.vue
views/admin/Admin.vue-|-Coupons.vue
                      |-Orders.vue --|-components/admin/OrdersModal.vue
                      |-Photos.vue
                      |-components/admin/AdminList.vue
```

# 使用技術

- Vue3,Vuex,Vue-Router,VueCLI

- Bootstrap

- Ajax(Axios)

後台
  - D3.js

  - Mock.js

# Credit

Photo by <a href="https://unsplash.com/@itshoobastank?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Shirota Yuri</a> on <a href="https://unsplash.com/s/photos/li-tzuni-toy?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

Photo by <a href="https://unsplash.com/@libs?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Steven Libralon</a> on <a href="https://unsplash.com/s/photos/kids-playing?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

Photo by <a href="https://unsplash.com/@markusspiske?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Markus Spiske</a> on <a href="https://unsplash.com/s/photos/kids-playing?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

Photo by <a href="https://unsplash.com/@hannahrodrigo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Hannah Rodrigo</a> on <a href="https://unsplash.com/s/photos/kids-toy?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

Photo by <a href="https://unsplash.com/@joshstyle?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">JOSHUA COLEMAN</a> on <a href="https://unsplash.com/s/photos/kids-plush-toy?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

Photo by <a href="https://unsplash.com/@punttim?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Tim Gouw</a> on <a href="https://unsplash.com/s/photos/kids-elk-toy?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

