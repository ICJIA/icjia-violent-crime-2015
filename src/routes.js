export default [{
        path: '/',
        name: 'Home',
        component: require('./views/Home.vue'),

    }, {
        path: '/murder/definitions',
        name: '1_Definitions',
        component: require('./views/murder/Page01.vue'),

    }, {
        path: '/murder/arrestees',
        name: '1_Arrestees',
        component: require('./views/murder/Page02.vue'),

    },
    {
        path: '/murder/convictions',
        name: '1_Convictions',
        component: require('./views/murder/Page03.vue'),

    },
    {
        path: '/murder/sentences',
        name: '1_Sentences',
        component: require('./views/murder/Page04.vue'),

    },
    {
        path: '/murder/conclusion',
        name: '1_Conclusion',
        component: require('./views/murder/Page04.vue'),

    },
    {
        path: '/murder',
        name: 'Redirect',
        redirect: '/murder/definitions'
    },



    {
        path: '/*',
        redirect: '/'
    },

];
