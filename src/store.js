// SINTASSI FILE JS STORAGE
import {reactive} from 'vue'

export const store = reactive({
    // KEY PERSONALE API
    keyApiParameter : '2f635087a2b65590c783181db0b3d742',
    apiUrl : 'https://api.themoviedb.org/3/search/movie',
    searchMovie: '',
    movieList : []
});