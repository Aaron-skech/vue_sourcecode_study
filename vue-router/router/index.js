import Vue from 'vue';
import VueRouter from '../vue-router/index';

import Home from '../views/home.vue'
import About from '../views/about.vue'


// use方法会调用install方法 会注册全局组件  router-linkrouter-view

let routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/about',
        component: About,
        children: [
            {
                path: 'a',
                component: {
                    render: h => h('h1',['about a'])
                }
            },
            {
                path: 'b',
                component: {
                    render: h => h('h1',['about b'])
                }
            },
        ]
    }
]

Vue.use(VueRouter);

export default new VueRouter({
    routes,
    mode:"hash"
})