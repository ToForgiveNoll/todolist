import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import LogAndReg from '../views/LogAndReg.vue'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/LogAndReg',
        name: 'LogAndReg',
        component: LogAndReg
    }
];

const router = new VueRouter({
    routes
});

export default router
