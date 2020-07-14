import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'addcontract',
        component: () => import('@/components/AddContract.vue')
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('@/components/Dashboard.vue')
    },
    {
        path: '/open-tasks',
        name: 'Open-tasks',
        component: () => import('@/components/OpenTasks.vue')
    },
    {
        path: '/Step-2',
        name: 'Step-2',
        component: () => import('@/components/AddContractStep2')
    },
    {
        path: '/Step-3',
        name: 'Step-3',
        component: () => import('@/components/AddContractStep3')
    },
    {
        path: '/Results',
        name: 'Results',
        component: () => import('@/components/Results')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
