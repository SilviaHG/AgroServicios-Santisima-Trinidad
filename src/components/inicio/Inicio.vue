<template>
    <div class="container-fluid">
        <div class="row">
            <Carousel></Carousel>
        </div>

        <div class="row | mt-5 | m-1">
            <h2 class="mb-4">~ Catálogo De Productos</h2>
            <CardsStore></CardsStore>
        </div>

        <div class="row | mt-5 | m-1">
            <h2>~ Testimonios</h2>
            <FeedBacksClients></FeedBacksClients>
        </div>

        <div class="row | mt-5 | m-2">
            <div class="col-8 | offset-md-3">
                <div class="card | float-end">
                    <div class="card-body">
                        <h2 class="card-title">¿Desea contactarnos?</h2>
                        <p class="card-text">Será un gusto atenderle, por ello estamos disponibles en el siguiente horario:</p>

                        <ul class="list-group | m-2">
                            <li class="list-group-item d-flex justify-content-between align-items-start active">
                                <div class="ms-2 me-auto">
                                <div class="fw-bold">Lunes a Sábado</div>
                                    7:00 am hasta 7:00 pm
                                </div>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-start active">
                                <div class="ms-2 me-auto">
                                <div class="fw-bold">Domingo</div>
                                    7:00 am hasta 1:00 pm
                                </div>
                            </li>
                        </ul>

                        <router-link class="btn | btn-success" aria-current="page" :to="{name: 'contactenos'}">Contáctenos aquí 📲</router-link>
                    </div>
                </div>
            </div>
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
