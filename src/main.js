import jQuery from 'jquery';
// window.$ = window.jQuery = jQuery;
import lodash from 'lodash';
// window._ = window.lodash = lodash;
require('./directives/placeholders');
require('animate.css')

import Meta from 'vue-meta'
Vue.use(Meta)

import tether from 'tether'
import bootstrap from 'bootstrap'
// import './scss/base.scss';

// import 'materialize-css/bin/materialize.css'
//import 'materialize-css/bin/materialize.js'




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




var vue = new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
}).$mount('#app')
