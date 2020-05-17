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
            this.$root.cardList.forEach(card => {
                if(card.id == id){
                    card.active = true
                } else {
                    card.active = false
                }
            });
        }
    }
}
</script>

<style scoped>

</style>