import Vue from 'vue'
import VueRouter from 'vue-router'
// import Dashboard from '@/views/Dashboard'
// import GridSystem from '@/views/GridSystem'

// import bp from '@/views/bp'
// import typo from '@/views/typo'
// import table from '@/views/table'
import Main from '@/views/Main'
import Together from '@/views/Together'
import MovieReview from '@/views/MovieReview'
import MovieList from '@/views/movieList'
import board from '@/views/board'
import news from '@/views/news'
import test from '@/views/test'
Vue.use(VueRouter)

const routes = [
    
    {
        path: '/',
        name:'Main',
        component: Main
    },
    {
        path: '/together',
        name:'Together',
        component: Together
    },
    {
        path: '/moviereview',
        name:'MovieReview',
        component: MovieReview
    },
    {
        path: '/movieList',
        name:'MovieList',
        component: MovieList
    },
    {
        path: '/board',
        name:'board',
        component: board
    },
    {
        path: '/news',
        name:'news',
        component: news
    },
    {
        path: '/test',
        name:'test',
        component: test
    },
]

const router = new VueRouter({
    mode:'history',
    routes
})

export default router