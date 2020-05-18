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
            if(this.newCard.vendor == "vendor-bitcoin.svg"){
                this.newCard.color = "rgb(255,172,65)"
                this.$emit("addCard", this.newCard)
            } else {
                console.log("CIAO")
            }
        },
        setVendorAndGenerateColor(){
            this.newCard.vendor = this.vendor
            if(this.newCard.vendor == "vendor-bitcoin.svg"){
                this.newCard.color = "rgb(255,172,65)"
            }
            if(this.newCard.vendor == "vendor-blockchain.svg"){
                this.newCard.color = "rgb(113,69,219)"
            }
            if(this.newCard.vendor == "vendor-evil.svg"){
                this.newCard.color = "rgb(215,40,67)"
            }
            if(this.newCard.vendor == "vendor-ninja.svg"){
                this.newCard.color = "rgb(56,56,56)"
            }
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

.validThru {
    display: flex;
}

</style>