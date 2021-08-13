<template>
  <div id="app">
    <BarraNavegacion></BarraNavegacion>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Bienvenida al sitio web de Agroservicios Santisima Trinidad en Palmira"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import BarraNavegacion from './components/BarraNavegacion.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    BarraNavegacion
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
