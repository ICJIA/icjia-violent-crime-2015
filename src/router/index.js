import Vue from 'vue'
import Router from 'vue-router'
import Home from 'views/Home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/murder',
      name: '1_Definitions',
      component: require('views/murder/Definitions')
    },
    {
      path: '/murder/arrestees',
      name: '2_Arrestees',
      component: require('views/murder/Arrestees')
    },
    {
      path: '/murder/convictions',
      name: '3_Convictions',
      component: require('views/murder/Convictions')
    },
    {
      path: '/murder/sentences',
      name: '4_Sentences',
      component: require('views/murder/Sentences')
    },
    {
      path: '/murder/conclusion',
      name: '5_Conclusion',
      component: require('views/murder/Conclusion')
    },
    {
       path: '/*',
       name: 'Redirect',
       redirect: '/'
   }

  ]
})
