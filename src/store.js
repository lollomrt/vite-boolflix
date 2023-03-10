import { reactive } from 'vue'

export const store = reactive({
    apiKey: '381a0da903ba25746f9d72313f22bae4',
    urlPopular: 'https://api.themoviedb.org/3/movie/popular?api_key=381a0da903ba25746f9d72313f22bae4&language=en-US&page=1',
    urlPopularSeries: 'https://api.themoviedb.org/3/tv/popular?api_key=381a0da903ba25746f9d72313f22bae4&language=en-US&page=1',
    urlMovie: 'https://api.themoviedb.org/3/search/movie?api_key=381a0da903ba25746f9d72313f22bae4&language=en-US&query=',
    urlSeries: 'https://api.themoviedb.org/3/search/tv?api_key=381a0da903ba25746f9d72313f22bae4&language=en-US&query=',
    urlActors1: 'https://api.themoviedb.org/3/movie/',
    urlActors2: '/credits?api_key=381a0da903ba25746f9d72313f22bae4&language=en-US',
    movieList: [],
    seriesList: [],
})