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
    }
}
</script>

<template>
  <AppHeader/>
  <AppMain/>
</template>

<style lang="scss">
    // FOGLIO DI STILE GENERICO
    @use './styles/general.scss' as *;
</style>