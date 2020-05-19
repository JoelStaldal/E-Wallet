<template>
<div class="add-card">
    <Header v-bind:headerText="headerText"/>
    <Card 
      v-bind:cardStatus="cardStatus"
      v-bind:card="newCard"
      />
    <CardForm 
      v-bind:card="newCard"
      
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
            "id": this.$store.getters.getCurrentId,
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
}
</script>

<style scoped>
</style>