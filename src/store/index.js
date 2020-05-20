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
    addCardMutation(state, newCard){
      state.cardList.push(newCard)
    },
    deleteCardMutation(state, activeCard){
      state.cardList = state.cardList.filter(card => card.id != activeCard.id)
      console.log(state.cardList)
    },
    setActiveCard(state, id){
      state.cardList.forEach(card => {
        if(card.id == id){card.active = true}
        else{card.active = false}
      })
    }
  },
  actions: {
    addCard(context, newCard){
      context.commit('addCardMutation', newCard)
    },
    deleteCard(context, activeCard){
      context.commit('deleteCardMutation', activeCard)
    }
  },
  modules: {
  }
})
