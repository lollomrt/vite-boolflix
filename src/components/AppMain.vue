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
    <!-- <div class="search-container">
        <AppSearch @buttonClick="getMovie"></AppSearch>
    </div> -->
    <div class="contents-container">
        <h2>I film di Netflix</h2> 
        <div class="movie-container">      
            <MoovieCard v-for="(element, index) in store.movieList" :key="index" :movie="element"></MoovieCard>
        </div>
        <h2>Le seire Tv di Netflix</h2>
        <div class="movie-container">
            <seriesCard v-for="(element, index) in store.seriesList" :key="index" :serie="element"></seriesCard>
        </div>
    </div>
    
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.contents-container {
    background-color: $dark;
    width: 100%;

    h2 {
        color: $secondary-color;
        padding: 2rem 1rem;
    }

    .movie-container {
        width: 100%;
        display: flex;
        justify-content: flex-between;
        padding: 1rem;
        overflow-x: scroll;

        gap: 0.5rem;

        &::-webkit-scrollbar {
            height: 0.5rem;
            width: 20vw;
        }

        /* Track */
        &::-webkit-scrollbar-track {
            background: $rest-color;

        }

        /* Handle */
        &::-webkit-scrollbar-thumb {
            background: $primary-color;
            width: 100px;
            height: 100px;
            border-radius: 20px;

        }

        /* Handle on hover */
        &::-webkit-scrollbar-thumb:hover {
            background: #555;

        }
    }
}
</style>