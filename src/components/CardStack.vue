<template>
    <div class="card-stack-container">
        <Card 
            v-for="card in getNonActiveCards"
            v-bind:key="card.id"
            v-bind:card="card"
            v-on:click.native="setActiveCard(card.id)"/>
    </div>
</template>
<script>

import Card from '../components/Card'

export default {
    name: "CardStack",
    components: {
        Card
    },
    props: {
        card: Object
    },
    methods: {
        setActiveCard(id){
            this.$store.commit('setActiveCard', id)
        }
    },
    computed: {
        getNonActiveCards(){
            return this.$store.getters.getNonActiveCards
    }
    }
}
</script>

<style scoped>
.card-stack-container {
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: 50px;
}
</style>