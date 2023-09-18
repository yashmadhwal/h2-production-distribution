import { createWebHistory, createRouter } from "vue-router";
import Home from './components/Home.vue';

// import Pages
import PageNotFound from './pages/PageNotFound.vue';
import Electricity from './pages/Electricity.vue';
import Water from './pages/Water.vue';
import Hydrogen from './pages/Hydrogen.vue';
import FillingStation from './pages/FillingStation.vue';
import Admin from './pages/Admin.vue';

const routes=[
    {
        name:'Home',
        path:'/',
        component: Home
    },
    {
        name: '404Error',
        path:'/:pathMatch(.*)*',
        component:PageNotFound
    },
    {
        name: 'Electricity',
        path: '/Electricity',
        component: Electricity
    },
    {
        name: 'Water',
        path: '/Water',
        component: Water
    },
    {
        name: 'Hydrogen',
        path: '/Hydrogen',
        component: Hydrogen
    },
    {
        name: 'FillingStation',
        path: '/FillingStation',
        component: FillingStation
    },
    {
        name: 'Admin',
        path: '/Admin',
        component: Admin
    }
];


const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;

