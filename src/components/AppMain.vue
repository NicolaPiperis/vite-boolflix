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
    <cardMovie/>
</template>

<style scoped lang="scss">

</style>
