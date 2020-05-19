<template>
    <div class="card-form">
        <div class="card-number">
            <label>CARD NUMBER</label>
            <input type="text" v-model="newCard.cardnumber" />
        </div>
        <div class="cardholder-name">
            <label>CARDHOLDER NAME</label>
            <input type="text" v-model="newCard.cardholder">
        </div>
        <div class="validThruText">
            <label>VALID THRU</label>
            <label>CCV</label>
        </div>
        <div class="validThruInput">
            <input type="text" v-model="newCard.valid">
            <input type="text">
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
            <button v-on:click="fireAddCardEvent">ADD CARD</button>
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
            newCard: this.card,
            vendor: ""
        }
    },
    methods: {
        fireAddCardEvent(){
            this.$emit("addCard", this.newCard)
        },
        setVendorAndGenerateColor(){
            this.newCard.vendor = this.vendor
            if(this.newCard.vendor == "vendor-bitcoin.svg"){
                this.newCard.color = "rgb(255,172,65)"
                this.newCard.textColor = "black"
            }
            if(this.newCard.vendor == "vendor-blockchain.svg"){
                this.newCard.color = "rgb(113,69,219)"
                this.newCard.textColor = "white"
            }
            if(this.newCard.vendor == "vendor-evil.svg"){
                this.newCard.color = "rgb(215,40,67)"
                this.newCard.textColor = "white"
            }
            if(this.newCard.vendor == "vendor-ninja.svg"){
                this.newCard.color = "rgb(56,56,56)"
                this.newCard.textColor = "white"
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
.validThruInput input {
    width: 10rem;
    height: 3rem;
    border: 1px solid black;
    border-radius: 0.5rem;
    font-size: 1rem;
}
.vendor select {
    width: 21rem;
    height: 3rem;
    border: 1px solid black;
    border-radius: 0.5rem;
}

.validThruInput {
    display: flex;
    justify-content: space-evenly;
}
.validThruText {
    display: flex;
    justify-content: space-evenly;
}
.card-number, .cardholder-name, .vendor {
    margin-top: 0.5rem;
}
</style>