import { createApp } from 'troisjs'
import SignUp from './components/SignUp.vue'
import Login from './components/Login.vue'
import TestCube from './components/TestCube.vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'

createApp(App).use(bootstrap).mount('#app')
