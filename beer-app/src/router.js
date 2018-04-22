import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import Basket from './components/Basket.vue'

Vue.use(VueRouter);

const routes = [
    {path: '/', component: Home},
    {path: '/basket', component: Basket}
];

export const router = new VueRouter({
    routes
});