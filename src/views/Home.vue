<template>
<div class="home">
  <Header v-bind:headerText="headerText"/>
  <Card
    v-if="getActiveCard"
    v-bind:cardStatus="cardStatusActive"
    v-bind:card="getActiveCard"
    />
    <p v-else-if="arrayLength > 0">{{cardStatusSelect}}</p>
    <p v-else>{{cardStatusNoCards}}</p>
  <button class="delButton" v-on:click="deleteCard">Delete</button>
  <card-stack />
  <button class="addNewCardButton" v-on:click="routeToAddCard">ADD A NEW CARD</button>
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
      cardStatusActive: "ACTIVE CARD",
      cardStatusSelect: "SELECT A CARD",
      cardStatusNoCards: "NO CARDS"
    }
  },
  computed: {
    getActiveCard(){
      return this.$store.getters.getActiveCard
    },
    arrayLength(){
      return this.$store.getters.getArrayLength
    }
  },
  methods: {
    routeToAddCard(){
      this.$router.push("/addcard")
    },
    deleteCard(){
      if(confirm("Are you sure?")){
        let activeCard = this.getActiveCard
        this.$store.dispatch('deleteCard', activeCard)
      }
      }
  }
} 
</script>
<style scoped>
.home {
  height: 120vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.addNewCardButton {
  margin-top: auto;
  width: 21rem;
  height: 5rem;
  border: 2px solid black;
  border-radius: 0.5rem;
  background: white;
  font-size: 1.5rem;
}
.delButton {
  margin-top: 1rem;
}
</style>
