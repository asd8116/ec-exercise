import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',

  routes: [
    {
      path: '*',
      redirect: 'login'
    },
    // {
    //   path: '/',
    //   name: 'Home',
    //   component: () => import('@/views/Home.vue'),
    //   meta: { requiresAuth: true }
    // },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/Login')
    },
    {
      path: '/admin',
      name: 'Dashboard',
      component: () => import('@/views/Dashboard'),
      children: [
        {
          path: 'products',
          name: 'ProductsList',
          component: () => import('@/components/ProductsList'),
          meta: { requiresAuth: true }
        },
        {
          path: 'coupons',
          name: 'Coupons',
          component: () => import('@/components/Coupons'),
          meta: { requiresAuth: true }
        },
        {
          path: 'orders',
          name: 'Orders',
          component: () => import('@/components/Orders'),
          meta: { requiresAuth: true }
        }
      ]
    },
    {
      path: '/',
      name: 'Dashboard',
      component: () => import('@/views/Dashboard'),
      children: [
        {
          path: 'customer_order',
          name: 'CustomerOrder',
          component: () => import('@/components/CustomerOrders')
        }
      ]
    }
  ]
})
