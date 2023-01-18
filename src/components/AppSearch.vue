<script>

export default {
    data() {
        return {
            value: ''
        }
    }
}

</script>

<template>
    <div class="container-search">
        <input type="text" v-model="value" @keyup.enter="$emit('buttonClick', value)">
        <button @click="$emit('buttonClick', value)">PROVA</button>
    </div>
</template>

<style scoped>
.container-search {
    display: flex;
    width: initial;
    margin: 1rem
}
</style>