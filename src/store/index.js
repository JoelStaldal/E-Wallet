import Vue from 'vue'
import Vuex from 'vuex'
import cardList from '../assets/cardList.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cardList: cardList.card,
    currentId: 4
  },
  getters: {
    getActiveCard: state => {
      return state.cardList.find(card => card.active)
    },
    getNonActiveCards: state => {
      return state.cardList.filter(card => !card.active)
    },
    getCurrentId: state => {
      return state.currentId
    },
    getArrayLength: state => {
      return state.cardList.length
    },
  },
  mutations: {
    addCardMutation(state, newCard){
      state.cardList.push(newCard)
    },
    deleteCardMutation(state, activeCard){
      state.cardList = state.cardList.filter(card => card.id != activeCard.id)
    },
    setActiveCard(state, id){
      state.cardList.forEach(card => {
        if(card.id == id){card.active = true}
        else{card.active = false}
      })
    },
    incrementId: state => {
      state.currentId++
    }
  },
  actions: {
    addCard(context, newCard){
      context.commit('incrementId')
      newCard.id = context.state.currentId
      context.commit('addCardMutation', newCard)
    },
    deleteCard(context, activeCard){
      context.commit('deleteCardMutation', activeCard)
    }
  },
  modules: {
  }
})
