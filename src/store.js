import { reactive } from 'vue'

export const store = reactive({
    apiKey: '381a0da903ba25746f9d72313f22bae4',
    urlMovie: 'https://api.themoviedb.org/3/search/movie?api_key=381a0da903ba25746f9d72313f22bae4&language=en-US&query=',
    movieList: [],
})