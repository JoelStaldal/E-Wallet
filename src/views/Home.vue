<template>
<div class="home">
  <Header v-bind:headerText="headerText"/>
  <Card
    v-bind:cardStatus="cardStatus"
    v-bind:card="getActiveCard"
  />
  <router-link to="/addcard">
  <button>add</button>
  </router-link>
</div>
</template>
<script>

import Header from '../components/Header'
import Card from '../components/Card'


export default {
  name: 'Home',
  components: {
      Header,
      Card,
      
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
      console.log(activeCard)
      return activeCard
    }
  }
} 
</script>
<style scoped>

</style>
