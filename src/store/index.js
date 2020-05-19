import Vue from 'vue'
import Vuex from 'vuex'
import cardList from '../assets/cardList.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cardList: cardList.card
  },
  getters: {
    getActiveCard: state => {
      return state.cardList.find(card => card.active)
    },
    getNonActiveCards: state => {
      return state.cardList.filter(card => !card.active)
    },
    getCurrentId: state => {
      return state.cardList.length + 1
    }
  },
  mutations: {
    addCard(state, payload){
      state.cardList.push(payload)
    },
    setActiveCard(state, id){
      state.cardList.forEach(c => {
        if(c.id == id){c.active = true}
        else{c.active = false}
      })
    }
  },
  actions: {
    addCard(context, newCard){
      context.commit('addCard', newCard)
    }
  },
  modules: {
  }
})
