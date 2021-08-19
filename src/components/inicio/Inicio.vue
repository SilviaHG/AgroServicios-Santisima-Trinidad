<template>
    <div class="container-fluid">
        <div class="row">
            <Carousel></Carousel>
        </div>

        <div class="row | mt-5 | m-1">
            <CardsStore></CardsStore>    
        </div>

    </div>
</template>

<script>
import Carousel from './Carousel.vue'
import CardsStore from './CardsTienda.vue'

export default {
    name: 'Inicio',
    components: {
        Carousel,
        CardsStore
    }
}
</script>
