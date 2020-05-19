<template>
<div class="card-stack">
    <div class="card-stack-container">
        <Card 
            v-bind:card="card"
            v-on:click.native="setActiveCard(card.id)"
            />
    </div>
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