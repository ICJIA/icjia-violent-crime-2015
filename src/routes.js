export default [{
        path: '/',
        name: 'Home',
        component: require('./views/Home.vue'),

    }, {
        path: '/section01/page01',
        name: 's01p01',
        component: require('./views/section01/Page01.vue'),

    }, {
        path: '/section01/page02',
        name: 's01p02',
        component: require('./views/section01/Page02.vue'),

    },
    {
        path: '/section01/page03',
        name: 's01p03',
        component: require('./views/section01/Page03.vue'),

    },
    {
        path: '/section01/page04',
        name: 's01p04',
        component: require('./views/section01/Page04.vue'),

    },
    {
        path: '/section01/page05',
        name: 's01p05',
        component: require('./views/section01/Page05.vue'),

    },

    {
        path: '/*',
        redirect: '/'
    }
];