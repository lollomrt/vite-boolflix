<script>
import { store } from '../store.js'
import AppSearch from './AppSearch.vue'
import axios from 'axios'
export default {
    components: {
        AppSearch
    },
    data() {
        return {
            store
        }
    },
    methods: {
        getMovie(parametro) {
            let newUrl = store.urlMovie + parametro
            axios.get(newUrl).then((response) => {
                store.movieList = response.data.results
                console.log(store.movieList)
            })
        },
        getSerie(parametro) {
            let seriesUrl = store.urlSeries + parametro
            axios.get(seriesUrl).then((response) => {
                store.seriesList = response.data.results
            })
        },
        getSearch(parametro) {
            this.getMovie(parametro)
            this.getSerie(parametro)
        }
    }
}
</script>

<template lang="">
    <header>
        <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="">
        <AppSearch @buttonClick="getSearch"></AppSearch>
    </header>
</template>

<style lang="scss" scoped>
header {
    height: 75px;
    background-color: #000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 4rem;


    img {
        width: 70px;
    }
}
</style>