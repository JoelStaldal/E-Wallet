<template>
<div class="card">
    <p>{{cardStatus}}</p>
    <div class="card-container" v-bind:style="{background: card.color}">
        <div class="icons">
           <img src="../assets/chip-dark.svg">
           <img src="../assets/vendor-bitcoin.svg">
        </div>
        <div class="card-number">
            <h2>{{card.cardnumber}}</h2>
        </div>
        <div class="name-date">
            <p>CARDHOLDER NAME</p>
            <p>{{card.cardholder}}</p>
            <p>VALID THRU</p>
            <p>{{card.valid}}</p>
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
    border: 1px solid black;
}
.card-container {
    -webkit-box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.75);
    box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.75);
    height: 13rem;
    width: 21rem;
    border-radius: 0.5rem;
}
.name-date {
    font-size: 0.5rem;
    height: 4rem;
    display: flex;
}
.icons {
    width: 19rem;
    height: 5rem;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    
}
.card-number {
    height: 2rem;
}

img {
    max-height: 100%;
}

img:nth-of-type(2){
    margin-top: -1rem;

}
</style>