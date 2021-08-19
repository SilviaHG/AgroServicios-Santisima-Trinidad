<template>
    <div id="carouselExampleIndicators" class="carousel | slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>

        <div class="carousel-inner">
            <div class="carousel-item | active">
                <img src="@/assets/images/imagen_carousel_veterinaria.jpg" class="image-size-cover" alt="Imagen">
            </div>
            <div class="carousel-item">
                <img src="@/assets/images/products/sombreros-tipicos.jpg" class="image-size-cover" alt="Imagen">
            </div>
            <div class="carousel-item">
                <img src="@/assets/images/products/maseteras-blanca-cafe.jpg" class="image-size-cover" alt="Imagen">
            </div>
        </div>

        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Anterior</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Próxima</span>
        </button>
    </div>
</template>

<script>
export default {
    name: 'Carousel'
}
</script>

<style>
    .image-size-cover {
        width: 100%;
        height: 500px;
        object-fit: cover;
    }
</style>
