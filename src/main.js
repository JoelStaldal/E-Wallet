import Vue from 'vue'
import App from './App.vue'
import router from './router'
import cardList from './assets/cardList.json'

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
