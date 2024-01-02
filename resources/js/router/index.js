import { createRouter, createWebHistory } from "vue-router";

import notFound from '../components/NotFound.vue';
import invoiceIndex from '../components/invoices/index.vue';
import invoiceNew from '../components/invoices/new.vue';

const routes = [
    {
        path: '/',
        component: invoiceIndex
    },
    {
        path: '/invoice/new',
        component: invoiceNew
    },
    {
        path: '/:pathMatch(.*)*',
        component: notFound
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router