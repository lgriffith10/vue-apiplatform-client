import { createRouter, createWebHistory } from "vue-router";

import { Home, Login, AgentView } from '@/teams/views';

const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/login',
        component: Login,
        name: 'Login'
    },
    {
        path: '/agent/:uuid',
        component: AgentView,
        name: 'AgentView'
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    const token = window.localStorage.getItem('token');

    if (!token && to.path !== '/login') {
        next({ name: 'Login' })
    }

    next();
})

export { router };
