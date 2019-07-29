import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
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
      meta: { requiresAuth: true },
      children: [
        {
          path: 'products',
          name: 'ProductsList',
          component: () => import('@/components/ProductsList'),
          meta: { requiresAuth: true }
        }
      ]
    }
  ]
})
