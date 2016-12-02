export default [{
        path: '/section01',
        name: 's01p00',
        component: require('./views/section01/Introduction.vue'),

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
        path: '/section02',
        name: 's02p00',
        component: require('./views/section02/Introduction.vue'),

    }, {
        path: '/section02/page01',
        name: 's02p01',
        component: require('./views/section02/Page01.vue'),

    }, {
        path: '/section02/page02',
        name: 's02p02',
        component: require('./views/section02/Page02.vue'),

    },
    {
        path: '/section02/page03',
        name: 's02p03',
        component: require('./views/section02/Page03.vue'),

    },
    {
        path: '/section02/page04',
        name: 's02p04',
        component: require('./views/section02/Page04.vue'),

    },
    {
        path: '/section02/page05',
        name: 's02p05',
        component: require('./views/section02/Page05.vue'),

    },

    {
        path: '/*',
        redirect: '/section01'
    }
];