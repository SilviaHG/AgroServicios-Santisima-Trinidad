<template>
  <div id="app">
    <header>
      <BarraNavegacion></BarraNavegacion>
    </header>

    <section class="container">
      <transition name="slide">
        <router-view></router-view>
      </transition>
    </section>

    <foot></foot>

  </div>
</template>

<script>
import BarraNavegacion from './components/BarraNavegacion.vue'
import foot from './components/Foot.vue'

export default {
  name: 'App',
  components: {
    BarraNavegacion,
    foot
  }
}
</script>

<style>
@import '~bootstrap/dist/css/bootstrap.css'
</style>
