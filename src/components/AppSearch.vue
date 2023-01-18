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
        <button @click="$emit('buttonClick', value)"><i class="fa-solid fa-magnifying-glass"></i></button>
        <i class="fa-solid fa-bell"></i>
        <i class="fa-solid fa-user"></i>
    </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

.container-search {
    width: 40%;
    display: flex;
    width: initial;
    margin: 1rem;
    gap: 1rem;

    input {
        background-color: transparent;
        flex-grow: 1;
        padding: 0 1rem;
        border: 0.1rem solid $rest-color;
        border-radius: 1rem;
        color: $rest-color;

        &:focus {
            border: 0.1rem solid $secondary-color;
        }
    }

    button {
        border: none;
        background-color: transparent;
    }

    i {
        color: $rest-color;
        cursor: pointer;

        &:hover {
            color: $secondary-color;
        }
    }
}
</style>