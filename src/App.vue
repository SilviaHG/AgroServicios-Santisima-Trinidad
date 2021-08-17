<template>
  <div id="app">
    <BarraNavegacion></BarraNavegacion>
    <router-view></router-view>
  </div>
</template>

<script>
import BarraNavegacion from './components/BarraNavegacion.vue'

export default {
  name: 'App',
  components: {
    BarraNavegacion
  }

}
</script>

<style>
@import '~bootstrap/dist/css/bootstrap.css'
</style>
