require('./bootstrap.js');


import Vue from 'vue'


import VueRouter from 'vue-router'
import routes from './routes.js'
Vue.use(VueRouter)
const router = new VueRouter({
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 }
    },
    linkActiveClass: 'active',
    base: __dirname,
    routes: routes
})





// https://github.com/marcosmoura/vue-material
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
Vue.use(VueMaterial)
Vue.material.theme.register('default', {
    primary: 'grey',
    accent: 'blue'
})

Vue.material.theme.register('white', {
    primary: 'white',
    accent: 'blue'
})


import App from './App'


/* eslint-disable no-new */
new Vue({
    router: router,
    el: '#app',
    template: '<App/>',
    components: { App }
}).$mount('#app')