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



Vue.filter('formatNumber', (value, currency = '') => {
    var numberStr = parseFloat(value).toFixed(2).toString();
    var decimals = numberStr.slice(-2);
    numberStr = numberStr.substring(0, numberStr.length - 3);
    var numFormat = [];
    while (numberStr.length > 3) {
        numFormat.unshift(numberStr.slice(-3));
        numberStr = numberStr.substring(0, numberStr.length - 3);
    }
    numFormat.unshift(numberStr);
    return `${currency} ${numFormat.join(',')}.${decimals}`;
});

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router: router,
    template: '<App/>',
    components: { App }
}).$mount('#app')