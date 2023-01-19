<script>
export default {
    data() {
        return {
            hover: false
        }
    },
    props: {
        movie: Object
    },
    methods: {
        getLenguage(valore) {
            let leng = ''
            if (valore.original_language) {
                switch (valore.original_language) {
                    case 'en':
                        leng = 'gb'
                        break;

                    default:
                        leng = (valore.original_language)
                        break;
                }
                let upperLeng = leng.toUpperCase()
                return upperLeng
            }

        },
        getStars(parametro) {
            let rate = (Math.floor(parametro.vote_average / 2))
            let rateArray = []
            for (let i = 0; i < rate; i++) {
                rateArray.push('fa-solid fa-star')
            }

            let starEmpty = 5 - rate;
            for (let i = 0; i < starEmpty; i++) {
                rateArray.push('fa-regular fa-star');
            }
            return rateArray
        },
        descriptionCut() {
            if (this.movie.overview.length > 150) {
                this.movie.overview = this.movie.overview.substring(0, 150) + '...'
                return this.movie.overview
            }
            return this.movie.overview
        }
    }
}
</script>

<template lang="">
    <div class="single-card" @mouseenter="hover = true" @mouseleave="hover = false">
        <img class="img-cover" :src="`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`" alt="">
        <div class="info-content" v-if="hover">
            <h1>{{ movie.title }}</h1>
            <span>Titolo originale: {{ movie.original_title }}</span>
            <p>{{ descriptionCut() }} <a href="#">approfondisci</a></p>
            <!-- <span>{{ movie.original_language }}</span> -->
            <div class="container-voto">
                <span>Voto:</span>
                <div class="star-container">               
                <i v-for="(value, index) in getStars(movie)" :key="index" :class="value"></i>
                </div>
                <span>{{ movie.vote_average }}</span>
            </div> 
            <!-- <span>{{ movie.vote_average }}</span> -->
            <div class="lenguage-container">
                <span>Lingua originale:</span>
                <img :src="`https://www.countryflagicons.com/FLAT/64/${getLenguage(movie)}.png`" alt="{{ movie.original_language }}">
            </div>
        </div>        
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/generals.scss' as *;
</style>