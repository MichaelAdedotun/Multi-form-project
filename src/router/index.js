import {createRouter, createWebHistory} from "vue-router";
import InfoView from "../views/InfoView.vue";
import PlanView from "../views/PlanView.vue";


const routes = [
    {
        path: '/',
        component: InfoView
    },
   {
        path: '/plan',
        component: PlanView
    },
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})