<script>
// CHIAMATA AXIOS PRECEDENTEMENTE INSTALLATA NEL TERMINAL, PER UTILIZZO API
import axios from 'axios';
// CHIAMATA AL FILE JS STORE COME STORAGE DI RIFERIMENTO
import { store } from './store.js'
// IMPORTA COMPONENTI
import AppHeader from './components/AppHeader.vue.js'

export default {
  components: {
    AppHeader
  }
}
</script>

<template>
  <AppHeader/>
</template>

<style scoped lang="scss">
</style>
