<template>
    <div class="container-fluid">
        <div class="row">
            <Carousel></Carousel>
        </div>

        <div class="row | mt-5 | m-1">
            <CardsStore></CardsStore>
        </div>

        <div class="row | mt-5 | m-1">
            <h2>~ Testimonios</h2>
            <FeedBacksClients></FeedBacksClients>
        </div>

    </div>
</template>

<script>
import Carousel from './Carousel.vue'
import CardsStore from './CardsTienda.vue'
import FeedBacksClients from './FeedBacksClients.vue'

export default {
    name: 'Inicio',
    components: {
        Carousel,
        CardsStore,
        FeedBacksClients
    }
}
</script>
