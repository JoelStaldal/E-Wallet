<template>
    <div class="card-form">
        <div class="card-number">
            <p>CARD NUMBER</p>
            <input type="text" v-model="newCard.cardnumber" />
        </div>
        <div class="cardholder-name">
            <p>CARDHOLDER NAME</p>
            <input type="text" v-model="newCard.cardholder">
        </div>
        <div class="validThru">
            <p>VALID THRU</p>
            <input type="text" v-model="newCard.valid">
            <p>CCV</p>
            <input type="text">
        </div>
        <div class="vendor">
            <p>VENDOR</p>
            <form action>
            <select name="vendors">
            <option value="blank"></option>
            <option value="bitcoin">Bitcoin</option>
            <option value="blockchain">Blockchain</option>
            <option value="evil">Evil Corp</option>
            <option value="ninja">Ninja Corp</option>
            </select>
            
</form>
        </div>
        <button>ADD CARD</button>
    </div>
</template>
<script>
export default {
    name: "CardForm",
    props: {
        card: Object
    },
    data(){
        return {
            newCard: this.card
        }
    }

}
</script>

<style scoped>
button {
  margin: 1rem;
  width: 21rem;
  height: 5rem;
  border-radius: 0.5rem;
  background: black;
  color: white;
  font-size: 1.5rem;
}
.card-number input, .cardholder-name input{
    width: 21rem;
    height: 3rem;
    border: 1px solid black;
    border-radius: 0.5rem;
}
.validThru input, .CCV input {
    width: 10rem;
    height: 3rem;
    border: 1px solid black;
    border-radius: 0.5rem;
}
.vendor form select{
    width: 21rem;
    height: 3rem;
    border: 1px solid black;
    border-radius: 0.5rem;
}

</style>