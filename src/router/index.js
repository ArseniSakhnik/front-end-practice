import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'addcontract',
        component: () => import('@/views/AddContract.vue')
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('@/views/Dashboard.vue')
    },
    {
        path: '/open-tasks',
        name: 'Open-tasks',
        component: () => import('@/views/OpenTasks.vue')
    },
    {
        path: '/Step-2',
        name: 'Step-2',
        component: () => import('@/views/AddContractStep2')
    },
    {
        path: '/Step-3',
        name: 'Step-3',
        component: () => import('@/views/AddContractStep3')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
