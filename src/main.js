import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import 'bootstrap'
import VeeValidate from 'vee-validate'
import zhTW from 'vee-validate/dist/locale/zh_TW'
import VueI18n from 'vue-i18n'

import App from './App.vue'
import router from './router'
import store from './store'
import './bus'
import currencyFilter from './filters/currency'
import dateFilter from './filters/date'

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(Vuex)

Vue.use(VueI18n)
const i18n = new VueI18n({ locale: 'zhTW' })
Vue.use(VeeValidate, {
  i18n,
  dictionary: { zhTW }
})

Vue.component('Loading', Loading)
Vue.filter('currency', currencyFilter)
Vue.filter('date', dateFilter)

axios.defaults.withCredentials = true

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')

router.beforeEach((to, from, next) => {
  console.log('to', to, 'from', from, 'next', next)

  if (to.meta.requiresAuth) {
    const api = `${process.env.VUE_APP_APIPATH}/api/user/check`
    axios.post(api).then(response => {
      console.log(response.data)
      if (response.data.success) {
        next()
      } else {
        next({
          path: '/login'
        })
      }
    })
  } else {
    next()
  }
})
