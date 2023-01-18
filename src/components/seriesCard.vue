<script>
export default {
    data() {
        return {
            hover: false
        }
    },
    props: {
        serie: Object
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
            if (this.serie.overview.length > 150) {
                this.serie.overview = this.serie.overview.substring(0, 150) + '...'
                return this.serie.overview
            }
            return this.serie.overview
        }
    }
}
</script>

<template lang="">
    <div class="single-card" @mouseenter="hover = true" @mouseleave="hover = false">
        <img class="img-cover" :src="`https://image.tmdb.org/t/p/w780${serie.backdrop_path}`" alt="">
        <div class="info-content" v-if="hover">
            <h1>{{ serie.name }}</h1>
            <span>Titolo originale: {{ serie.original_name }}</span>
            <p>{{ descriptionCut() }} <a href="#">approfondisci</a></p>
            <div class="container-voto">
                    <span>Voto:</span>
                    <div class="star-container">               
                    <i v-for="(value, index) in getStars(serie)" :key="index" :class="value"></i>                   
                    </div>
                    <span>{{ serie.vote_average }}</span>
                </div>
            <div class="lenguage-container">
                <span>Lingua originale:</span>
                <img :src="`https://www.countryflagicons.com/FLAT/64/${getLenguage(serie)}.png`" alt="{{ serie.original_language }}">
            </div>
        </div>        
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/generals.scss' as *;
</style>