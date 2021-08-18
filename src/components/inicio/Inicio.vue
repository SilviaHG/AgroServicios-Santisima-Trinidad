<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <Carousel></Carousel>
            </div>
        </div>

        <div class="row | mt-5 | m-1 | border | border-success | rounded">
            <div class="col-12 | col-md-10">
                <h3 class="d-inline">¿Necesitas materiales para construcción? Visita nuestro catálogo 🛍️</h3>
                <router-link class="btn | btn-success | m-3" :to="{name: 'inicio'}">Ir al catálogo de materiales 🛍️</router-link>
            </div>

            <div class="col-12 | col-md-10">
                <h3 class="d-inline">¿Necesitas productos veterinarios? Visita nuestro catálogo 🛍️</h3>
                <router-link class="btn | btn-success | m-3" :to="{name: 'inicio'}">Ir al catálogo de veterinaria 🛍️</router-link>
            </div>
        </div>

        <div class="row | mt-5">
            <h2 class="text-center">Noticias en Facebook</h2>

        </div>

    </div>
</template>

<script>
import Carousel from './Carousel.vue'

export default {
    name: 'Inicio',
    components: {
        Carousel
    }
}
</script>
