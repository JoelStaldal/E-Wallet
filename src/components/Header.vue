<template>
<div class="Header">
    <h1>{{headerText}}</h1>
</div>
</template>
<script>
export default {
    name: "Header",
    props: {
        headerText: String
    }
}
</script>
<style scoped>
</style>