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
  },
  title: 'Inicio',

  watch: {
    '$route': {
      handler: (to) => {
        document.title = to.meta.title + ' - ' + 'AgroServicios Santísima Trinidad' || 'AgroServicios Santísima Trinidad'
      },

      immediate: true
    }
  },
}
</script>

<style>
@import '~bootstrap/dist/css/bootstrap.css'
</style>
