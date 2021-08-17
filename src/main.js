import Vue from 'vue'
import App from './App.vue'

import 'bootstrap/dist/js/bootstrap.bundle'
import router from './routes.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
