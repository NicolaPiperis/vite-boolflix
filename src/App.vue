<script>
// CHIAMATA AXIOS PRECEDENTEMENTE INSTALLATA NEL TERMINAL, PER UTILIZZO API
import axios from 'axios';
// CHIAMATA AL FILE JS STORE COME STORAGE DI RIFERIMENTO
import { store } from './store.js'
// IMPORTA COMPONENTI
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'

export default {
    components: {
        AppHeader,
        AppMain
    },
    data() {
        return{
        // ACCESSO AI DATI DELLO STORAGE PRINCIPALE
        store
        }
    },
    methods : {
        // FUNZIONE PER IL GIUSTO API PER STAMPARE LA CARDS IN BASE ALLA CONDIZIONE
        getCards () {
            let myurl = store.apiUrl;
            // SE IL VALORE DI SEARCHMOVIE E' DIVERSO DA VUOTO
            if(store.searchMovie !== "") {
                // ALLORA AGGIUNGI ALL'API IL PARAMETRO E IL VALORE DI ESSO
                myurl += `?api_key=${store.keyApiParameter}&query=${store.searchMovie}`    
            }
            else{
                myurl += `?api_key=${store.keyApiParameter}` 
            }

            axios.get(myurl)
            .then(res => {
                store.movieList = res.data.results;
            })
            .catch(err => {
                console.log(err);
            })
        },

    },
    created() {
        this.getCards();
    }
}
</script>

<template>

    <AppHeader/>
    <AppMain @mysearch="getCards"/>

</template>

<style lang="scss">
    // FOGLIO DI STILE GENERICO
    @use './styles/general.scss' as *;
</style>