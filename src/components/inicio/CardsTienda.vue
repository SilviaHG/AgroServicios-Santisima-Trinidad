<template>
    <div id="card_store">

        <div class="row text-center">
            <div class="col-lg-6">
                <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>

                <h2>Construcción</h2>
                <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
                <p><router-link class="btn | btn-warning | m-3" :to="{name: 'construccion'}">Ir al catálogo 🛍️</router-link></p>
            </div>

            <div class="col-lg-6">
                <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>

                <h2>Veterinaria</h2>
                <p>And lastly this, the third column of representative placeholder content.</p>
                <p><router-link class="btn | btn-warning | m-3" :to="{name: 'veterinaria'}">Ir al catálogo 🛍️</router-link></p>
            </div>
        </div>

    </div>
</template>

<script>

export default {
    name: 'CardsStore'
}
</script>
