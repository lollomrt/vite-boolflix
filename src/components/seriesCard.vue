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
        },
        getImage(parametro) {
            if (parametro.backdrop_path) {
                return `https://image.tmdb.org/t/p/w780${parametro.backdrop_path}`
            }
            else {
                return `https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80`
            }
        }
    }
}
</script>

<template lang="">
    <div class="single-card" @mouseenter="hover = true" @mouseleave="hover = false">
        <img class="img-cover" :src="getImage(serie)">
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