<script>
import AppMain from './components/AppMain.vue'
import AppHeader from './components/AppHeader.vue'
import axios from 'axios'
import { store } from './store'

export default {
  components: {
    AppMain,
    AppHeader
  },
  // data() {
  //   return {
  //     store
  //   }
  // },
  // created() {
  //   this.getPopular()
  // },
  // methods: {
  //   getPopular() {
  //     axios.get(store.urlPopular).then((response) => {
  //       store.popularMovie = response.data.results
  //       console.log(store.popularMovie)
  //     })
  //   }
  // }
}
</script>

<template>
  <div>
    <AppHeader />
    <AppMain />
  </div>
</template>

<style lang="scss">
@use "./styles/partials/variables" as *;
@use './styles/generals.scss' as *;
</style>
