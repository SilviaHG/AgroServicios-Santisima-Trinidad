<template>
  <div id="app">
    <BarraNavegacion></BarraNavegacion>
      
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <contacto></contacto>
    <ferreteria></ferreteria>
    <foot></foot>

    
  </div>
</template>

<script>
import BarraNavegacion from './components/BarraNavegacion.vue'
import foot from './components/Foot.vue'
import contacto from './components/Contacto.vue'
import ferreteria from './components/Ferreteria.vue'

export default {
  name: 'App',
  components: {
    BarraNavegacion,
    foot,
    contacto,
    ferreteria
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

@import '~bootstrap/dist/css/bootstrap.css'
</style>
