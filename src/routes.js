export default [{
        path: '/',
        name: '0_Home',
        component: require('./views/Home.vue'),

    },
    {
        path: '/murder/definition',
        name: '1_Definition',
        component: require('./views/murder/definition.vue'),

    },
    {
        path: '/murder/rates',
        name: '1_Rates',
        component: require('./views/murder/rates.vue'),

    },
    {
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
        name: '1_Redirect',
        redirect: '/murder/definition'
    },


    {
        path: '/rape/definition',
        name: '2_Definition',
        component: require('./views/rape/definition.vue'),

    },
    {
        path: '/rape/rates',
        name: '2_Rates',
        component: require('./views/rape/rates.vue'),

    },
    {
        path: '/rape/arrestees',
        name: '2_Arrestees',
        component: require('./views/rape/arrestees.vue'),

    },
    {
        path: '/rape/convictions',
        name: '2_Convictions',
        component: require('./views/rape/convictions.vue'),

    },
    {
        path: '/rape/sentences',
        name: '2_Sentences',
        component: require('./views/rape/sentences.vue'),

    },
    {
        path: '/rape/conclusion',
        name: '2_Conclusion',
        component: require('./views/rape/conclusion.vue'),

    },

    {
        path: '/rape',
        name: '2_Redirect',
        redirect: '/rape/definition'
    },


    {
        path: '/robbery/definition',
        name: '3_Definition',
        component: require('./views/robbery/definition.vue'),

    },
    {
        path: '/robbery/rates',
        name: '3_Rates',
        component: require('./views/robbery/rates.vue'),

    },
    {
        path: '/robbery/arrestees',
        name: '3_Arrestees',
        component: require('./views/robbery/arrestees.vue'),

    },
    {
        path: '/robbery/convictions',
        name: '3_Convictions',
        component: require('./views/robbery/convictions.vue'),

    },
    {
        path: '/robbery/sentences',
        name: '3_Sentences',
        component: require('./views/robbery/sentences.vue'),

    },
    {
        path: '/robbery/conclusion',
        name: '3_Conclusion',
        component: require('./views/robbery/conclusion.vue'),

    },

    {
        path: '/robbery',
        name: '3_Redirect',
        redirect: '/robbery/definition'
    },



    {
        path: '/*',
        name: '0_Redirect',
        redirect: '/'
    },

];
