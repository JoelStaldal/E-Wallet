<template>
    <div class="card-form">
        <div class="card-number">
            <label>CARD NUMBER</label>
            <input type="text" placeholder="XXXX-XXXX-XXXX-XXXX" v-mask="'####-####-####-####'" v-model="newCard.cardnumber"/>
        </div>
        <div class="cardholder-name">
            <label>CARDHOLDER NAME</label>
            <input type="text" maxlength="30" v-model="newCard.cardholder">
        </div>
        <div class="validThruAndCCV">
            <div class="validThru">
                <label>VALID THRU</label>
                <input type="tel" placeholder="MM/YY" v-mask="'##/##'" v-model="newCard.valid">
            </div>
            <div class="CCV">
                <label>CCV</label>
                <input type="text" placeholder="XXX" v-mask="'###'">
            </div>
        </div>
        <div class="vendor">
            <label>VENDOR</label>
            <select v-on:change="setVendorAndGenerateColor" v-model="vendor">
            <option value="vendor-bitcoin.svg">Bitcoin</option>
            <option value="vendor-blockchain.svg">Blockchain</option>
            <option value="vendor-evil.svg">Evil Corp</option>
            <option value="vendor-ninja.svg">Ninja Corp</option>
            </select>
        </div>
            <button v-on:click="addCard">ADD CARD</button>
    </div>
</template>
<script>
import {mask} from 'vue-the-mask'
export default {
    name: "CardForm",
    directives: {mask},
    props: {
        card: Object,
    },
    data(){
        return {
            newCard: this.card,
            vendor: ""
        }
    },
    methods: {
        addCard(){
            this.$store.dispatch('addCard', this.newCard)
            console.log(this.newCard)
            this.$router.push("/")
        },
        setVendorAndGenerateColor(){
            this.newCard.vendor = this.vendor
            if(this.newCard.vendor == "vendor-bitcoin.svg"){
                this.newCard.color = "rgb(255,172,65)"
                this.newCard.textColor = "black"
                this.newCard.chip = "chip-dark.svg"
            }
            if(this.newCard.vendor == "vendor-blockchain.svg"){
                this.newCard.color = "rgb(113,69,219)"
                this.newCard.textColor = "white"
                this.newCard.chip = "chip-light.svg"
            }
            if(this.newCard.vendor == "vendor-evil.svg"){
                this.newCard.color = "rgb(215,40,67)"
                this.newCard.textColor = "white"
                this.newCard.chip = "chip-light.svg"
            }
            if(this.newCard.vendor == "vendor-ninja.svg"){
                this.newCard.color = "rgb(56,56,56)"
                this.newCard.textColor = "white"
                this.newCard.chip = "chip-light.svg"
            }
        }
    }
}
</script>

<style scoped>
button {
  margin: 1rem 0 1rem 0;
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
    font-size: 1rem;
}
.validThruAndCCV input {
    width: 10rem;
    height: 3rem;
    border: 1px solid black;
    border-radius: 0.5rem;
    font-size: 1rem;
}
.validThru, .CCV {
    display: flex;
    flex-direction: column;
    text-align: left;
}
.validThruAndCCV {
    display: flex;
    justify-content: space-evenly;
}

.vendor select {
    width: 21rem;
    height: 3rem;
    border: 1px solid black;
    border-radius: 0.5rem;
}
.card-number, .cardholder-name, .validThru, .CCV, .vendor {
    margin-top: 0.5rem;
}
</style>