<template>
    <div id="card_store">

        <div class="row text-center">
            <div class="col-lg-4">
                <img src="@/assets/images/ferreteria/05-esmeriladoranagular.jpg/" class="bd-placeholder-img rounded-circle" width="140" height="140" alt="Herramienta construccion" srcset="">

                <h2>Construcción</h2>
                <p>Si buscas herramientas o materiales de construcción, estamos a total disposición para usted.</p>
                <p><router-link class="btn | btn-warning | m-3" :to="{name: 'construccion'}">Ir al catálogo 👷‍♀️</router-link></p>
            </div>

            <div class="col-lg-4">
                <img src="@/assets/images/veterinaria/pollitos-principal.jpg/" class="bd-placeholder-img rounded-circle" width="140" height="140" alt="Herramienta construccion" srcset="">

                <h2>Veterinaria</h2>
                <p>Trabajamos para darte los mejores medicamentos para tus mascotas y ganado.</p>
                <p><router-link class="btn | btn-warning | m-3" :to="{name: 'veterinaria'}">Ir al catálogo 🐄</router-link></p>
            </div>

            <div class="col-lg-4">
                <img src="@/assets/images/jardineria/masetera-nido-pasto.jpg" class="bd-placeholder-img rounded-circle" width="140" height="140" alt="Herramienta construccion" srcset="">

                <h2>Jardinería</h2>
                <p>Ofrecemos variedades de productos de jardinería, desde herramientas hasta semillas..</p>
                <p><router-link class="btn | btn-warning | m-3" :to="{name: 'jardineria'}">Ir al catálogo 🌱</router-link></p>
            </div>
        </div>

    </div>
</template>

<script>

export default {
    name: 'CardsStore'
}
</script>
