import Vue from 'vue'
import VueRouter from 'vue-router'

import top from './top/top'
import singUp from './singUp/singUp'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        { path: '/', component: top},
        { path: '/singUp', component: singUp},
        { path: '/login', component: top},
        { path: '/logout', component: top},
        { path: '/search', component: top},
        { path: '/gener', component: top},
        { path: '/hot', component: top},
        { path: '/help', component: top},
    ]
})