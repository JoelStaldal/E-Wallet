<template>
<div class="card">
    <p>{{cardStatus}}</p>
    <div class="card-container" v-bind:style="{background: card.color}">
        <div class="icons">
           <img :src="require(`../assets/${card.chip}`)">
           <img :src="require(`../assets/${card.vendor}`)">
        </div>
        <div class="card-number">
            <h2>{{card.cardnumber}}</h2>
        </div>
        <div class="bottom">
            <div class="name">
                <p>CARDHOLDER NAME</p>
                <p>{{card.cardholder}}</p>
            </div>
            <div class="valid">
                <p>VALID THRU</p>
                <p>{{card.valid}}</p>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    name: "Card",
    props: {
        cardStatus: String,
        card: Object
    }
}
</script>

<style scoped>
.card {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: monospace;
}
.card-container {
    -webkit-box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.75);
    box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.75);
    height: 13rem;
    width: 21rem;
    border-radius: 0.5rem;
}
.icons {
    width: 19rem;
    height: 5rem;
    padding: 1rem 1rem 0 1rem;
    display: flex;
    justify-content: space-between;
}

.card-number {
    font-size: 1.1rem;
}

.bottom {
    margin: 0;
    display: flex;
    justify-content: space-between;
}

.name p, .valid p {
     margin: 0;
     display: flex;
     justify-content: space-between;
}

img {
    max-height: 100%;
}

img:nth-of-type(2){
    margin-top: -1rem;

}
.white {
    color: white;
}
</style>