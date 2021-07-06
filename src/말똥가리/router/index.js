import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '@/views/Dashboard'
import GridSystem from '@/views/GridSystem'
import test from '@/views/test'
import test2 from '@/views/test2'
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name:'Dashboard',
        component: Dashboard
    },
    {
        path: '/grid-system',
        name:'GridSystem',
        component: GridSystem
    },
    {
        path: '/test',
        name:'test',
        component: test
    },
    {
        path: '/test2',
        name:'test2',
        component: test2
    }
]

const router = new VueRouter({
    mode:'history',
    routes
})

export default router