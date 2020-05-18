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
  <button v-on:click="routeToAddCard">ADD A NEW CARD</button>
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
  },
  methods: {
    routeToAddCard(){
      this.$router.push("/addcard")
    }
  }
} 
</script>
<style scoped>
.home {
  height: 130vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

button {
  margin-top: auto;
  width: 21rem;
  height: 5rem;
  border: 2px solid black;
  border-radius: 0.5rem;
  background: white;
  font-size: 1.5rem;
}
</style>
