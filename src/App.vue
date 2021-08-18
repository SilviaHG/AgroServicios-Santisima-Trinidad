<template>
  <div id="app">
    <header>
      <BarraNavegacion></BarraNavegacion>
    </header>

    <section>
      <transition name="slide">
        <router-view></router-view>
      </transition>
    </section>

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
