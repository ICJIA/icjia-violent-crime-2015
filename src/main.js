require('./bootstrap.js');
import Vue from 'vue'
import App from './App'

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

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router: router,
    template: '<App/>',
    components: { App }
}).$mount('#app')