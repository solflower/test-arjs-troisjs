import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import {createRouter, createWebHistory} from 'vue-router'

const routes =[
    {path: '/', name: 'Home', component: Home},
    {path: '/Login', name: 'Login', component: Login}
 ]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router