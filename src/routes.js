import Vue from 'vue';
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({

    routes: [
        {
            path: '/',
            name: 'inicio',
            component: require('./components/inicio/Inicio').default,
        },
        {
            path: '/productos-veterinaria',
            name: 'veterinaria',
            component: require('./components/inicio/Inicio').default,
        },
        {
            path: '/productos-construccion',
            name: 'construccion',
            component: require('./components/Ferreteria').default,
        },
        {
            path: '/contactenos',
            name: 'contactenos',
            component: require('./components/inicio/Inicio').default,
        },
        {
            path: '*',
            component: require('./components/404').default,
        }
    ],

    mode: 'history',
});
