<template>
<div class="add-card">
    <Header v-bind:headerText="headerText"/>
    <Card 
      v-bind:cardStatus="cardStatus"
      v-bind:card="newCard"
      />
    <CardForm 
      v-bind:card="newCard"
      v-on:addCard="addCardHandler"
      />
</div>
</template>
<script>

import Header from '../components/Header'
import Card from '../components/Card'
import CardForm from '../components/CardForm'

export default {
    name: "AddCard",
    components: {
        Header,
        Card,
        CardForm
    },
    data() {
      return {
        headerText: "ADD A NEW BANK CARD",
        cardStatus: "NEW CARD",
        newCard: {
            "id": this.$root.cardList.length + 1,
            "cardholder": "FIRSTNAME LASTNAME",
            "cardnumber": "XXXX XXXX XXXX XXXX",
            "valid": "MM/YY",
            "color": "rgb(209,209,209)",
            "active": false,
            "vendor": "vendor-bitcoin.svg",
            "chip": "chip-dark.svg"
        }
    }
  },
  methods: {
    addCardHandler(newCard){
      console.log(newCard)
      this.$root.cardList.push(newCard)
      this.$router.push("/")
    }
  }
}
</script>

<style scoped>
</style>