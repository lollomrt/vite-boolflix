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
        <div class="title-container">
            <h2>I film più popolari</h2>
            <!-- <select name="" id="">
                <option value="">prova</option>
            </select> -->
            <h2>trovati: {{ store.movieList.length }} film</h2>
        </div>        
        <div class="movie-container">      
            <MoovieCard v-for="(element, index) in store.movieList" :key="index" :movie="element"></MoovieCard>
        </div>
        <div class="title-container">
            <h2>Le seire Tv più popolari</h2>
            <h2>trovate: {{ store.seriesList.length }} serie Tv</h2>
        </div>
        <div class="movie-container">
            <seriesCard v-for="(element, index) in store.seriesList" :key="index" :serie="element"></seriesCard>
        </div>
    </div>
    
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.contents-container {
    background-color: $dark;
    padding: 0 0 0 3rem;
    width: 100%;

    .title-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 3rem 1rem 0;

        select {
            width: 30%;
            background-color: $secondary-color;
            border: none;
            border-radius: 20px;
            padding: 0.1rem 1rem;
        }

        h2 {
            color: $secondary-color;
            font-size: 1rem;
            padding: 0.5rem 1rem;
            text-transform: uppercase;
        }

    }

    .movie-container {
        display: flex;
        justify-content: flex-between;
        margin: 0 0 0 1rem;
        margin-bottom: 2rem;
        overflow-x: scroll;
        gap: 0.5rem;
        -webkit-mask-image: linear-gradient(90deg, rgba(0, 0, 0, 1) 90%, rgba(0, 0, 0, 0) 100%);
        // mask-image: linear-gradient(90deg, rgba(0, 0, 0, 1) 5%, rgba(220, 219, 209, 0) 100%);

        &::-webkit-scrollbar {
            height: 0.3rem;
            max-width: 10px;
            margin: 5rem;
        }

        /* Track */
        &::-webkit-scrollbar-track {
            background: $rest-color;

        }

        /* Handle */
        &::-webkit-scrollbar-thumb {
            background: $primary-color;
            max-width: 10px;
            height: 10px;
            border-radius: 20px;

        }

        /* Handle on hover */
        &::-webkit-scrollbar-thumb:hover {
            background: $primary-color;

        }

    }
}
</style>