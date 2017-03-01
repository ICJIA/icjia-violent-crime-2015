export default [{
        path: '/',
        name: '0_Home',
        component: require('./views/Home.vue'),

    }, {
        path: '/murder/definition',
        name: '1_Definition',
        component: require('./views/murder/definition.vue'),

    }, {
        path: '/murder/arrestees',
        name: '1_Arrestees',
        component: require('./views/murder/arrestees.vue'),

    },
    {
        path: '/murder/convictions',
        name: '1_Convictions',
        component: require('./views/murder/convictions.vue'),

    },
    {
        path: '/murder/sentences',
        name: '1_Sentences',
        component: require('./views/murder/sentences.vue'),

    },
    {
        path: '/murder/conclusion',
        name: '1_Conclusion',
        component: require('./views/murder/conclusion.vue'),

    },

    {
        path: '/murder',
        name: 'Redirect',
        redirect: '/murder/definition'
    },



    {
        path: '/*',
        name: '0_Redirect',
        redirect: '/'
    },

];
