import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
    mode: 'history',
    // base: process.env.BASE_URL,
    routes: [{
            path: '/news',
            name: 'Index',
            component: () =>
                import ('../components/NavBar.vue')
        },
        {
            path: '/news/:id',
            name: 'Read',
            component: () =>
                import ('../components/Post.vue'),
            // props: true,
        },
        {
            path: '/news/:id/edit',
            name: 'Edit',
            component: () =>
                import ('../components/EditNewsItem.vue')

        },
        {
            path: '*',
            redirect: '/news'
        }
    ]
});