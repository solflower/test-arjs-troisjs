import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import TestCube from '@/views/TestCube.vue'
import SignUp from '@/components/SignUp.vue'
import Image from '@/views/ImageTrack.vue'
import HandMade from '@/views/HandMadeMarker.vue'
import {createRouter, createWebHistory} from 'vue-router'

const routes =[
    {path: '/', name: 'Home', component: Home},
    {path: '/Login', name: 'Login', component: Login},
    {path: '/ar', name: 'AR', component: TestCube},
    {path: '/signup', name: 'Signup', component: SignUp},
    {path: '/nftimgtrack', name: 'Image', component: Image},
    {path: '/handmadeimgtrack', name: 'HImage', component: HandMade},
 ]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router