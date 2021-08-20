import Vue from 'vue';
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({

    routes: [
        {
            path: '/',
            name: 'inicio',
            component: require('./components/inicio/Inicio').default,
            meta: {
                title: 'Inicio',
                auth: true
            },
        },
        {
            path: '/productos-veterinaria',
            name: 'veterinaria',
            component: require('./components/inicio/Inicio').default,
            meta: {
                title: 'Catálogo Veterinaria',
                auth: true
            },
        },
        {
            path: '/productos-construccion',
            name: 'construccion',
            component: require('./components/Ferreteria').default,
            meta: {
                title: 'Catálogo Ferretería',
                auth: true
            },
        },
        {
            path: '/contactenos',
            name: 'contactenos',
            component: require('./components/Contacto').default,
            meta: {
                title: 'Contáctenos',
                auth: true
            },
        },
        {
            path: '*',
            component: require('./components/404').default,
            meta: {
                title: 'Página no encontrada',
                auth: true
            },
        }
    ],

    mode: 'history',
});
