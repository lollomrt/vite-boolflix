<script>
export default {
    props: {
        movie: Object
    }
}
</script>

<template lang="">
    <div class="single-card">
        <h1>{{ movie.title }}</h1>
        <span>{{ movie.original_title }}</span>
        <span>{{ movie.original_language }}</span>
        <span>{{ movie.vote_average }}</span>
    </div>
</template>

<style lang="scss" scoped>
.single-card {
    min-width: 300px;
    background-color: rgb(119, 26, 26);
    display: flex;
    flex-direction: column;
    border: 1px solid #000;

}
</style>