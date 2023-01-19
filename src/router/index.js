import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import TestCube from '@/views/TestCube.vue'
import {createRouter, createWebHistory} from 'vue-router'

const routes =[
    {path: '/', name: 'Home', component: Home},
    {path: '/Login', name: 'Login', component: Login},
    {path: '/ar', name: 'AR', component: TestCube}
 ]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router