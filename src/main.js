import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueTheMask from 'vue-the-mask'
import store from './store'

Vue.use(VueTheMask)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
