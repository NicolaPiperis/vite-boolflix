<script>
// CHIAMATA AL FILE JS STORE COME STORAGE DI RIFERIMENTO
import { store } from '../store.js'
import cardMovie from './cardMovie.vue'

export default {
    name : "AppMain",
    components: {
        cardMovie
    },
    data() {
        return{
        // ACCESSO AI DATI DELLO STORAGE PRINCIPALE
        store
        }
    }
}
</script>

<template>

    <main>

        <div class="card_container">

            <cardMovie v-for="(movie, index) in store.movieList" :key="movie.id" :details="movie"/>

        </div>

    </main>

</template>

<style scoped lang="scss">

    .card_container{
        display: flex;
        flex-wrap: wrap;
        gap: 30px;
        margin: 50px 50px;
        text-align: center;
    }

</style>
