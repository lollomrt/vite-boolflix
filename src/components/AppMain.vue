<script>
import axios from 'axios'
// import AppSearch from './AppSearch.vue'
import MoovieCard from './MoovieCard.vue'
import seriesCard from './seriesCard.vue'
import { store } from '../store'

export default {
    components: {
        // AppSearch,
        MoovieCard,
        seriesCard
    },
    data() {
        return {
            store
        }
    },
    // methods: {
    //     getMovie(parametro) {
    //         let newUrl = store.urlMovie + parametro
    //         axios.get(newUrl).then((response) => {
    //             store.movieList = response.data.results
    //             console.log(store.movieList)
    //         })
    //     }
    // }
}
</script>

<template lang="">
    <div class="search-container">
        <!-- <AppSearch @buttonClick="getMovie"></AppSearch> -->
    </div>
    <div class="movie-container">       
        <MoovieCard v-for="(element, index) in store.movieList" :key="index" :movie="element"></MoovieCard>
    </div>
    <div class="movie-container">
        <seriesCard v-for="(element, index) in store.seriesList" :key="index" :serie="element"></seriesCard>
    </div>
</template>

<style lang="scss" scoped>
.movie-container {
    padding: 1rem;
    width: 100vw;
    display: flex;
    justify-content: flex-between;
    background-color: #fff;
    overflow-x: scroll;
    gap: 1rem
}
</style>