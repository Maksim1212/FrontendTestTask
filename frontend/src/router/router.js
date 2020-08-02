import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
    mode: 'history',
    // base: process.env.BASE_URL,
    routes: [{
            path: '/news',
            name: 'index',
            component: () =>
                import ('../components/NavBar.vue')
        },
        {
            path: '/news/:id',
            name: 'read',
            component: () =>
                import ('../components/Post.vue'),
            props: true,
        },
        {
            path: '*',
            redirect: '/news'
        }
    ]
});