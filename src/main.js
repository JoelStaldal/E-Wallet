import Vue from 'vue'
import App from './App.vue'
import router from './router'
import cardList from './assets/cardList.json'
import VueTheMask from 'vue-the-mask'
Vue.use(VueTheMask)

Vue.config.productionTip = false

new Vue({
  data(){
    return {
      cardList: cardList.card
    }
  },
  methods: {
    getCard(id) {
      return this.cardList.find(card => card.id == id)
    }
  },
  router,
  render: h => h(App)
}).$mount('#app')
