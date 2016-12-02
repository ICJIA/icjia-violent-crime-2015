require('./bootstrap.js');

import Vue from 'vue'

import VueRouter from 'vue-router'
import routes from './routes.js'

Vue.use(VueRouter)

// https://github.com/marcosmoura/vue-material
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
Vue.use(VueMaterial)
Vue.material.theme.register('default', {
    primary: 'grey',
    accent: 'blue'
})





import App from './App'


const router = new VueRouter({
    mode: 'history',
    linkActiveClass: 'active',
    base: __dirname,
    routes: routes
})


/* eslint-disable no-new */
new Vue({
    router: router,
    el: '#app',
    template: '<App/>',
    components: { App }
}).$mount('#app')