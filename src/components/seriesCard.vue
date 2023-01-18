<script>
export default {
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

        }
    }
}
</script>

<template lang="">
    <div class="single-card">
        <h1>{{ serie.name }}</h1>
        <span>{{ serie.original_name }}</span>
        <span>{{ serie.original_language }}</span>
        <span>{{ serie.vote_average }}</span>
        <img :src="`https://www.countryflagicons.com/FLAT/64/${getLenguage(serie)}.png`" alt="{{ serie.original_language }}">
    </div>
</template>

<style lang="scss" scoped>
.single-card {
    min-width: 300px;
    background-color: rgb(119, 26, 26);
    display: flex;
    flex-direction: column;
    border: 1px solid #000;

    img {
        width: 10%;
    }
}
</style>