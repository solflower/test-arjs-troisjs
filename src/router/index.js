import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import TestCube from '@/views/TestCube.vue'
import SignUp from '@/components/SignUp.vue'
import {createRouter, createWebHistory} from 'vue-router'

const routes =[
    {path: '/', name: 'Home', component: Home},
    {path: '/Login', name: 'Login', component: Login},
    {path: '/ar', name: 'AR', component: TestCube},
    {path: '/signup', name: 'Signup', component: SignUp},
 ]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router