<template>
<div class="home">
  <Header v-bind:headerText="headerText"/>
  <Card
    v-bind:cardStatus="cardStatus"
    v-bind:card="getActiveCard"
  />
  <CardStack 
    v-for="card in getNonActiveCards"
    v-bind:key="card.id"
    v-bind:card="card"
  />
  <router-link to="/addcard">
  <button>ADD A NEW CARD</button>
  </router-link>
</div>
</template>
<script>

import Header from '../components/Header'
import Card from '../components/Card'
import CardStack from '../components/CardStack'

export default {
  name: 'Home',
  components: {
      Header,
      Card,
      CardStack
  },
  data() {
    return {
      headerText: "E-WALLET",
      cardStatus: "ACTIVE CARD",
      cardList: this.$root.cardList
    }
  },
  computed: {
    getActiveCard(){
      let activeCard = this.$root.cardList.find(card => card.active)
      return activeCard
    },
    getNonActiveCards(){
      let nonActiveCards = this.$root.cardList.filter(card => !card.active)
      return nonActiveCards
    }
  }
} 
</script>
<style scoped>
button {
  margin: 1rem;
  width: 21rem;
  height: 5rem;
  border: 2px solid black;
  border-radius: 0.5rem;
  
}
</style>
