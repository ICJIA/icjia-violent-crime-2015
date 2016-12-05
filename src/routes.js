export default [{
        path: '/section01',
        name: '1_Introduction',
        component: require('./views/section01/Introduction.vue'),

    }, {
        path: '/section01/page01',
        name: '1_Page 1',
        component: require('./views/section01/Page01.vue'),

    }, {
        path: '/section01/page02',
        name: '1_Page 2',
        component: require('./views/section01/Page02.vue'),

    },
    {
        path: '/section01/page03',
        name: '1_Page 3',
        component: require('./views/section01/Page03.vue'),

    },
    {
        path: '/section01/page04',
        name: '1_Page 4',
        component: require('./views/section01/Page04.vue'),

    },
    {
        path: '/section01/page05',
        name: '1_Page 5',
        component: require('./views/section01/Page05.vue'),

    },
    {
        path: '/section02',
        name: '2_Introduction',
        component: require('./views/section02/Introduction.vue'),

    }, {
        path: '/section02/page01',
        name: '2_Page 1',
        component: require('./views/section02/Page01.vue'),

    }, {
        path: '/section02/page02',
        name: '2_Page 2',
        component: require('./views/section02/Page02.vue'),

    },
    {
        path: '/section02/page03',
        name: '2_Page 3',
        component: require('./views/section02/Page03.vue'),

    },
    {
        path: '/section02/page04',
        name: '2_Page 4',
        component: require('./views/section02/Page04.vue'),

    },
    {
        path: '/section02/page05',
        name: '2_Page 5',
        component: require('./views/section02/Page05.vue'),

    },

    {
        path: '/*',
        name: 'Redirect',
        redirect: '/section01'
    }
];