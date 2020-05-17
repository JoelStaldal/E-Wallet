<template>
<div class="add-card">
    <Header v-bind:headerText="headerText"/>
    <Card v-bind:cardStatus="cardStatus"/>
</div>
</template>
<script>

import Header from '../components/Header'
import Card from '../components/Card'

export default {
    name: "AddCard",
    components: {
        Header,
        Card
    },
    data() {
      return {
        headerText: "ADD A NEW BANK CARD",
        cardStatus: "NEW CARD"
    }
  }
}
</script>

<style>

</style>